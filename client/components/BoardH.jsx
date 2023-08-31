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
  const [coordinates, setCoordinates] = useState(initialState.coordinates);
  const [value, setValue] = useState(initialState.value);
  const [revealed, setRevealed] = useState(initialState.isRevealed);
  const [flagged, setFlagged] = useState(initialState.isFlagged);
  const [mineCount, setMineCount] = useState(initialState.mineCount);
  const [gameOver, setGameOver] = useState(false);
  const [symbol, setSymbol] = useState('🤖');
  const [reset, setReset] = useState(true);

  // disable right click menu
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  }, [])

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
        </div>
        <div id="grid">
          {squares}
        </div> */}
      </div>
  )
}