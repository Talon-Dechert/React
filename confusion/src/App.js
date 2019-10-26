import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  //I'm guessing this gets triggered every time state changes
  constructor(props) {
    //! This is a mystery
    super(props);
    //* This takes the imported DISHES state and sets it to the state in this component
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
  //* The <Menu dishes={this.state.dishes} /> makes the dishes state pass down into the menu component
  //! Hopefully the use of 'dishes' as a class can be explained to me
}

export default App;
