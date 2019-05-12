import React, { useState, useContext, useEffect } from "react";
import { FoodContext } from "../Context";
import { Link } from "react-router-dom";
import QuantityElement from "./QuantityElement";

const CartItem = () => {
  const value = useContext(FoodContext);

  // useEffect(() => {
  //   value.setTotal(value.total);
  // }, [QuantityElement]);

  const cartItem = value.cart.map((item, id) => {
    return (
      <div key={item.id}>
        <ul className="list-group">
          <li className="list-group-item">
            <QuantityElement
              item={item}
              name={item.name}
              price={item.price}
              link={item.link}
            />
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      {cartItem}

      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <h6>Total Price: Rs. {value.total}/-</h6>
        <p>inFeedo Discount: 20%</p>
        <hr />
        <h6 style={{ textAlign: "right", color: "green" }}>
          Discounted Price: Rs. {(value.total * 80) / 100}/-
        </h6>
      </div>
    </div>
  );
};

export default CartItem;
