import React, { Component } from 'react';
import Row from './Row.jsx';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {},
      gameOver: false,
    }
  }

  // FRESH GRID
    // create grid with squares that have unique ids
    // *** STRETCH GOAL ***
    // would populate different grids depending on user selected level here
  // cleanGrid() {
  //   const grid = {};
  //   for (let i = 0; i < 9; i++) {
  //     for (let j = 0; j < 9; j++) {
  //       grid[`r${i}c${j}`] = '-'
  //     }
  //   }
  //   this.setState({
  //     grid,
  //     gameOver: false,
  //   })
  // }

  render() {
    const rows = [];
    for (let i = 0; i < 9; i++) {
      rows.push(
        <Row
          key={i}
          row={i}
          grid={this.state.grid}
          // handleClick={this.handleClick}
        />
      )
    }
    return(
      <div id="grid">
        {/* reset button at top */}
        {rows}
      </div>
    )
  }
}

export default Grid;