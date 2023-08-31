import React, { useState, useEffect } from "react";
import { render } from 'react-dom';


export default function Square() {
  const [display, setDisplay] = useState('');
  const [squareClass, setSquareClass] = useState('hidden')


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
      setDisplay(`/>`);
      setSquareClass('flagged');
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


// export default Square;