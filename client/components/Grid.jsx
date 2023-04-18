import React, { Component } from 'react';
import Square from './Square.jsx';

// import logic functions
import mineGenerator from '../logic/mines.js';
import checkForMines from '../logic/checkForMines.js';
import emptyNeighbors from '../logic/emptyNeighbors.js'
import winner from '../logic/winner';


// initial state function
function initialState() {
  const mineCoords = mineGenerator();
  const coordinates = [];
  const value = [];
  const isRevealed = [];
  const isMine = [];
  const isFlagged = [];
  const checkSurroundings = [];
  const symbol = '🤖';

  // create mine square coordinate array
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      coordinates.push([i, j])
      // check if the coordinates are a mine, set location to match format of mineCoords
      let loc = `r${i}c${j}`;
      if (mineCoords.includes(loc)) {
        // array index is square id, so if a square is a mine, push true in to isMine array so id and index match for later
        isMine.push(true);
      }else {
        isMine.push(false)
      }
    }
  };

  for (let i = 0; i < 81; i++) {
    // search for mines and update value array
    let val = checkForMines(coordinates[i], mineCoords, isMine[i]);
    value.push(val);
    // since already looping through all squares, default false for each index of isRevealed, isFlagged, and checkSurroundings arrays
    isRevealed.push(false);
    isFlagged.push(false);
    checkSurroundings.push(false);
  };

  const generatedState = {
    coordinates: coordinates,
    value: value,
    isRevealed: isRevealed,
    isFlagged: isFlagged,
    isMine: isMine,
    mineCount: mineCoords.length,
    gameOver: false,
    symbol: symbol,
  }

  return generatedState;
};


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
    this.state;
  }

  // CLICK TO REVEAL SQUARE(S)
  handleClick(e) {
    const id = e.target.id;

    // if value is flagged, cannot click, so don't handle click
    if (this.state.isFlagged[id]) return;


    let newIsRevealed = this.state.isRevealed;
    let newValue = this.state.value;
    let newIsFlagged = this.state.isFlagged;
    let newMineCount = this.state.mineCount;
    let newIsMine = this.state.isMine;
    let winnerSymbol = '🙂';

    // if value is 0, need to check squares
    if (this.state.value[id] === 0) {
      const revealZeros = emptyNeighbors(id, newValue, newIsRevealed, newIsFlagged);

      this.setState({
        isRevealed: revealZeros,
      })
    };

    // if square hasn't been revealed, change state
    if (!this.state.isRevealed[id]) {
      newIsRevealed[id] = true;

      this.setState({
        isRevealed: newIsRevealed,
      })
    };

    // if square is a mine, reveal all squares, game over
    if (this.state.isMine[id]) {
      console.log(`bang (operator)!`)

      const revealAll = []
      // hard coding for 9x9 grid
      // could probably do a while loop instead of going through each index
      for (let squares = 0; squares < 81; squares++) {
        revealAll.push(true)
      }
      const gameOverSymbol = '💀';
      
      this.setState({
        gameOver: true,
        isRevealed: revealAll,
        symbol: gameOverSymbol,
      })
    };

    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        this.setState({
          symbol: winnerSymbol,
          gameOver: true,
        })
      }
    }
  }

  // RIGHT CLICK TO FLAG SQUARES YOU THINK ARE MINES
  handleRightClick(e) {
    const id = e.target.id;
    const newIsFlagged = this.state.isFlagged;
    let newMineCount = this.state.mineCount;
    const newIsMine = this.state.isMine;
    const newIsRevealed = this.state.isRevealed;
    let winnerSymbol = '🙂';

    // if square is not already flagged, mark square as flagged
    if (!this.state.isFlagged[id]) {
      newIsFlagged[id] = true;
      newMineCount -= 1;

      this.setState({
        mineCount: newMineCount,
        isFlagged: newIsFlagged,
      });
    // if square is already flagged and right clicked, remove flag/ unmark as flagged
    }else {
      newIsFlagged[id] = false;
      newMineCount += 1;

      this.setState({
        mineCount: newMineCount,
        isFlagged: newIsFlagged,
      })
    }

    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
        this.setState({
          symbol: winnerSymbol,
          gameOver: true,
        })
      }
    }
  }

  render() {
    const squares = [];
    
    for (let i = 0; i < 81; i++) {
      squares.push(
        <Square
          key={i}
          id={i}
          coordinates={this.state.coordinates[i]}
          isMine={this.state.isMine[i]}
          isRevealed={this.state.isRevealed[i]}
          isFlagged={this.state.isFlagged[i]}
          value={this.state.value[i]}
          handleClick={this.handleClick}
          handleRightClick={this.handleRightClick}
        />
      );
    };

    return(
      <div id='board'>
        <div id="stats">
          <div id="timer">
            Timer
          </div>
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
        </div>
      </div>
    )
  }
};

export default Grid;