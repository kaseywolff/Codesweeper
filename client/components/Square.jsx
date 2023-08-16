import React, { Component } from 'react';
import { render } from 'react-dom';


class Square extends Component {
  render () {

    let display;
    let squareClass;

    // if square is not revealed (clicked) and square is not flagged (left click)
    if (!this.props.isRevealed && !this.props.isFlagged) {
      display = ''
      squareClass = 'hidden'
    }else {
      display = this.props.value;

      if (this.props.value !== '!') {
        squareClass = `square${this.props.value}`
      }else {
        squareClass = 'squareX'
      };
    };

    // if square is not revealed (clicked) and square is flagged (left click)
    if (!this.props.isRevealed && this.props.isFlagged) {
      display = `/>`;
      squareClass = 'flagged'
    };


    return(
      <div className='square'>
        <button 
          className={squareClass}
          id={this.props.id}
          onClick={this.props.handleClick}
          onContextMenu={this.props.handleRightClick}
        >
          {display}
        </button>
      </div>
    )
  };
};


export default Square;