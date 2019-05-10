import React, { useContext } from "react";
import { FoodContext } from "../Context";

const Confirm = () => {
  const value = useContext(FoodContext);
  const price = 0;
  const cartItem = value.cart.map(item => {
    return (
      <div key={item.id}>
        <img src={item.link} class="card-img" width="20px" alt="..." />

        <h5 class="card-title">{item.name}</h5>

        <b>{item.price}</b>
      </div>
    );
  });
  return (
    <div className=" row justify-content-center">
      {cartItem}
      <h1>Total: {value.total}</h1>
    </div>
  );
};

export default Confirm;
