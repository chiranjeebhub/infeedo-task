import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#EC7A05" }}>
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
    </nav>
  );
};

export default NavBar;
