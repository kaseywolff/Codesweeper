import React, { Component } from 'react';
import Row from './Row.jsx';
import Square from './Square.jsx';

import mineGenerator from '../functions/mines.js';
import checkForMines from '../functions/checkForMines.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {},
      gameOver: false,
      mineCount: 0,
      mines: [],
      isMine: false,
      isRevealed: false,
      neighboringMines: 0,
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
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let loc = `r${i}c${j}`;
        if (mineArr.includes(loc)) {
          grid[`r${i}c${j}`] = '*';
        }else {
          grid[`r${i}c${j}`] = 0;
        }
      }
    }
    // console.log('Grid Console: ', grid)
    // console.log('Mine Array: ', mineArr)
    // checkForMines(currLoc, mineArr, grid)
    for(const key in grid) {
      // console.log(mineArr)
      let newVal = checkForMines(key, mineArr, grid)
      console.log('key: ', key, 'newVal: ', newVal)
      grid[key] = newVal;
    }


    this.setState({
      grid,
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
        if (this.state.mines.includes(`r${i}c${j}`)) {
          squares.push(
            <Square
              key={`${i},${j}`}
              row={i}
              col={j}
              grid={this.state.grid}
              isMine={true}
              isRevealed={false}
              handleClick={this.handleClick}
            />
          )
        }else {
          squares.push(
            <Square
              key={`${i},${j}`}
              row={i}
              col={j}
              grid={this.state.grid}
              isMine={false}
              isRevealed={false}
              handleClick={this.handleClick}
            />
          )
        }
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