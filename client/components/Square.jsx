import React, { Component } from 'react';
import { render } from 'react-dom';

// const Square = (props) => {
//   const { row, col, grid, handleClick, handleRightClick } = props;
//   console.log(grid)
  
//   return(
//     <div>
//       <button 
//         className="square"
//         id={`r${row}c${col}`}
//         onClick={handleClick}
//         onContextMenu={handleRightClick}
//       >
//         {[row, col]}
//       </button>
//     </div>
//   )
// }

class Square extends Component {
  render () {
    // console.log('value?: ', this.props.grid.value)
    console.log('mine check: ', this.props.isMine)
    let grid = this.props.grid
    let row = this.props.row;
    // console.log('row: ', row)
    let col = this.props.col;
    let display;
    // console.log(grid)
    // if (row) {
    //   console.log('row exists: ', grid[row])
    //   if (col) {
    //     display = grid[row][col]
    //   }
    // }
    // display = grid[row][col]
    // console.log(display)
    if (this.props.isMine) {
      console.log(this.props.squareNum)
      console.log(this.props.value[this.props.squareNum])
      display = '*'
    }else {
      display = this.props.value[this.props.squareNum]
    }
    return(
      <div>
        <button 
          className="square"
          id={`r${this.props.row}c${this.props.col}`}
          onClick={this.props.handleClick}
        >
          {/* {[this.props.row, this.props.col]} */}
          {display}
        </button>
      </div>
    )
  }
}


export default Square;