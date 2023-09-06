import React, { useState, useEffect } from "react";
import Square from './SquareH.jsx';
import Timer from './Timer.jsx';

// import logic
import checkForMines from "../logic/checkForMines";
import emptyNeighbors from "../logic/emptyNeighbors";
import initialStateFunc from '../logic/initialStateFunc';
import mineGenerator from "../logic/mines";
import winner from "../logic/winner";


export default function Board() {
  // use function to generate object with
  const initialState = initialStateFunc();
  
  // states used in game
  const [gameStart, setGameStart] = useState(false);
  const [coordinatesArray, setCoordinatesArray] = useState(initialState.coordinates);
  const [valueArray, setValueArray] = useState(initialState.value);
  const [revealedArray, setRevealedArray] = useState(initialState.isRevealed);
  const [flaggedArray, setFlaggedArray] = useState(initialState.isFlagged);
  const [mineCount, setMineCount] = useState(initialState.mineCount);
  const [mineArray, setMineArray] = useState(initialState.isMine)
  const [gameOver, setGameOver] = useState(false);
  const [symbol, setSymbol] = useState('🤖');
  const [reset, setReset] = useState(true);

  // disable right click menu
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  }, []);

  function handleClick(e) {
    const id = e.target.id;

    console.log('game start', gameStart)
    // if value is flagged, cannot click, so don't handle click
    // if()

    // reset triggers condition for timer
    if(reset) {
      setReset(false);
    };

    if (!gameStart) {
      setGameStart(true);
    }

    // if value is 0, check surrounding squares
    if (valueArray[id] === 0 && !revealedArray[id]) {
      console.log('valueArray[id]', valueArray[id])
      const revealZeros = emptyNeighbors(id, valueArray, revealedArray, flaggedArray);
      console.log('clicked', revealZeros)
      setRevealedArray(revealZeros)
    }
    // if square hasn't been revealed, change state
    // if ()
  };

  // create array of squares
  const squares = [];

  for (let i = 0; i < 81; i++) {
    squares.push(
      <Square
        key={i}
        id={i}
        coordinates={coordinatesArray[i]}
        mine={mineArray[i]}
        revealed={revealedArray[i]}
        flagged={flaggedArray[i]}
        value={valueArray[i]}
        handleClick={handleClick}
        // handleRightClick={this.handleRightClick}
      />
    );
  };

  return(
    <div id='board'>
        {/* <div id="stats">
            <Timer gameStart={this.state.gameStart} gameOver={this.state.gameOver} reset={this.state.reset}/>
          <button 
            id="smile"
            onClick={() => this.setState(initialState())}
          >
            {this.state.symbol}
          </button>
          <div id="mineCount">
            {this.state.mineCount}
          </div>
        </div> */}
        <div id="grid">
          {squares}
        </div>
      </div>
  )
}