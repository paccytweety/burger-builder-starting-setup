import React from 'react';
import classes from './BuildControl.css'
import PropTypes from 'prop-types';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}>Less</button>
      <button 
        className={classes.More}
        onClick={props.addIngredient}>
          More
      </button>
    </div>
  )
}

BuildControl.propTypes = {
  addIngredient: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string
}

export default BuildControl;