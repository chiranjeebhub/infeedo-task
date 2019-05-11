import React, { useContext, useState } from "react";
import { FoodContext } from "../Context";
import { Link } from "react-router-dom";

const Confirm = () => {
  const value = useContext(FoodContext);

  const cartItem = value.cart.map(item => {
    return (
      <div key={item.id}>
        <ul class="list-group">
          <li class="list-group-item">
            <span
              className="btn btn-outline-danger"
              onClick={() => value.removeFromCart(item)}
            >
              x
            </span>
            <span>
              <Link to="/">
                <img
                  src={item.link}
                  alt=""
                  className="img-fluid"
                  width="100px"
                  height="100px"
                />
              </Link>
            </span>
            <span>
              <Link to="/">{item.name}</Link>
            </span>
            <span style={{ float: "right", paddingTop: "15px" }}>
              Rs. {item.price}/-
            </span>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row">
        <div
          className="col"
          style={{ borderRight: "2px dashed gray", paddingRight: "30px" }}
        >
          <h4 style={{ textAlign: "center" }}>
            Where should we send the order ?
          </h4>
          <br />
          <form>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={value.name}
                  onChange={e => value.setName(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Address"
                rows="5"
                value={value.address}
                onChange={e => value.setAddress(e.target.value)}
                required
              />
            </div>
            <Link
              to="/success"
              className={
                value.cartCount
                  ? "btn btn-primary btn-block"
                  : "btn btn-primary btn-block disabled"
              }
            >
              Confirm & Submit
            </Link>
          </form>
        </div>
        <div className="col" style={{ padding: "20px" }}>
          <div>
            <h4 style={{ textAlign: "center" }}>Confirm your Order</h4>
            <br />
            {value.cartCount ? (
              <div>
                {cartItem}
                <div style={{ textAlign: "right", marginTop: "10px" }}>
                  <h6>Discounted Price: Rs. {value.total}/-</h6>
                  <p>inFeedo Discount: 20%</p>
                  <hr />
                  <h6 style={{ textAlign: "right", color: "green" }}>
                    Discounted Price: Rs. {(value.total * 80) / 100}/-
                  </h6>
                </div>
              </div>
            ) : (
              <div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  style={{ textAlign: "center" }}
                >
                  The cart is empty. Please add an item.
                </div>
                <Link to="/" className="btn btn-secondary btn-block">
                  See what we have to offer
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
