import React, { Component } from 'react';
import { render } from 'react-dom';

import Grid from './Grid.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Grid />
      </div>
    )
  }
}

export default App;