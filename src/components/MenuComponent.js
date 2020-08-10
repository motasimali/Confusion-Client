import React, { Component } from "react";
import {
  Card,
  CardColumns,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class Menu extends Component {
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
          <CardImg top width="100%" src={dish.image} alt="Dish Image Cap" />
          <CardBody style={{ cursor: "pointer" }}>
            <CardTitle>{dish.name}</CardTitle>
            <CardSubtitle>{dish.category}</CardSubtitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-12">
            <h3>DISHES</h3>
          </div>
        </div>
        <CardColumns>{menu}</CardColumns>
      </div>
    );
  }
}

export default Menu;
