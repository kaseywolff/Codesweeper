import React, { useState, useEffect, useCallback } from 'react';
import Square from './Square.jsx';
import Timer from './Timer.jsx';
import '../../scss/board.scss';

// import logic functions
import boardSize from '../../logic/boardSize.js';
import emptyNeighbors from '../../logic/emptyNeighbors.js'
import initialState from '../../logic/initialStateFunc.js';
import winner from '../../logic/winner.js';



function Board({ selectedLevel }) {
  const [board, setBoard] = useState(boardSize(selectedLevel));
  const [state, setState] = useState(initialState(board));


  // update state when level is changed
  useEffect(() => {
    const newBoard = boardSize(selectedLevel);

    setBoard(newBoard);
    setState(initialState(newBoard));
  }, [selectedLevel]);

  // disable right click menu to allow for flagging
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  

  /* <----- CLICK: REVEAL SQUARES -----> */
  const handleClick = useCallback((e) => {
    const id = e.target.id;
    
    // if value is flagged, cannot click, so don't handle click
    if (state.isFlagged[id]) return;

    if (state.reset) {
      setState((prevState) => ({ ...prevState, reset: false }));
    };
    
    
    let newGameStart = state.gameStart;
    let newIsRevealed = [...state.isRevealed];
    let newValue = [...state.value];
    let newIsFlagged = [...state.isFlagged];
    let newMineCount = state.mineCount;
    let newIsMine = [...state.isMine];
    let winnerSymbol = '🙂';
    
    // TIMER START: start game for timer
    if (!newGameStart) {
      newGameStart = true;

      setState((prevState) => ({ ...prevState, gameStart: newGameStart }));
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

      setState((prevState) => ({
        ...prevState,
        gameOver: true,
        isRevealed: revealAll,
        symbol: gameOverSymbol,
      }));
    };

    // WINNER: if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol, gameOver: true }));
      };
    };
  }, [state]);

  
  /* <----- RIGHT CLICK: FLAG POSSIBLE MINES -----> */
  const handleRightClick = useCallback(
    (e) => {
      const id = e.target.id;
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
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol, gameOver: true }));
      };
    };
  }, [state]);

  const mineDigitsArr = ('00' + state.mineCount).slice(-3).split('');
  const mineDigits = [];
  mineDigitsArr.map((digit, index) => {
    mineDigits.push(
      <div key={`mineDigit${index}`} className='digit'>
        {digit}
      </div>
    );
  });

  const squares = [];

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
        <Timer gameStart={state.gameStart} gameOver={state.gameOver} reset={state.reset} />
        <button id="smile" onClick={() => setState(initialState(board))}>
          {state.symbol}
        </button>
        <div className='stats-box'>
          {mineDigits}
        </div>
      </div>
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

export default Board;