import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../HOC/Aux";

class BurgerBuilder extends Component {
  state = {
    // Max solution
    // ingredients: {
    //   salad: 0,
    //   bacon: 0,
    //   cheese: 3,
    //   meat: 0
    // },
    // Patty solution
    ingredients: [
      { type: 'salad', number: 1},
      { type: 'bacon', number: 2},
      { type: 'cheese', number: 2},
      { type: 'meat', number: 1}
    ] 
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Aux>
    )
  }
}
export default BurgerBuilder;