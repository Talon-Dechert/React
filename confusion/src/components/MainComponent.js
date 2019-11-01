import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    //* Super refers to the parent class constructor, you can't use 'this' in a constructor until you've
    //* called the parent constructor. This enforces that the parent constructor is running first.
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            render={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  //* The <Menu dishes={this.state.dishes} /> makes the dishes state pass down into the menu component
}

export default Main;
