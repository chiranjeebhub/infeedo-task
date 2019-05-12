import React, { useContext } from "react";
import { FoodContext } from "../Context";

const SearchBox = () => {
  const value = useContext(FoodContext);

  return (
    <div class="search">
      {/* <h1>Our Menu</h1> */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container" style={{ textAlign: "center" }}>
          {/* <h1 className="display-4">Find your Appetizer</h1>
          <p className="lead">
            Burger - Pizza - Beverage - Coffee - Sweets - Meals
          </p> */}

          <form onSubmit={e => e.preventDefault()}>
            <input
              name="foodname"
              className="form-control mr-sm-2"
              type="search, submit"
              placeholder="Find your Appetizer..."
              style={{ height: "50px" }}
              value={value.query}
              onChange={e => value.setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
