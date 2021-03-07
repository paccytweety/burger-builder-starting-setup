import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../HOC/Aux";

const INGREDIENTS_PRICES = {
  salad: 0.5, cheese: 0.3, meat: 1, bacon: 0.7
}

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
      { type: 'bacon', number: 1},
      { type: 'cheese', number: 1},
      { type: 'meat', number: 1}
    ],
    totalPrice: 0
  }

addIngredientHandler = (type) => {
  const updatedIngredients = [
    ...this.state.ingredients
  ]
  updatedIngredients.map((ingredient, index) => {
    if (ingredient.type === type) {
      ingredient.number += 1;
    }
    return ingredient;
  })
  const currentPrice = this.state.totalPrice;
  this.setState({
    ingredient: updatedIngredients,
    totalPrice: currentPrice + INGREDIENTS_PRICES[type]
  })
}
removeIngredientHandler = (type) => {

}

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>
          <p>Price: {this.state.totalPrice}</p>
        </div>
        <BuildControls addIngredient={this.addIngredientHandler} />
      </Aux>
    )
  }
}
export default BurgerBuilder;