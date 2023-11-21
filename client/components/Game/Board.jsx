import React, { useState, useEffect, useCallback } from 'react';
import Square from './Square.jsx';
import Timer from './Timer.jsx';


// import logic functions
import initialState from '../../logic/initialStateFunc.js';
import emptyNeighbors from '../../logic/emptyNeighbors.js'
import winner from '../../logic/winner.js';



const Board = ({ selectedLevel, onLevelChange }) => {
  console.log('board level', selectedLevel)
  const [state, setState] = useState(initialState());

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
  

  // CLICK TO REVEAL SQUARE(S)
  const handleClick = useCallback((e) => {
    const id = e.target.id;
    
    // if value is flagged, cannot click, so don't handle click
    if (state.isFlagged[id]) return;

    if (state.reset) {
      setState((prevState) => ({ ...prevState, reset: false }));
    }
    
    
    let newGameStart = state.gameStart;
    let newIsRevealed = [...state.isRevealed];
    let newValue = [...state.value];
    let newIsFlagged = [...state.isFlagged];
    let newMineCount = state.mineCount;
    let newIsMine = [...state.isMine];
    let winnerSymbol = '🙂';
    
    // start game for timer
    if (!newGameStart) {
      newGameStart = true;
      setState((prevState) => ({ ...prevState, gameStart: newGameStart }));
    }

    // if value is 0, need to check squares
    if (state.value[id] === 0) {
      const revealZeros = emptyNeighbors(id, newValue, newIsRevealed, newIsFlagged);

      setState((prevState) => ({ ...prevState, isRevealed: revealZeros }));
    }

    // if square hasn't been revealed, change state
    if (!state.isRevealed[id]) {
      newIsRevealed[id] = true;

      setState((prevState) => ({ ...prevState, isRevealed: newIsRevealed }));
    }

    // if square is a mine, reveal all squares, game over
    if (state.isMine[id]) {
      console.log(`bang (operator)!`);

      const revealAll = Array(81).fill(true);
      const gameOverSymbol = '💀';

      setState((prevState) => ({
        ...prevState,
        gameOver: true,
        isRevealed: revealAll,
        symbol: gameOverSymbol,
      }));
    }

    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol, gameOver: true }));
      }
    }
  }, [state]);

  // RIGHT CLICK TO FLAG SQUARES YOU THINK ARE MINES
  const handleRightClick = useCallback(
    (e) => {
      const id = e.target.id;
      const newIsFlagged = [...state.isFlagged];
      let newMineCount = state.mineCount;
      const newIsMine = [...state.isMine];
      const newIsRevealed = [...state.isRevealed];
      let winnerSymbol = '🙂';

    // if square is not already flagged, mark square as flagged
    if (!state.isFlagged[id]) {
      newIsFlagged[id] = true;
      newMineCount -= 1;

      setState((prevState) => ({ ...prevState, mineCount: newMineCount, isFlagged: newIsFlagged }));
    // if square is already flagged and right clicked, remove flag/ unmark as flagged
    }else {
      newIsFlagged[id] = false;
        newMineCount += 1;

        setState((prevState) => ({ ...prevState, mineCount: newMineCount, isFlagged: newIsFlagged }));
      }

    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setState((prevState) => ({ ...prevState, symbol: winnerSymbol, gameOver: true }));
      }
    }
  },
  [state]
);


  const squares = [];

  for (let i = 0; i < 81; i++) {
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
        <button id="smile" onClick={() => setState(initialState())}>
          {state.symbol}
        </button>
        <div id="mineCount">{state.mineCount}</div>
      </div>
      <div id="grid">{squares}</div>
    </div>
  );
};

export default Board;