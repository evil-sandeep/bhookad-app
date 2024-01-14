import React from 'react';
import Shimmer from '../assests/Spinner-3.gif';

const ShimmerCard = () => {
  return (
    <div className="shimmer-card bg-white p-4 shadow-md rounded-md text-center">
      <div className="flex items-center justify-center mb-4">
        <img src={Shimmer} alt="" className="w-10 h-10 animate-spin mr-2" />
        <div className="shimmer-image w-32 h-32 rounded-md"></div>
      </div>
      <div className="shimmer-text w-3/4 h-4 mb-2"></div>
      <div className="shimmer-text w-1/2 h-4 mb-2"></div>
      <div className="shimmer-text w-full h-4"></div>
    </div>
  );
}

export default ShimmerCard;
