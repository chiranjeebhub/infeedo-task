import React, { useState, useEffect } from "react";
//import "./App.css";
import "./main.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

import { Route, Switch } from "react-router-dom";

import axios from "axios";
import { FoodContext } from "./Context";
import Confirm from "./components/Confirm";

function App() {
  const [foodItem, setFoodItem] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios.get(`http://demo8960438.mockable.io/food`).then(res => {
      setFoodItem(res.data);
    });
  }, []);

  const addtoCart = cartItem => {
    //event.preventDefault();

    setCart([...cart, cartItem]);
    setCartCount(cartCount + 1);
    setTotal(total + cartItem.price);
    console.log(cart);
    // console.log(cartItem);
  };

  const removeFromCart = cartItem1 => {
    const newcart = cart.filter(item => {
      return item !== cartItem1;
    });
    setCart([...newcart]);
    setCartCount(cartCount - 1);
    setTotal(total - cartItem1.price);
    //console.log("remove " + cartItem1);
  };

  const value = {
    foodItem,
    setFoodItem,
    query,
    setQuery,
    cart,
    setCart,
    cartCount,
    setCartCount,
    addtoCart,
    removeFromCart,
    total,
    setTotal
  };
  return (
    <FoodContext.Provider value={value}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={Confirm} />
        </Switch>
      </div>
    </FoodContext.Provider>
  );
}

export default App;
