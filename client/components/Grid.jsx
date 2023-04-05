import React, { Component } from 'react';
import Row from './Row.jsx';

import mineGenerator from '../functions/mines.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {},
      gameOver: false,
      mineCount: 0,
      mines: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.freshGrid = this.freshGrid.bind(this);
  };

  

  // component did mount
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
          grid[`r${i}c${j}`] = '0';
        }
        
      }
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
    
    if (this.state.grid[key] === "*") {
      this.setState({
        gameOver: true,
      })
    }
  }

  handleRightClick(e) {
    const key = e.target.id;
    
    if (this.state.grid[key] === "*") {
      this.setState({
        gameOver: true,
      })
    }
  }

  render() {
    const rows = [];
    for (let i = 0; i < 9; i++) {
      rows.push(
        <Row
          key={i}
          row={i}
          grid={this.state.grid}
          handleClick={this.handleClick}
        />
      )
    }
    console.log(this.state)
    return(
      <div id="game">
        {/* reset button and timer at top */}
        <div id="stats">
          <div id="timer">
            Timer
          </div>
          <div id="mineCount">
            {this.state.mineCount}
          </div>
        </div>
        <div id="grid">
          {rows}
        </div>
      </div>
    )
  }
}

export default Grid;