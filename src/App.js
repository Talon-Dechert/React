import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  //* The <Menu dishes={this.state.dishes} /> makes the dishes state pass down into the menu component
}

export default App;
