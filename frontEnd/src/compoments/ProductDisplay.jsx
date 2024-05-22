import React from 'react'
import star_icon from './assets/star_icon.png'
import star_dull_icon from "./assets/star_dull_icon.png";
import DesciptionBox from './DesciptionBox';
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    
      <div className="productDisplay flex mx-[170px] my-0">
        <div className="left flex gap-[17px]">
          <div className="img-list flex flex-col gap-[16px]">
            <img className="h-[138px] w-17" src={product.image} alt="" />
            <img className="h-[138px] w-17" src={product.image} alt="" />
            <img className="h-[138px] w-17" src={product.image} alt="" />
            <img className="h-[138px] w-17" src={product.image} alt="" />
          </div>
          <div className="displayimage">
            <img
              className="main-image w-[700px] h-[600px]"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="right my-0 mx-[70px] flex flex-col">
          <h1 className="font-bold text-[40px] text-neutral-700">
            {product.name}
          </h1>
          <div className="right-star flex items-center mt-3 gap-[5px] text-zinc-900 text-base">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="prices flex my-40 mx-0 gap-[30px] font-bold text-2xl">
            <div className="oldprice text-zinc-500 line-through">
              ${product.old_price}
            </div>
            <div className="newprice text-red-500">${product.new_price}</div>
          </div>
          <div className="description">
            A lightweight, usually knitted, pullover shirt, close fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer.
          </div>
          <div className="size">
            <h1 className="mt-[55px] text-stone-500 text-xl font-semibold">
              Select size
            </h1>
            <div className="sizes flex my-[30px] mx-0 gap-5">
              <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1 px solid #ebebeb] rounded-[3px] cursor-pointer">
                S
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1 px solid #ebebeb] rounded-[3px] cursor-pointer">
                M
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1 px solid #ebebeb] rounded-[3px] cursor-pointer">
                L
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1 px solid #ebebeb] rounded-[3px] cursor-pointer">
                XL
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1 px solid #ebebeb] rounded-[3px] cursor-pointer">
                XXL
              </div>
            </div>
          </div>
          <button className="py-5 px-10 w-[200px] text-base font-semibold text-white bg-red-500 mb-[40px] border-none outline-none">
            ADD TO CART
          </button>
          <p className="category mt-[10px]">
            <span className="font-semibold">Category :</span>Women , T-Shirt,
            Crop Top
          </p>
          <p className="category mt-[10px]">
            <span className="font-semibold">Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
      
    
  );
}

export default ProductDisplay
