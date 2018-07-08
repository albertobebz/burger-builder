import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import classes from "./Burger.css";

const Burger = props => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map(ingKey => {
      return [...Array(props.ingridients[ingKey])].map((_, i) => {
        return <BurgerIngridient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Please start adding ingridients</p>;
  }

  console.log(transformedIngridients);
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
