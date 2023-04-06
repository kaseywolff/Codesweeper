import React, { Component } from 'react';
import Square from './Square.jsx';

import mineGenerator from '../functions/mines.js';
import checkForMines from '../functions/checkForMines.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // grid needs to be an array
      grid: [],
      gameOver: false,
      mineCount: 0,
      mines: [],
      mineStateArr: [],
      value: [],
      isRevealed: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.freshGrid = this.freshGrid.bind(this);
  };

  

  componentDidMount() {
    this.freshGrid();
  }
  // component did update?

  freshGrid() {
    const mineArr = mineGenerator();
    const grid = [];
    const printVal = [];
    const isRevealed = [];
    const mineStateArr = [];
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
            value: '*',
          }
        }else {
          // not sure if this is doing anything...
          mineStateArr.push(false)
          grid[i][j] = {
            row: i,
            col: j,
            isMine: false,
            isRevealed: false,
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

  handleRightClick(e) {
    const id = e.target.id
    let newReveal = this.state.isRevealed

    // console.log(key)

    console.log('clicked')
    
    if (!this.state.isRevealed[id]) {
      newReveal[id] = true
      console.log('newReveal: ',newReveal)

      this.setState({
        isRevealed: newReveal
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