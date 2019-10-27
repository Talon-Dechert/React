import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
  //* The <Menu dishes={this.state.dishes} /> makes the dishes state pass down into the menu component
}

export default App;
