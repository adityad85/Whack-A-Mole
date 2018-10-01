import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Game from './Navigation';
import { store } from './Redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
