import React, { useState, useContext } from "react";
import { FoodContext } from "../Context";
import MenuItem from "./MenuItem";

const Filters = ({ filterQuery, filterPrice }) => {
  const value = useContext(FoodContext);

  const ff = () => {
    if (filterQuery === "Select Category" && filterPrice === "Sort by Price") {
      //show all default
      console.log(value.filteredFood);
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood.map((item, i) => {
            return <MenuItem item={item} i={i} />;
          })}
        </div>
      );
    } else if (
      filterQuery !== "Select Category" &&
      filterPrice === "Low to High"
    ) {
      //show category shorted by low to high
      // console.log("show category shorted by low to high");
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood
            .sort(
              ({ price: previousID }, { price: currentID }) =>
                previousID - currentID
            )
            .map((item, i) => {
              if (item.category === filterQuery) {
                return <MenuItem item={item} i={i} />;
              }
            })}
        </div>
      );
    } else if (
      filterQuery !== "Select Category" &&
      filterPrice === "High to Low"
    ) {
      //show category shorted by high to low
      console.log("show category shorted by high to low");
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood
            .sort(
              ({ price: previousID }, { price: currentID }) =>
                currentID - previousID
            )
            .map((item, i) => {
              if (item.category === filterQuery) {
                return <MenuItem item={item} i={i} />;
              }
            })}
        </div>
      );
    } else if (
      filterQuery !== "Select Category" &&
      filterPrice === "Sort by Price"
    ) {
      //show category without sort
      console.log("show category without sort");
      // return <div>show category without sort</div>;
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood.map((item, i) => {
            if (item.category === filterQuery) {
              return <MenuItem item={item} i={i} />;
            }
          })}
        </div>
      );
    } else if (
      filterQuery === "Select Category" &&
      filterPrice === "Low to High"
    ) {
      //show all sorted by low to high
      console.log("show all sorted by low to high");
      //return <div>show all sorted by low to high</div>;
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood
            .sort(
              ({ price: previousID }, { price: currentID }) =>
                previousID - currentID
            )
            .map((item, i) => {
              return <MenuItem item={item} i={i} />;
            })}
        </div>
      );
    } else if (
      filterQuery === "Select Category" &&
      filterPrice === "High to Low"
    ) {
      //show all sorted by high to low
      //return <div>show all sorted by high to low</div>;
      return (
        <div
          className="row justify-content-center"
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          {value.filteredFood
            .sort(
              ({ price: previousID }, { price: currentID }) =>
                currentID - previousID
            )
            .map((item, i) => {
              return <MenuItem item={item} i={i} />;
            })}
        </div>
      );
    }
  };

  return (
    <div
      className="row justify-content-center"
      style={{
        display: "flex",
        width: "100%"
      }}
    >
      {ff()}
    </div>
  );
};

// {value.filteredFood.map((item, i) => {
//   if (item.category === filterQuery && item.category !== "All") {
//     return (
//       <div
//         className="row justify-content-center"
//         style={{ display: "inline", width: "100%", textAlign: "center" }}
//       >
//         <MenuItem item={item} i={i} />
//       </div>
//     );
//   } else {
//     return null;
//   }
// })}

export default Filters;
