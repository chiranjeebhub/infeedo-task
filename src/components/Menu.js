import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`http://demo8960438.mockable.io/food`).then(res => {
      setFoodItem(res.data);
    });
  }, []);

  console.log(foodItem);
  let filteredFood = foodItem.filter(food => {
    return food.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  return (
    <div>
      {/* <h1>Our Menu</h1> */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="display-4">Find your Appetizer</h1>
          <p className="lead">
            Burger - Pizza - Beverage - Coffee - Sweets - Meals
          </p>
          <form>
            <input
              name="moviename"
              className="form-control mr-sm-2"
              type="search, submit"
              placeholder="Search"
              style={{ height: "50px" }}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div
        className="row justify-content-center"
        style={{ display: "flex", width: "100%" }}
      >
        {filteredFood.map((item, i) => {
          return (
            <div key={i} className="">
              <div className="" style={{ width: "18rem", padding: "20px" }}>
                <img src={item.link} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <span style={{ color: "#EC7A05" }}>{item.category}</span>
                    <hr />
                    <b>
                      Price:{" "}
                      <span style={{ fontSize: "20px", color: "#EC7A05" }}>
                        Rs.{item.price}/-
                      </span>
                    </b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/*
    
     <div class="" style={{ width: "18rem" }}>
          <img
            src={require("../img/sprite.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="" style={{ width: "18rem" }}>
          <img
            src={require("../img/sprite.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="" style={{ width: "18rem" }}>
          <img
            src={require("../img/sprite.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="" style={{ width: "18rem" }}>
          <img
            src={require("../img/sprite.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    */}
      </div>
    </div>
  );
};

export default Menu;
