import React, { useContext } from "react";
import { FoodContext } from "../Context";

const Menu = () => {
  const value = useContext(FoodContext);

  let filteredFood = value.foodItem.filter(food => {
    return food.name.toLowerCase().indexOf(value.query.toLowerCase()) !== -1;
  });
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
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
              value={value.query}
              onChange={e => value.setQuery(e.target.value)}
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
        })}
      </div>
    </div>
  );
};

export default Menu;
