import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
  constructor(props) {
    //* Super refers to the parent class constructor, you can't use 'this' in a constructor until you've
    //* called the parent constructor. This enforces that the parent constructor is running first.
    super(props);
    this.state = {
      //* This sets the state to whichever dish is clicked on, and renders a card component per
      //* selectedDish
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  //* Render is what will always show up from this component. Return is what the component will
  //* always be returning for updates
  render() {
    //* Instead of this.state.dishes, we are taking in props from above now with this.props.dishes
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
