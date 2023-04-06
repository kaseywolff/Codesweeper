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

    let display;
    let squareClass;

    // if (this.props.isMine) {
    //   display = '*'
    //   newClass = 'X'
    //   // console.log(this.props.squareNum)
    // }else {
    //   display = this.props.value[this.props.squareNum]
    //   newClass = display
    //   // console.log('display: ', display)
    // }

    // what is displayed?
    // console.log(this.props.squareNum, this.props.value)

    if (!this.props.isRevealed) {
      // console.log('did we make it here?')
      display = ''
      squareClass = 'hidden'
    }else {
      display = this.props.value;

      if (this.props.value !== '*') {
        squareClass = `square${this.props.value}`
      }else {
        squareClass = 'squareX'
      }
    }

    return(
      <div>
        <button 
          className={squareClass}
          // id={`r${this.props.row}c${this.props.col}`}
          id={this.props.squareNum}
          onClick={this.props.handleClick}
        >
          {/* what is shown on the grid */}
          {display}
        </button>
      </div>
    )
  }
}


export default Square;