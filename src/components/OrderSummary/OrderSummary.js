import React, { useEffect } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {  
  const { ingredients, totalPrice } = props
  const orderSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: <span>{ingredients[igKey]}</span>
        </li>
        )
    })
  
  useEffect(() => {
    console.log('[OrderSummary.js] this is being updated');
  })

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        {orderSummary}
      </ul>
      <p>Continue to checkout?</p>
      <p><strong>Total price: {totalPrice.toFixed(2)}</strong></p>
      <Button type="Success" click={props.continue}>Continue</Button>
      <Button type="Danger" click={props.cancel}>Cancel</Button>
    </Aux>
  );
}
export default OrderSummary;