import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

const Burger = ( props ) => {
  // Max solution
  // const arrayIngredients = Object.keys(props.ingredients).map(
  //     igKey => {
  //       return [...Array(props.ingredients[igKey])].map(
  //         (_, i) => {
  //           return <BurgerIngredient key={igKey + 1} type={igKey} />
  //         }
  //       );
  //     }
  //   )
  //   .reduce((acc, el) => {
  //     return acc.concat(el)
  //   }, [])

  // Patty solution
  let arrayIngredients = [];
  if ( props.ingredients && props.ingredients.length > 0 ) {
    props.ingredients.map(
      (ingredient, index) => {
        var i = 1;
        for (i; i <= ingredient.number; i++) {
          arrayIngredients.push(<BurgerIngredient key={ingredient.type + i} type={ingredient.type} />);
        }
        return arrayIngredients;
      }          
    ) 
  } else {
    arrayIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Burger;