import React from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./Shimmer";
import useProduct from "../utils/useProductItem";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = useProduct(id);

  return !productDetails ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="max-w-screen-md mx-auto p-6 bg-white shadow-md rounded-md flex flex-col md:flex-row">
        {/* Left Side (Details) */}
        <div className="w-full md:w-1/2 pr-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">{productDetails.title}</h2>
          <p className="text-gray-600 mb-2">Description: {productDetails.description}</p>
          <p className="text-green-600 mb-2">Price: ${productDetails.price}</p>
          <p className="text-blue-500 mb-2">Discount Percentage: {productDetails.discountPercentage}%</p>
          <p className="text-yellow-400 mb-2">Rating: {productDetails.rating}</p>
          <p className="text-gray-800 mb-2">Stock: {productDetails.stock}</p>
          <p className="text-indigo-600 mb-2">Brand: {productDetails.brand}</p>
          <p className="text-purple-500 mb-2">Category: {productDetails.category}</p>
          <h3 className="text-lg font-semibold mb-2 mt-4">Additional Images:</h3>
        </div>

        {/* Right Side (Thumbnail) */}
        <div className="w-full md:w-1/2">
          <img src={productDetails.thumbnail} alt={productDetails.title} className="w-full h-auto mb-4" />
        </div>
      </div>

      {/* Additional Images */}
      <div className="flex flex-col sm:flex-row justify-between bg-white p-1 shadow-md transition-transform transform">
        {productDetails.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className="w-full sm:w-1/6 h-auto mb-4 sm:mb-0"
          />
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
