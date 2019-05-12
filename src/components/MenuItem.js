import React, { useContext } from "react";
import { FoodContext } from "../Context";
const MenuItem = ({ item, i }) => {
  const value = useContext(FoodContext);
  return (
    <div key={i} className="">
      <div className="" style={{ width: "18rem", padding: "20px" }}>
        <img src={item.link} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            <span style={{ color: "#EC7A05" }}>{item.category}</span> |{" "}
            <span style={{ color: "#EC7A05" }}>Rating: {item.rating}/5</span>
          </p>
          <hr />
          <p>
            <b>
              Price:{" "}
              <span style={{ fontSize: "20px", color: "#EC7A05" }}>
                Rs.{item.price}/-
              </span>
            </b>
          </p>
          <button
            className="btn btn-warning"
            onClick={() => value.addtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
