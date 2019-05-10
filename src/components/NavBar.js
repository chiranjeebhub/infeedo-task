import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context";

const NavBar = () => {
  const value = useContext(FoodContext);
  return (
    <nav
      className="navbar navbar-light fixed-top"
      style={{ backgroundColor: "#EC7A05" }}
    >
      <span>
        <Link to="/" className="navbar-brand">
          <img
            src={require("../img/hamburger.png")}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <span
            style={{
              fontSize: "35px",
              fontFamily: "roboto",
              fontWeight: "700",
              color: "white",
              opacity: "0.7"
            }}
          >
            &nbsp;B4BURGER
          </span>
        </Link>
      </span>
      <span style={{ float: "right", color: "white" }}>
        Cart Status: Items <b>{value.cartCount}</b> : Value:{" "}
        <b>Rs. {value.total}/-</b>&nbsp;&nbsp;
        <Link
          to="/cart"
          className={
            value.cartCount ? "btn btn-light" : "btn btn-outline-light disabled"
          }
        >
          Checkout
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;
