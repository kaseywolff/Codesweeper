import React, { Component } from 'react';
import { render } from 'react-dom';

class Square extends Component {
  render () {
    return(
      <div>
        <button 
          className="square"
          id={`r${this.props.row}c${this.props.col}`}
        // onClick={this.props.handleClick}
        >
          {this.props.grid[`r${this.props.row}c${this.props.col}`]}
        </button>
      </div>
    )
  }
}

export default Square;