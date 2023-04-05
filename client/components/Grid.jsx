import React, { Component } from 'react';
import Square from './Square.jsx';

import mineGenerator from '../functions/mines.js';
import checkForMines from '../functions/checkForMines.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // grid needs to be an array
      grid: {},
      gameOver: false,
      mineCount: 0,
      mines: [],
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
    const grid = {};
    // create mine squares/ square coordinates
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let loc = `r${i}c${j}`;
        if (mineArr.includes(loc)) {
          grid[`r${i}c${j}`] = '*'
          // grid[`r${i}c${j}`] = {
          //   isRevealed: false,
          //   isMine: true,
          //   value: null,
          // }
        }else {
          grid[`r${i}c${j}`] = 0;
          // grid[`r${i}c${j}`] = {
          //   isRevealed: false,
          //   isMine: false,
          //   value: 0,
          // }
        }
      }
    }

    // console.log('grid: ', grid)
    // console.log(Object.keys(grid))
    // check for mines and increment each square
    for(let coordinateKey in grid) {
      // let info = grid[coordinateKey]
      // console.log('coorkey: ', coordinateKey)
      // console.log('info: ', info)
      // console.log('grid[key]: ', grid[coordinateKey][value])

      let newVal = checkForMines(coordinateKey, mineArr, grid)
      grid[coordinateKey] = newVal;
      // grid[coordinateKey][value] = newVal;

    }


    this.setState({
      grid: grid,
      gameOver: false,
      mineCount: mineArr.length,
      mines: mineArr,
    })
  }

  componentDidUpdate() {
    if (!this.state.gameOver) {
      const grid = this.state.grid

    }
  }

  handleClick(e) {
    const key = e.target.id;
    // square.isClicked = true;
    // square.isRevealed = true;

    
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
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // if (this.state.mines.includes(`r${i}c${j}`)) {
        //   squares.push(
        //     <Square
        //       key={`${i},${j}`}
        //       row={i}
        //       col={j}
        //       grid={this.state.grid}
        //       isMine={true}
        //       isRevealed={false}
        //       handleClick={this.handleClick}
        //     />
        //   )
        // }else {
        //   squares.push(
        //     <Square
        //       key={`${i},${j}`}
        //       row={i}
        //       col={j}
        //       grid={this.state.grid}
        //       isMine={false}
        //       isRevealed={false}
        //       handleClick={this.handleClick}
        //     />
        //   )
        // }
        squares.push(
          <Square
            key={`${i},${j}`}
            row={i}
            col={j}
            grid={this.state.grid}
            // isMine={this.state.grid[`r${i}c${j}`].isMine}
            // isRevealed={this.state.grid[`r${i}c${j}`].isRevealed}
            handleClick={this.handleClick}
          />
        )
      };
    }
    console.log(this.state)

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