import React from 'react';
import Aux from '../../hoc/Aux';

const OrderSummary = (props) => {
  const { ingredients } = props
  const orderSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: <span>{ingredients[igKey]}</span>
        </li>
        )
    })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        {orderSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
}
export default OrderSummary;