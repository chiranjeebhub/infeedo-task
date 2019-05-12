import React, { useState, useContext } from "react";
import { FoodContext } from "../Context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Confirm = () => {
  const value = useContext(FoodContext);

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
              Confirm &amp; Order
            </Link>
          </form>
        </div>
        <div className="col" style={{ padding: "20px" }}>
          <div>
            <h4 style={{ textAlign: "center" }}>Confirm your Order</h4>
            <br />
            {value.cartCount ? (
              <div>
                <CartItem />
                <a href="/cart" className="btn btn-secondary btn-block">
                  Empty Cart
                </a>
              </div>
            ) : (
              <div>
                <div
                  className="alert alert-danger"
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
