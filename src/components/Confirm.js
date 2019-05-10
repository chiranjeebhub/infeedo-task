import React, { useContext } from "react";
import { FoodContext } from "../Context";

const Confirm = () => {
  const value = useContext(FoodContext);
  const price = 0;
  const cartItem = value.cart.map(item => {
    return (
      <div>
        <div class="menu-content">
          <div class="row" style={{ margin: "20px" }}>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div class="dish-img">
                <a href="#">
                  <img src={item.link} alt="" class="card-img-top" />
                </a>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <div class="dish-content">
                <h5 class="dish-title">
                  <a href="#">{item.name}</a>
                </h5>
                <span class="dish-meta">Description</span>
                <div class="dish-price">
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className=" row justify-content-center" style={{ marginTop: "80px" }}>
      {cartItem}
      <br />
    </div>
  );
};

export default Confirm;
