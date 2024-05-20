import React from 'react'
import { breadcrum_arrow } from "./assets/breadcrum_arrow.png";
const BreadCrum = (props) => {
    const {product} = props
  return (
    <div className="breadCrum">
      HOME <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" />
      {product.category} <img src={breadcrum_arrow} alt="" />
      {product.name} <img src={breadcrum_arrow} alt="" />
    </div>
  );
}

export default BreadCrum
