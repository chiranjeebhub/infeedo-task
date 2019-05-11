import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context";
const Success = () => {
  const value = useContext(FoodContext);
  return (
    <div
      class="justify-content-center"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
      }}
    >
      <h1>Thank you for choosing us. {value.name}</h1>
      <p>You will receive your order within 30 minutes </p>
      <br />
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{value.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Amount: {value.total}</h6>
          <p class="card-text">{value.address}</p>
        </div>
      </div>
      <br />
      <a href="/" className="btn btn-warning">
        Order Again
      </a>
    </div>
  );
};

export default Success;
