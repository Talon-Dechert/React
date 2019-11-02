import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  const commentList = comments.map(comment => {
    return (
      <ul key={comment.id} className="list-unstyled">
        <li>
          <p>{comment.comment}</p>
        </li>
        <li>
          <p>
            --{comment.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            }).format(new Date(Date.parse(comment.date)))}
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

const DishDetail = props => {
  if (props.dish) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
