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

    // if square is not revealed (clicked) and square is not flagged (left click)
    if (!this.props.isRevealed && !this.props.isFlagged) {
      // console.log('inside loop', this.props.isFlagged)
      // console.log('did we make it here?')
      display = ''
      squareClass = 'hidden'
    }else {
      display = this.props.value;

      if (this.props.value !== '!') {
        squareClass = `square${this.props.value}`
      }else {
        squareClass = 'squareX'
      }
    }

    // if square is not revealed (clicked) and square is flagged (left click)
    if (!this.props.isRevealed && this.props.isFlagged) {
      display = `/>`;
      squareClass = 'flagged'
    }


    return(
      <div>
        <button 
          className={squareClass}
          // id={`r${this.props.row}c${this.props.col}`}
          id={this.props.squareNum}
          onClick={this.props.handleClick}
          onContextMenu={this.props.handleRightClick}
        >
          {/* what is shown on the grid */}
          {display}
        </button>
      </div>
    )
  }
}


export default Square;