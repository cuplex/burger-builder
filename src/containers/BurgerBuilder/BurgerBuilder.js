import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  bacon: 1.0,
  cheese: 0.5,
  meat: 2.0,
  salad: 1.0,  
};

class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 4,
    purchasable: false,
    isPurchasing: false,
  };

  onAddIngredient = (type) => {
    let updatedIngredients = {...this.state.ingredients};
    let updatedPrice = this.state.totalPrice;
    updatedIngredients[type] = updatedIngredients[type] + 1;
    updatedPrice = updatedPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    },
    () => this.updatePurchaseState());
    
  }

  onRemoveIngredient = (type) => {
    let updatedIngredients = {...this.state.ingredients};
    let updatedPrice = this.state.totalPrice;
    updatedIngredients[type] = updatedIngredients[type] - 1;

    if(updatedIngredients[type] < 0) {
      return;
    }

    updatedPrice = updatedPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    },
    () => this.updatePurchaseState());
  }

  updatePurchaseState = () => {
    const { ingredients } =  this.state;
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((a, b) => a + b, 0);
    this.setState({ purchasable: sum > 0 })
  }

  onPurchase = () => {
    this.setState({ isPurchasing: true });
  
  }
  cancelOrder = () => {
    this.setState({ isPurchasing: false });
  }

  // kept this to reuse
  // updateInfo = (operation) => {
  //   const updatedIngredients = {...this.state.ingredients};
  //   const updatedPrice = this.state.totalPrice;
  //   this.setState({
  //     ingredients: updatedIngredients,
  //     totalPrice: updatedPrice,
  //   });
  // }

  render() {
    let disabledInfo = {...this.state.ingredients}
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;        
    }
    
    return (
      <Aux>
        <Modal show={this.state.isPurchasing} click={this.cancelOrder}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          onAdded={this.onAddIngredient}
          onRemoved={this.onRemoveIngredient}
          isDisabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchase={this.onPurchase}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;