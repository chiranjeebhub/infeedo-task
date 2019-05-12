import React, { useState, useContext } from "react";
import { FoodContext } from "../Context";
import MenuItem from "./MenuItem";
import Filters from "./Filters";

const Menu = () => {
  const value = useContext(FoodContext);
  const [filterQuery, setFilterQuery] = useState("Select Category");
  const [filterPrice, setFilterPrice] = useState("Sort by Price");
  const [filterRating, setFilterRating] = useState("Sort by Rating");

  value.filteredFood = value.foodItem.filter(food => {
    const query = value.query.toLowerCase();
    return (
      food.name.toLowerCase().indexOf(query) >= 0 ||
      food.category.toLowerCase().indexOf(query) >= 0 ||
      food.price.toString().indexOf(query) >= 0 ||
      food.rating.toString().indexOf(query) >= 0
    );
    //return food.name.toLowerCase().indexOf(value.query.toLowerCase()) !== -1;
  });

  let uniqueCat = [...new Set(value.filteredFood.map(item => item.category))];
  uniqueCat = ["Select Category", ...uniqueCat];

  // let uniqueRat = [...new Set(value.filteredFood.map(item => item.rating))];
  // uniqueRat = ["Select Rating", ...uniqueRat];

  const opt = uniqueCat.map((cat, i) => {
    return (
      <option key={i} value={cat}>
        {cat}
      </option>
    );
  });

  const handleChange = e => {
    setFilterQuery(e.target.value);
  };
  const handleChangePrice = e => {
    setFilterPrice(e.target.value);
  };
  // const handleChangeRating = e => {
  //   setFilterRating(e.target.value);
  // };
  return (
    <div>
      <div
        className="row justify-content-center"
        style={{
          display: "flex",
          textAlign: "right",
          alignItems: "right"
        }}
      >
        <div className="col-2">
          <select className="custom-select" onChange={handleChange}>
            {opt}
          </select>
        </div>
        <div className="col-2">
          <select className="custom-select" onChange={handleChangePrice}>
            <option value="Sort by Price">Sort by Price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
        {/* <div className="col-2">
          <select className="custom-select" onChange={handleChangeRating}>
            <option value="Sort by Price">Sort by Rating</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div> */}
      </div>
      <Filters filterQuery={filterQuery} filterPrice={filterPrice} />
      <div
        className="row justify-content-center"
        style={{ display: "flex", width: "100%", textAlign: "center" }}
      >
        {value.filteredFood.length ? (
          <div />
        ) : (
          // value.filteredFood
          //   // .sort(
          //   //   ({ rating: previousID }, { rating: currentID }) =>
          //   //     previousID - currentID
          //   // )
          //   .map((item, i) => {
          //     return <MenuItem item={item} i={i} />;
          //   })
          <div
            className="alert alert-danger"
            role="alert"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Sorry. No result found for the query: <b>{value.query}</b>
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Menu;
