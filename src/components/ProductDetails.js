import React from "react";
import { useParams } from "react-router-dom";
import '../style/ProductDetails.css'
import ShimmerCard from "./Shimmer";
import useProduct from "../utils/useProductItem";

const ProductDetails = () => {

  const { id } = useParams();
  const productDetails = useProduct(id)

  return !productDetails ? (
    <ShimmerCard />
  ) : (
    <div className="product-details-container">
      {productDetails ? (
        <>
          <h2>Title: {productDetails.title}</h2>
          <p>Description: {productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Discount Percentage: {productDetails.discountPercentage}%</p>
          <p>Rating: {productDetails.rating}</p>
          <p>Stock: {productDetails.stock}</p>
          <p>Brand: {productDetails.brand}</p>
          <p>Category: {productDetails.category}</p>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h3>Images:</h3>
          <div>
            {productDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );

};

export default ProductDetails;
