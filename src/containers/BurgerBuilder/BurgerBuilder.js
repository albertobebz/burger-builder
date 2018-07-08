// this is a statefull component, needs to manage the state for the Burger Builder app
import React, { Component } from "react";
import Aux from "../../hoc/Aux";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <BurgerControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
