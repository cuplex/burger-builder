import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = (props) => {

  const { ingredients } = props;

  // get ingredients rendered
  let magicIngredients = [];
  for (const ingredient in ingredients) {
    const qty = ingredients[ingredient]; //qty = value of ingredient key
    for (let index = 0; index < qty; index++) {
      magicIngredients.push(
        <BurgerIngredient 
          type={ingredient}
          key={ingredient + (index +1)}
        />
      );
    }
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {magicIngredients.length > 0 
        ? magicIngredients 
        : <p>Please start adding ingredients...</p>
      }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}
export default Burger;