import React from 'react'
import star_icon from './assets/star_icon.png'
import star_dull_icon from "./assets/star_dull_icon.png";
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productDisplay'>
      <div className="left">
        <div className="img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="displayimage">
            <img className='main-image' src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
