import React from 'react'
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function ProductCard({ product }) {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
  setLiked(!liked);
};
  return (
  <div className="card">
    <div className="card-media">
      <img src={product.image} alt={product.name} />
      <span className="price">${product.price}</span>
      <button className="like-btn" onClick={handleLike}>
        {liked ? <FaHeart className="heart liked" /> : <FaRegHeart className="heart" />}
      </button>
    </div>
    <div className="card-body">
      <span className="badge">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  </div>
);}

export default ProductCard;