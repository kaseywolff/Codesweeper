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
      value: [],
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
    //big change -> grid array, not obj
    const grid = [];
    const printVal = [];
    // create mine squares/ square coordinates
    for (let i = 0; i < 9; i++) {
      grid.push([])
      for (let j = 0; j < 9; j++) {
        let loc = `r${i}c${j}`;
        if (mineArr.includes(loc)) {
          // grid[`r${i}c${j}`] = '*'
          // grid[`r${i}c${j}`] = {
          //   isRevealed: false,
          //   isMine: true,
          //   value: null,
          // }
          //big change
          grid[i][j] = {
            row: i,
            col: j,
            isMine: true,
            isRevealed: false,
            value: '*',
          }
          //stop big change
        }else {
          // grid[`r${i}c${j}`] = 0;
          // grid[`r${i}c${j}`] = {
          //   isRevealed: false,
          //   isMine: false,
          //   value: 0,
          // }
          //big change
          grid[i][j] = {
            row: i,
            col: j,
            isMine: false,
            isRevealed: false,
            value: 0,
          }
          // stop big change
        }
      }
    }

    // // console.log('grid: ', grid)
    // // console.log(Object.keys(grid))
    // // check for mines and increment each square
    // for(let coordinateKey in grid) {
    //   // let info = grid[coordinateKey]
    //   // console.log('coorkey: ', coordinateKey)
    //   // console.log('info: ', info)
    //   // console.log('grid[key]: ', grid[coordinateKey][value])

    //   let newVal = checkForMines(coordinateKey, mineArr, grid)
    //   grid[coordinateKey] = newVal;
    //   // grid[coordinateKey][value] = newVal;

    // }

    // increase value with changed grid
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let row = i;
        let col = j;
        let newVal = checkForMines(row, col, mineArr, grid);
        // console.log(`row: ${row}, col: ${col}, newVal: ${newVal}`)
        // console.log('what does grid[i][j].value look like: ', grid[i][j].value)
        grid[i][j].value = newVal
        printVal.push(newVal)
      }
    }

    // console.log(grid)

    this.setState({
      grid,
      gameOver: false,
      mineCount: mineArr.length,
      mines: mineArr,
      value: printVal,
    })
  }

  componentDidUpdate() {
    if (!this.state.gameOver) {
      const grid = this.state.grid

    }
  }

  handleClick(e) {
    const key = e.target.id;
    const squareNum = e.target.squareNum
    // square.isClicked = true;
    // square.isRevealed = true;
    const row = this.state.row
    const col = this.state.col

    console.log(key)
    console.log(this.state)

    
    if (this.state.grid[key] === "*") {
      console.log(this.state.grid)
      this.setState({
        gameOver: true,
      })
    }
  }

  handleRightClick(e) {
    const key = e.target.id;
    
    if (this.state.grid[key][isMine]) {
      this.setState({
        gameOver: true,
      })
    }
  }

  render() {
    const squares = [];
    const mineLoc = this.state.mines
    console.log(mineLoc)
    let squareNum = -1;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let ismine = false;
        squareNum++
        if (mineLoc.includes(`r${i}c${j}`)) {
          ismine = true
          console.log(`${i}, ${j} is a mine`)
        }
        squares.push(
          <Square
            key={`${i},${j}`}
            row={i}
            col={j}
            squareNum={squareNum}
            grid={this.state.grid}
            isMine={ismine}
            isRevealed={false}
            value={this.state.value}
            
            // isMine={this.state.grid[`r${i}c${j}`].isMine}
            // isRevealed={this.state.grid[`r${i}c${j}`].isRevealed}
            handleClick={this.handleClick}
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