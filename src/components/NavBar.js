import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context";

const NavBar = () => {
  const value = useContext(FoodContext);
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#EC7A05" }}>
      <span>
        <a className="navbar-brand" href="/">
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
        </a>
      </span>
      <span style={{ float: "right" }}>
        <Link to="/cart">
          <button>View Cart({value.cartCount})</button>
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;
