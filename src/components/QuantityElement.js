import React, { useState, useContext, useEffect } from "react";
import { FoodContext } from "../Context";
import { Link } from "react-router-dom";
const QuantityElement = ({ name, price, link, item }) => {
  const value = useContext(FoodContext);
  const [quantity, setQuantity] = useState(1);
  // useEffect(() => {
  //   value.setTotal(value.total);
  //   console.log(value.total);
  // }, [quantity]);
  // const handleChange = e => {
  //   setQuantity(e.target.value);
  // };
  return (
    <div>
      <span
        className="btn btn-outline-danger"
        onClick={() => value.removeFromCart(item)}
      >
        x
      </span>
      <span>
        <Link to="/">
          <img
            src={link}
            alt=""
            className="img-fluid"
            width="100px"
            height="100px"
          />
        </Link>
      </span>
      <span>
        <Link to="/">{name}</Link>
      </span>
      {/* <span style={{ marginLeft: "20px", width: "10px" }}>
        <input
          style={{ width: "40px" }}
          type="number"
          name=""
          value={quantity}
          onChange={handleChange}
        />
      </span> */}
      <span
        value={price * quantity}
        onChange={e => value.setTotal(e.target.value)}
        style={{ float: "right", paddingTop: "15px" }}
      >
        Rs. {price * quantity}/-
      </span>
    </div>
  );
};

export default QuantityElement;
