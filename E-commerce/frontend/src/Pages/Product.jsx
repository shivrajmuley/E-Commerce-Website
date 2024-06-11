import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd/ProductHd";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import "./product.css";
import ProductDescription from "../components/ProductDesc/ProductDescription";
import RelatedProduct from "../components/Related Product/RelatedProduct";
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not Found!</div>;
  }
  return (
    <section>
      <div className="ProductContainer">
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProduct />
      </div>
    </section>
  );
};

export default Product;
