import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../HOC/Aux";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 3,
      meat: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Burger Controller</div>
      </Aux>
    )
  }
}
export default BurgerBuilder;