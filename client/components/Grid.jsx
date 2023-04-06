import React, { Component } from 'react';
import Square from './Square.jsx';

import mineGenerator from '../functions/mines.js';
import checkForMines from '../functions/checkForMines.js';
import emptyNeighbors from '../functions/emptyNeighbors.js'

// declaring fresh grid outside so will update?

function initialState() {
  const mineArr = mineGenerator();
  const grid = [];
  const printVal = [];
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
          printVal.push(newVal)
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
        value: printVal,
        isRevealed: isRevealed,
        isFlagged: isFlagged,
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
    const printVal = [];
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
        printVal.push(newVal)
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
      value: printVal,
      isRevealed: isRevealed,
      isFlagged: isFlagged,
    })
  }

  // componentDidUpdate() {
  //   const newState = this.state
  //   // if (!this.state.gameOver) {
  //   //   console.log(newState)
  //   //   this.setState({
  //   //     newState
  //   //   })
  //   // }
  // }

  handleClick(e) {
    const id = e.target.id
    let newReveal = this.state.isRevealed
    
    // if square is a mine, reveal all squares, game over
    if (this.state.mineStateArr[id]) {
      console.log(`boom!`)
      newReveal = [];
      // hard coding for 9x9 grid
      for (let squares = 0; squares < 82; squares++) {
        newReveal.push(true)
      }

      this.setState({
        gameOver: true,
        isRevealed: newReveal,
      })
    }

    // if square hasn't been revealed, change state
    if (!this.state.isRevealed[id]) {
      newReveal[id] = true

      this.setState({
        isRevealed: newReveal
      })
    }


  }

  // RIGHT CLICK TO FLAG SQUARES YOU THINK ARE MINES
  handleRightClick(e) {
    const id = e.target.id
    let newFlag = this.state.isFlagged
    let newMineCount = this.state.mineCount

    // console.log(key)

    // console.log('right clicked')
    // console.log(this.state.mineStateArr[id])
    
    //not flagged
    if (!this.state.isFlagged[id]) {
      newFlag[id] = true
      newMineCount -= 1;
      // console.log('newFlag to true: ',newFlag)

      this.setState({
        mineCount: newMineCount,
        isFlagged: newFlag,
      })
    }else {
      newFlag[id] = false
      newMineCount += 1
      // console.log('newFlag to false: ',newFlag)

      this.setState({
        mineCount: newMineCount,
        isFlagged: newFlag
      })
    }
  }

  render() {
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
    console.log('state log: ', this.state)

    return(
      <div id="game">
        <div id="stats">
          <div id="timer">
            Timer
          </div>
          <button 
            id="smile"
            onClick={() => this.setState(initialState())}
          >
            &#x1F916;
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