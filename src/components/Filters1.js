import React, { useState, useContext } from "react";
import { FoodContext } from "../Context";
import MenuItem from "./MenuItem";

const Filters = ({ uniqueCat }) => {
  const value = useContext(FoodContext);
  const [filterQuery, setFilterQuery] = useState("");
  //   const getUnique = items => {
  //     return [...new Set(items.map(item => item))];
  //   };
  //   const types = getUnique(value.foodItem);
  //   const types1 = types.map((item, index) => {
  //     return (
  //       <option value={item} key={item.index}>
  //         {item}
  //       </option>
  //     );
  //   });
  //   props.filteredFood = value.foodItem.filter(food => {
  //     return (
  //       food.category.toLowerCase().indexOf(value.query.toLowerCase()) !== -1
  //     );
  //   });

  // const uniqueCat = [...new Set(props.filteredFood.map(item => item.category))];
  const opt = uniqueCat.map((cat, i) => {
    return (
      <option key={i} value={cat}>
        {cat}
      </option>
    );
  });

  const handleChange = e => {
    // value.setQuery(e.target.value);
    // console.log(value.query);
    setFilterQuery(e.target.value);
  };
  return (
    <div
      className="row justify-content-right"
      style={{
        display: "flex",
        width: "50%",
        textAlign: "right",
        alignItems: "right"
      }}
    >
      {/* <p>{Math.max(...props.filteredFood.map(item => item.price))}</p>
      <p>{Math.min(...props.filteredFood.map(item => item.price))}</p> */}
      <div className="col">
        <select className="custom-select" onChange={handleChange}>
          {opt}
        </select>
      </div>
      <div className="col">
        {/* <input
          type="range"
          className="custom-range"
          min={Math.min(...props.filteredFood.map(item => item.price))}
          max={Math.max(...props.filteredFood.map(item => item.price))}
          id="customRange2"
        /> */}
      </div>
      {value.filteredFood.map((item, i) => {
        if (item.category === filterQuery) {
          return (
            <div
              className="row justify-content-center"
              style={{ display: "inline", width: "100%", textAlign: "center" }}
            >
              <MenuItem item={item} i={i} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Filters;
