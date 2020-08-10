import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import {
  AiFillStar,
  AiOutlineUser,
  AiOutlineClockCircle,
} from "react-icons/ai";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const comments = this.props.dish.comments.map((com, index) => {
      return (
        <ListGroupItem key={index}>
          <ListGroupItemHeading>{com.comment}</ListGroupItemHeading>
          <div className="comment-info">
            <div className="comment-rating">
              <p>{com.rating}</p> <AiFillStar style={{ marginTop: "4px" }} />
            </div>
            <div className="comment-author">
              <AiOutlineUser style={{ marginTop: "4px", marginRight: "5px" }} />{" "}
              <p>{com.author}</p>
            </div>
            <div className="comment-date">
              <AiOutlineClockCircle
                style={{ marginTop: "4px", marginRight: "5px" }}
              />{" "}
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(com.date)))}
              </p>
            </div>
          </div>
        </ListGroupItem>
      );
    });
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3">
            <img
              style={{ width: "100%" }}
              src={this.props.dish.image}
              alt="Dish Cap"
            />
          </div>
          <div className="col-md-9">
            <h2>{this.props.dish.name}</h2>
            <h3>{this.props.dish.category}</h3>
            <p>
              <strong>Description: </strong>
              {this.props.dish.description}
            </p>
            <h3>Comments</h3>
            <ListGroup>{comments}</ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
