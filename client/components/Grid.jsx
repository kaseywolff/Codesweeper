import React, { Component } from 'react';
import Square from './Square.jsx';

import mineGenerator from '../logic/mines.js';
import checkForMines from '../logic/checkForMines.js';
import emptyNeighbors from '../logic/emptyNeighbors.js'
import winner from '../logic/winner';

// declaring fresh grid outside so will update?

function initialState() {
  const mineArr = mineGenerator();
  const grid = [];
  const value = [];
  const isRevealed = [];
  const mineStateArr = [];
  const isFlagged = [];
  const symbol = '🤖';

      // create mine squares/ square coordinates
      for (let i = 0; i < 9; i++) {
        grid.push([])
        for (let j = 0; j < 9; j++) {
          let loc = `r${i}c${j}`;
          if (mineArr.includes(loc)) {
            mineStateArr.push(true)
            grid[i][j] = {
              row: i,
              col: j,
              isMine: true,
              isRevealed: false,
              isFlagged: false,
              value: '!',
            }
          }else {
            // not sure if this is doing anything...
            mineStateArr.push(false)
            grid[i][j] = {
              row: i,
              col: j,
              isMine: false,
              isRevealed: false,
              isFlagged: false,
              value: 0,
            }
          }
        }
      }
  
  
  
      // increase value with changed grid
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let row = i;
          let col = j;
          let newVal = checkForMines(row, col, mineArr, grid);
          grid[i][j].value = newVal
          value.push(newVal)
          isRevealed.push(false)
          isFlagged.push(false)
        }
      }
  
  
      const generatedState = {
        grid,
        gameOver: false,
        mineCount: mineArr.length,
        mines: mineArr,
        mineStateArr: mineStateArr,
        value: value,
        isRevealed: isRevealed,
        isFlagged: isFlagged,
        symbol: symbol,
      }
    


  return generatedState
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    // this.state = {
    //   // grid needs to be an array?
    //   // don't actually ever use grid...
    //   grid: [],
    //   gameOver: false,
    //   mineCount: 0,
    //   mines: [],
    //   mineStateArr: [],
    //   value: [],
    //   isRevealed: [],
    //   isFlagged: [],
    // };
    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.freshGrid = this.freshGrid.bind(this);
  };

  

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
    this.freshGrid();
  }
  // component did update?

  freshGrid() {
    const mineArr = mineGenerator();
    const grid = [];
    const value = [];
    const isRevealed = [];
    const mineStateArr = [];
    const isFlagged = [];
    // create mine squares/ square coordinates
    for (let i = 0; i < 9; i++) {
      grid.push([])
      for (let j = 0; j < 9; j++) {
        let loc = `r${i}c${j}`;
        if (mineArr.includes(loc)) {
          mineStateArr.push(true)
          grid[i][j] = {
            row: i,
            col: j,
            isMine: true,
            isRevealed: false,
            isFlagged: false,
            value: '!',
          }
        }else {
          // not sure if this is doing anything...
          mineStateArr.push(false)
          grid[i][j] = {
            row: i,
            col: j,
            isMine: false,
            isRevealed: false,
            isFlagged: false,
            value: 0,
          }
        }
      }
    }



    // increase value with changed grid
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let row = i;
        let col = j;
        let newVal = checkForMines(row, col, mineArr, grid);
        grid[i][j].value = newVal
        value.push(newVal)
        isRevealed.push(false)
        isFlagged.push(false)
      }
    }


    this.setState({
      grid,
      gameOver: false,
      mineCount: mineArr.length,
      mines: mineArr,
      mineStateArr: mineStateArr,
      value: value,
      isRevealed: isRevealed,
      isFlagged: isFlagged,
    })
  }


  handleClick(e) {

    const id = e.target.id

    let oldReveal = this.state.isRevealed;
    let valueArr = this.state.value;
    let flaggedArr = this.state.isFlagged;
    let newMineCount = this.state.mineCount;
    let minesArr = this.state.mineStateArr;
    let winnerSymbol = '🙂'


    // if value is flagged, cannot click, so don't handle click
    if (this.state.isFlagged[id]) return;

    
    // if value is 0, need to check squares
    if (this.state.value[id] === 0) {
      const newReveal = emptyNeighbors(id, valueArr, oldReveal, flaggedArr);
      
      this.setState({
        isRevealed: newReveal,
      })
    }
    
    
    // if square hasn't been revealed, change state
    if (!this.state.isRevealed[id]) {
      oldReveal[id] = true
      
      this.setState({
        isRevealed: oldReveal
      })
    }
    
    // if square is a mine, reveal all squares, game over
    if (this.state.mineStateArr[id]) {
      console.log(`bang (operator)!`)
      
      const newReveal = [];
      // hard coding for 9x9 grid
      for (let squares = 0; squares < 82; squares++) {
        newReveal.push(true)
      }
      const gameOverSymbol = '💀';
      
      this.setState({
        gameOver: true,
        isRevealed: newReveal,
        symbol: gameOverSymbol,
      })
    }
    
    
    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(flaggedArr, minesArr, oldReveal)) {
        this.setState({
          symbol: winnerSymbol,
          gameOver: true,
        })
      }
    }
    
  }

  // RIGHT CLICK TO FLAG SQUARES YOU THINK ARE MINES
  handleRightClick(e) {
    const id = e.target.id
    const newFlag = this.state.isFlagged
    let newMineCount = this.state.mineCount
    const minesArr = this.state.mineStateArr
    const revealed = this.state.isRevealed;
    let winnerSymbol = '🙂'
    console.log('rc mine count: ', newMineCount)

    
    
    //not flagged
    if (!this.state.isFlagged[id]) {
      newFlag[id] = true
      newMineCount -= 1;
      // console.log(newFlag);
      
      this.setState({
        mineCount: newMineCount,
        isFlagged: newFlag,
      })
    }else {
      newFlag[id] = false
      newMineCount += 1
      
      this.setState({
        mineCount: newMineCount,
        isFlagged: newFlag
      })
    }
    
    // if mineCount = 0, need to check if all mines are flagged correctly
    if (newMineCount === 0) {
      if (winner(newFlag, minesArr, revealed)) {
        this.setState({
          symbol: winnerSymbol,
          gameOver: true,
        })
      }
    }

  }

  render() {
    // const smilePrint = `&#x1F916;`
    const squares = [];
    const mineLoc = this.state.mines
    const mineStateArr = [];
    let squareNum = -1;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let ismine = false;
        squareNum++
        if (mineLoc.includes(`r${i}c${j}`)) {
          ismine = true
        }
        mineStateArr.push(ismine)
        squares.push(
          <Square
            key={`${i},${j}`}
            row={i}
            col={j}
            squareNum={squareNum}
            grid={this.state.grid}
            isMine={ismine}
            mineStateArr={this.state.mineStateArr[squareNum]}
            isRevealed={this.state.isRevealed[squareNum]}
            isFlagged={this.state.isFlagged[squareNum]}
            value={this.state.value[squareNum]}
            handleClick={this.handleClick}
            handleRightClick={this.handleRightClick}
          />
        )
      };
    }

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
}

export default Grid;


// explosion emoji code: 128165	1F4A5
// computer emoji code: 128187	1F4BB
// cool smile code: 128526	1F60E
// rocket ship code: 128640	1F680
// roboj emoji code: 129302	1F916
// straight smile code: 128556	1F62C
// open eye smile: &#x1F600

// old school smile ( :) ) :&#41; 