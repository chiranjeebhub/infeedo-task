import React, { useState, useEffect } from "react";
import "./App.css";
// import "./main.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

import { Route, Switch } from "react-router-dom";

import axios from "axios";
import { FoodContext } from "./Context";
import Confirm from "./components/Confirm";
import Success from "./components/Success";
import Home from "./pages/Home";

function App() {
  const [foodItem, setFoodItem] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    axios.get(`http://demo8960438.mockable.io/food`).then(res => {
      setFoodItem(res.data);
    });
  }, []);

  const addtoCart = cartItem => {
    let filteredCart = cart.filter(food => {
      return food.name.indexOf(cartItem.name) !== -1;
    });
    //event.preventDefault();
    if (filteredCart == false) {
      setCart([...cart, cartItem]);
      setCartCount(cartCount + 1);
      setTotal(total + cartItem.price);
      console.log(cart);
      // console.log(cartItem);
    } else {
      console.log("already exists");
    }
  };

  // const filterFood = () => {
  //   let {
  //     foodItem,
  //     category,
  //     capacity,
  //     price,
  //     minSize,
  //     maxSize,
  //     breakfast,
  //     pets
  //   } = this.state;

  //   let tempRooms = [...rooms];
  //   // transform values
  //   // get capacity
  //   capacity = parseInt(capacity);
  //   price = parseInt(price);
  //   // filter by type
  //   if (type !== "all") {
  //     tempRooms = tempRooms.filter(room => room.type === type);
  //   }
  //   // filter by capacity
  //   if (capacity !== 1) {
  //     tempRooms = tempRooms.filter(room => room.capacity >= capacity);
  //   }
  //   // filter by price
  //   tempRooms = tempRooms.filter(room => room.price <= price);
  //   //filter by size
  //   tempRooms = tempRooms.filter(
  //     room => room.size >= minSize && room.size <= maxSize
  //   );
  //   //filter by breakfast
  //   if (breakfast) {
  //     tempRooms = tempRooms.filter(room => room.breakfast === true);
  //   }
  //   //filter by pets
  //   if (pets) {
  //     tempRooms = tempRooms.filter(room => room.pets === true);
  //   }
  //   this.setState({
  //     sortedRooms: tempRooms
  //   });
  // };

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
    filteredFood,
    setFilteredFood,
    query,
    setQuery,
    cart,
    setCart,
    cartCount,
    setCartCount,
    addtoCart,
    removeFromCart,
    total,
    setTotal,
    name,
    setName,
    address,
    setAddress
  };
  return (
    <FoodContext.Provider value={value}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Confirm} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </FoodContext.Provider>
  );
}

export default App;
