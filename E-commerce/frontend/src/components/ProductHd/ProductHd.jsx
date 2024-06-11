import React from "react";
import "./productHd.css"

const ProductHd = (props) => {
  const { product } = props;
  return (
    <div className="productHeading">
      <p>
        Home  <i class="fa-solid fa-arrow-right-long"> </i> Shop
        <i class="fa-solid fa-arrow-right-long"></i> {product.category}
        <i class="fa-solid fa-arrow-right-long"></i>
        {product.name}
      </p>
    </div>
  );
};

export default ProductHd;
