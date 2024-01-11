import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";
import '../style/ProductDetails.css'
import ShimmerCard from "./Shimmer";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await fetch(`${API_URL}${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log("API Response:", data);

        if (data && data.id) {
          // Ensure that the response has an 'id' property
          setProductDetails(data);
        } else {
          console.error(`Error: Product with ID ${id} not found in the response`);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };


    getProductInfo();
  }, [id]);

  return !productDetails ? (<ShimmerCard />) : (
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
