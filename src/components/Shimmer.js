
import React from 'react';
import '../style/ShimmerCard.css'
import Shimmer from  '../assests/Spinner-3.gif'

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
        <div><img src={Shimmer} alt="" /></div>
      <div className="shimmer-image"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
    </div>
  );
}

export default ShimmerCard;
