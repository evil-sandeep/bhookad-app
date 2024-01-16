import React from "react";

const Fooditem = ({ title, price, thumbnail, discountPercentage, brand }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md bg-white flex items-start">
        
      <img src={thumbnail} alt={title} className="w-30 h-20 mr-4 rounded-md" />
      <div>
        <h3 className="text-gray-600 mt-7">
          {brand} - <span className="font-semibold">{title}</span>
        </h3>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-end items-center mb-2">
          <span className="text-gray-700 mr-4">Price: ₹{price * 64}</span>
        </div>
        {discountPercentage && (
          <div className="flex justify-end items-center mt-auto">
            <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">
              {discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Fooditem;
