import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    const commentList = comments.map(comment => {
      return (
        <ul key={comment.id} className="list-unstyled">
          <li>
            <p>{comment.comment}</p>
          </li>
          <li>
            <p>
              --{comment.author}, {comment.date}
            </p>
          </li>
        </ul>
      );
    });
    if (comments) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentList}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
