import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark className="nav">
          <div className="container">
            <NavbarBrand href="">Confusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="content">
          <div className="container">
            <div className="dish-detail">
              {this.renderDish(this.state.selectedDishId)}
            </div>
          </div>
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelected(dishId)}
          />
        </div>
      </div>
    );
  }
  onDishSelected(dishId) {
    this.setState({ selectedDishId: dishId });
  }
  renderDish(dishId) {
    if (dishId != null) {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDishId
            )[0]
          }
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default Main;
