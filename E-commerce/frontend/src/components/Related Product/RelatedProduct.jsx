import React, { useEffect, useState } from "react";

import Item from "../Item/Item";
import axios from "axios";

const RelatedProduct = () => {
  const [POPULAR, setPopular] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/popularproducts")
      .then((success) =>setPopular(success.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Related Products</h1>

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
};

export default RelatedProduct;
