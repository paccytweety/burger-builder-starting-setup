import React from 'react';
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.length > 0 && controls.map (ctrl => (
        <BuildControl 
        key={ctrl.type} 
        label={ctrl.label} 
        type={ctrl.type} 
        addIngredient={() => props.addIngredient(ctrl.type)} />
      ))}
    </div>
  )
}

BuildControl.propTypes = {
  addIngredient: PropTypes.func
}

export default BuildControls;