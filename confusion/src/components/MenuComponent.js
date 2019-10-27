import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    //* Super refers to the parent class constructor, you can't use 'this' in a constructor until you've
    //* called the parent constructor. This enforces that the parent constructor is running first.
    super(props);
  }

  //* Render is what will always show up from this component. Return is what the component will
  //* always be returning for updates
  render() {
    //* Instead of this.state.dishes, we are taking in props from above now with this.props.dishes
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
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
      </div>
    );
  }
}

export default Menu;
