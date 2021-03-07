import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../HOC/Aux";

const INGREDIENTS_PRICES = {
  salad: 1, cheese: 0.3, meat: 0.5, bacon: 0.7
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
    totalPrice: 2.5
  }

addIngredientHandler = (type) => {
  const updatedIngredients = [
    ...this.state.ingredients
  ]
  updatedIngredients.map((ingredient) => {
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
  const updatedIngredients = [
    ...this.state.ingredients
  ]
  // Decrese Price
  const currenteIngredient = updatedIngredients.find((ingredient) => {
    return ingredient.type === type
  })
  // console.log('currenteIngredient', currenteIngredient)
  if (currenteIngredient.type === type && currenteIngredient.number > 0) {
    const currentPrice = this.state.totalPrice;
    const newPrice = currentPrice - INGREDIENTS_PRICES[type];
    this.setState({ totalPrice: newPrice })
  }

  // Update ingredients
  updatedIngredients.map((ingredient) => {
    if (ingredient.type === type && ingredient.number > 0) {
      ingredient.number -= 1;
    }
    return ingredient;
  })
  this.setState({ingredient: updatedIngredients})
}

  render() {
    const currentIngredients = [
      ...this.state.ingredients
    ]
    let disabledInfo = {};

    currentIngredients.map((ingredient) => {
      return disabledInfo[ingredient.type] = ingredient.number <= 0
    })

    console.log('disabledInfo',disabledInfo);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>
          <p>Price: {this.state.totalPrice}</p>
        </div>
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    )
  }
}
export default BurgerBuilder;