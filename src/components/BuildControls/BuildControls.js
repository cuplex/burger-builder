import React from 'react';
import BuildControl  from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = (props) => {

  const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
  ];

  return (
    <div className={classes.BuildControls}>
    <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
      {controls.map(control => 
        <BuildControl
          label={control.label}
          key={control.label}
          onAdded={() => props.onAdded(control.type)}
          onRemoved={() => props.onRemoved(control.type)}
          isDisabled={props.isDisabled[control.type]}
        />
      )}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchase}
        >Put order</button>

    </div>
  );
}

export default BuildControls;