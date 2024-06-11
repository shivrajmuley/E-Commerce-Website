import React, { useState } from "react";
import axios from "axios";
import "./latest.css";
import Item from "../Item/Item";
import { useEffect } from "react";

function Latest() {
  const [LATEST, setLatest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/latestproducts")
      .then((success) => setLatest(success.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Latest Products</h1>

        <div className="latestProductsContainer">
          {LATEST.map((product) => (
            <Item
              id={product.id}
              name={product.name}
              image={product.image}
              old_price={product.old_price}
              new_price={product.new_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Latest;
