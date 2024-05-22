import React from 'react'
import arrow_icon from "./assets/breadcrum_arrow.png";
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum flex items-center gap-[8px] text-zinc-600 font-semibold text-base my-[60px] mx-[170px] capitalize">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name} <img src={arrow_icon} alt="" />
    </div>
  );
}

export default BreadCrum
