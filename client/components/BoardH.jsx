import React, { useState, useEffect } from 'react';
import Square from './Square.jsx';
import Timer from './Timer.jsx';
import initialState from '../logic/initialStateFunc.js';
import mineGenerator from '../logic/mines.js';
import checkForMines from '../logic/checkForMines.js';
import emptyNeighbors from '../logic/emptyNeighbors.js';
import winner from '../logic/winner.js';



export default function Board() {
  const [state, setState] = useState(initialState());

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }, []);

  const handleClick = (e) => {
    const id = e.target.id;

    if (state.isFlagged[id]) return;

    if (state.reset) {
      setState({
        ...state,
        reset: false,
      });
    }

    let newGameStart = state.gameStart;
    let newIsRevealed = [...state.isRevealed];
    let newValue = [...state.value];
    let newIsFlagged = [...state.isFlagged];
    let newMineCount = state.mineCount;
    let newIsMine = [...state.isMine];
    let winnerSymbol = '🙂';

    if (!newGameStart) {
      newGameStart = true;
      setState({
        ...state,
        gameStart: newGameStart,
      });
    }

    if (state.value[id] === 0) {
      const revealZeros = emptyNeighbors(id, newValue, newIsRevealed, newIsFlagged);
      setState({
        ...state,
        isRevealed: revealZeros,
      });
    }

    if (!state.isRevealed[id]) {
      newIsRevealed[id] = true;
      setState({
        ...state,
        isRevealed: newIsRevealed,
      });
    }

    if (state.isMine[id]) {
      const revealAll = Array(81).fill(true);
      const gameOverSymbol = '💀';
      setState({
        ...state,
        gameOver: true,
        isRevealed: revealAll,
        symbol: gameOverSymbol,
      });
    }

    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setState({
          ...state,
          symbol: winnerSymbol,
          gameOver: true,
        });
      }
    }
  };

  const handleRightClick = (e) => {
    const id = e.target.id;
    let newIsFlagged = [...state.isFlagged];
    let newMineCount = state.mineCount;
    const newIsMine = [...state.isMine];
    const newIsRevealed = [...state.isRevealed];
    let winnerSymbol = '🙂';

    if (!state.isFlagged[id]) {
      newIsFlagged[id] = true;
      newMineCount -= 1;
      setState({
        ...state,
        mineCount: newMineCount,
        isFlagged: newIsFlagged,
      });
    } else {
      newIsFlagged[id] = false;
      newMineCount += 1;
      setState({
        ...state,
        mineCount: newMineCount,
        isFlagged: newIsFlagged,
      });
    }

    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        setState({
          ...state,
          symbol: winnerSymbol,
          gameOver: true,
        });
      }
    }
  };

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
  }

  return (
    <div id="board">
      <div id="stats">
        <Timer gameStart={state.gameStart} gameOver={state.gameOver} reset={state.reset} />
        <button
          id="smile"
          onClick={() => setState(initialState())}
        >
          {state.symbol}
        </button>
        <div id="mineCount">
          {state.mineCount}
        </div>
      </div>
      <div id="grid">
        {squares}
      </div>
    </div>
  );
}
