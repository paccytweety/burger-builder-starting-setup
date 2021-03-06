import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

const Burger = ( props ) => {
  const arrayIngredients = Object.keys(props.ingredients).map(
      igKey => {
        return [...Array(props.ingredients[igKey])].map(
          (_, i) => {
            return <BurgerIngredient key={igKey + 1} type={igKey} />
          }
        );
      }
    )
    .reduce((acc, el) => {
      return acc.concat(el)
    }, [])
    console.log('ingredient: ', arrayIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients.length > 0 
        ? arrayIngredients 
        : <p>Please start adding ingredients!</p>
      }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
}

export default Burger;