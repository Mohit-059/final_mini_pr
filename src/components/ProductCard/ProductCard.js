import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="badge-container">
          {product.isNew && <span className="new-badge">NEW</span>}
          {product.discount && <span className="discount-badge">{product.discount} OFF</span>}
        </div>
        <button className="wishlist-button">♡</button>
      </div>
      <div className="card-details">
        <h3 className="brand-name">{product.brand}</h3>
        <p className="product-title">{product.name}</p>
        <p className="stock-status" style={{color:'#fcf070'}}>{product.stock}</p>
        <div className="price-details">
          <span className="price">₹{product.price}</span>
          {product.originalPrice && <span className="original-price">₹{product.originalPrice}</span>}
          {product.originalPrice && <span className="discount-off">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>}
        </div>
        {/* <div className="rating-display">★★★★★ ({product.ratingCount})</div> */}
      </div>
    </div>
  );
};

export default ProductCard;