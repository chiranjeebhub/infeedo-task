import React, { useContext } from "react";
import { FoodContext } from "../Context";
import { Link } from "react-router-dom";

const Confirm = () => {
  const value = useContext(FoodContext);

  const cartItem = value.cart.map(item => {
    return (
      <div key={item.id}>
        <div className="menu-content">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="dish-img">
                <span onClick={() => value.removeFromCart(item)}>X</span>
                <Link to="/">
                  <img src={item.link} alt="" className="card-img-top" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <div className="dish-content">
                <h5 className="dish-title">
                  <Link to="/">{item.name}</Link>
                </h5>
                <span className="dish-meta">Description</span>
                <div className="dish-price">
                  <p>Rs. {item.price}/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                required
              />
            </div>
            <Link to="/" className="btn btn-primary btn-block">
              Confirm & Submit
            </Link>
          </form>
        </div>
        <div className="col" style={{ padding: "20px" }}>
          <div>
            <h4 style={{ textAlign: "center" }}>Confirm your Order</h4>
            <br />
            {value.cart.length ? (
              <div>
                {cartItem}
                <h4 style={{ textAlign: "right" }}>
                  Total: Rs. {value.total}/-
                </h4>
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
