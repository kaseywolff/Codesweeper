import React, { Component } from 'react';
import Square from './Square.jsx';

class Row extends Component {
  render() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(
        <Square
          key = {i}
          row = {this.props.row}
          col = {i}
          grid = {this.props.grid}
          // handleClick = {this.props.handleClick}
        />
      )
    }
    return(
      <div className="row">
        {squares}
      </div>
    )
  }
}

export default Row;