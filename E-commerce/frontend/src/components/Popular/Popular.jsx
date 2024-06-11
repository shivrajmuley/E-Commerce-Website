import React, { useEffect, useState } from "react";
import "./popular.css";
import axios from "axios";
import Item from "../Item/Item";

function Popular() {
  const [POPULAR, setPopular] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/popularproducts")
      .then((success) => setPopular(success.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Popular Products</h1>

        <div className="productsContainer">
          {POPULAR.map((product) => (
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

export default Popular;
