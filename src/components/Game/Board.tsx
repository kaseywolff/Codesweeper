import React, { useState, useEffect, useCallback } from 'react';
import NewHighScore from '../HighScore/NewHighScore';
import Square from './Square';
import Timer from './Timer';
import { BoardProps, BoardSize, State } from '../../types/index';
import '../../scss/board.scss';

// import logic functions
import boardSize from '../../logic/boardSize';
import checkHighScore from '../../logic/checkHighScore';
import emptyNeighbors from '../../logic/emptyNeighbors'
import initialState from '../../logic/initialStateFx';
import winner from '../../logic/winner';



export default function Board({ selectedLevel }: BoardProps): JSX.Element {
  const [board, setBoard] = useState<BoardSize>(boardSize(selectedLevel));
  const [state, setState] = useState<State>(initialState(board));
  const [ gameStart, setGameStart ] = useState<boolean>(false);
  const [ gameOver, setGameOver ] = useState<boolean>(false);
  const [ playerWin, setPlayerWin ] = useState<boolean>(false);
  // timer state
  const [ time, setTime ] = useState<number>(0);
  const [ running, setRunning ] = useState<boolean>(false);
  const [ reset, setReset ] = useState<boolean>(true);
  const [ top5Time, setTop5Time ] = useState<boolean>(false);
  const [ highScoreData, setHighScoreData ] = useState<any[]>([]);
  
  // update state when level is changed
  useEffect(() => {
    const newBoard = boardSize(selectedLevel);

    setBoard(newBoard);
    setState(initialState(newBoard));
  }, [selectedLevel]);


  // disable right click menu to allow for flagging
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);


  /* <----- TIMER FUNCTIONALITY -----> */
  if(reset && time != 0) {
    setTime(0);
  };

  if(gameOver && running) {
    setRunning(false);
  };

  if(gameStart && !running && !gameOver) {
    setRunning(true);
    setTime(1000);
  };
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    };
    return () => clearInterval(interval);
  }, [running]);
  

  /* <----- CLICK: REVEAL SQUARES -----> */
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as Element;
    const id: number = Number(target.id);
    
    // if value is flagged, cannot click, so don't handle click
    if (state.isFlagged[id]) return;

    if (reset) {
      setReset(false);
    };
    
    
    let newIsRevealed = [...state.isRevealed];
    let newValue = [...state.value];
    let newIsFlagged = [...state.isFlagged];
    let newMineCount = state.mineCount;
    let newIsMine = [...state.isMine];
    let winnerSymbol = '🙂';
    
    // TIMER START: start game for timer
    if (!gameStart) {
      setGameStart(true);
      setRunning(true);
    };

    // ZERO: if value is 0, need to check squares
    if (state.value[id] === 0) {
      const revealZeros = emptyNeighbors(id, board.rows, board.cols, newValue, newIsRevealed, newIsFlagged);

      setState((prevState) => ({ ...prevState, isRevealed: revealZeros }));
    };

    // REVEAL: if square hasn't been revealed, change state
    if (!state.isRevealed[id]) {
      newIsRevealed[id] = true;

      setState((prevState) => ({ ...prevState, isRevealed: newIsRevealed }));
    };

    // GAME OVER: if square is a mine, reveal all squares
    if (state.isMine[id]) {
      console.log(`bang (operator)!`);

      const revealAll = Array(board.cols * board.rows).fill(true);
      const gameOverSymbol = '💀';

      setGameOver(true);
      setState((prevState) => ({
        ...prevState,
        isRevealed: revealAll,
        symbol: gameOverSymbol,
      }));
    };

    // WINNER: if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setGameOver(true);
        setPlayerWin(true);
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol }));
      };
    };
  }, [state]);

  
  /* <----- RIGHT CLICK: FLAG POSSIBLE MINES -----> */
  const handleRightClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = e.target as Element;
      const id = Number(target.id);
      const newIsFlagged = [...state.isFlagged];
      let newMineCount = state.mineCount;
      const newIsMine = [...state.isMine];
      const newIsRevealed = [...state.isRevealed];
      let winnerSymbol = '🙂';

    // FLAG: if square is not already flagged, mark square as flagged
    if (!state.isFlagged[id]) {
      newIsFlagged[id] = true;
      newMineCount -= 1;

      setState((prevState) => ({ ...prevState, mineCount: newMineCount, isFlagged: newIsFlagged }));

    // UNFLAG: if square is already flagged and right clicked, remove flag/ unmark as flagged
    }else {
      newIsFlagged[id] = false;
        newMineCount += 1;

        setState((prevState) => ({ ...prevState, mineCount: newMineCount, isFlagged: newIsFlagged }));
    };

    // WINNER: if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setGameOver(true);
        setPlayerWin(true);
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol }));
      };
    };
  }, [state]);
  
  useEffect(() => {
    if (playerWin) {
      checkHighScore(time, selectedLevel)
        .then((highScoreResults) => {
          if (highScoreResults.isTop5) {
            setTop5Time(true);
          };
          const highScoreDataFetch = highScoreResults.data;
          setHighScoreData(highScoreDataFetch as any[]);
        })
        .catch((error) => {
          console.error('Error checking high score:', error);
        });
    };
  }, [playerWin]);



  const mineDigitsArr: string[] = ('00' + state.mineCount).slice(-3).split('');

  const mineDigits: JSX.Element[] = mineDigitsArr.map((digit, index) => (
    <div key={`mineDigit${index}`} className='digit'>
      {digit}
    </div>
  ));
  

  const squares: JSX.Element[] = [];

  for (let i = 0; i < board.rows * board.cols; i++) {
    squares.push(
      <Square
        key={i}
        id={i}
        coordinates={state.coordinates[i]}
        isMine={state.isMine[i]}
        isRevealed={state.isRevealed[i]}
        isFlagged={state.isFlagged[i]}
        value={state.value[i]}
        handleClick={handleClick}
        handleRightClick={handleRightClick}
      />
    );
  };

  return (
    <div id="board">
      <div id="stats">
        <Timer time={time} />
        <button id="smile" 
          onClick={() => {
            setState(initialState(board));
            setReset(true);
            setGameOver(false);
            setGameStart(false);
            setTop5Time(false);
            setPlayerWin(false);
          }
        }>
          {state.symbol}
        </button>
        <div className='stats-box'>
          {mineDigits}
        </div>
      </div>

      {
        top5Time 
        && 
        <NewHighScore 
          top5Time={top5Time} 
          time={Math.ceil(time)} 
          highScoreData={highScoreData} 
          selectedLevel={selectedLevel} 
        />
      }

      <div 
        id="grid" 
        style={{
          gridTemplateColumns: `repeat(${board.cols}, 1fr)`,
          gridTemplateRows: `repeat(${board.rows}, 1fr)`,
        }}
      >
        {squares}
      </div>
    </div>
  );
};