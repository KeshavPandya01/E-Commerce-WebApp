import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from './assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom';
const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
    const navigate = useNavigate();
    
    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
  };
  return (
    <div className="cartItems my-[100px] mx-[170px]">
      <div
        className="formatMain grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold"
        style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className="format grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[17px] font-medium"
                style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
              >
                <img
                  onClick={() => handleImageClick(e.id)}
                  className="productIcon cursor-pointer"
                  src={e.image}
                  alt=""
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity w-[64px] h-[50px] border-[2px solid #ebebeb] bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="removeicon cursor-pointer w-[15px] my-0 mx-[40px]"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="down flex my-[100px] mx-0 ">
        <div className="cartTotal flex-1 flex-col mr-[200px] gap-[40px]">
          <h1>Cart Total</h1>
          <div className="">
            <div className="totalItem flex justify-between px-0 py-[15px]">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="totalItem flex justify-between px-0 py-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="totalItem flex justify-between px-0 py-[15px]">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-red-500 text-[#fff] text-base font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="promoCode flex-1 text-base font-medium">
          <p className="flex-1 text-base font-medium text-[#555]">
            If you have a Promo Code Enter it here
          </p>
          <div className="promoBox flex w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
            <input className='border-none outline-none text-base bg-transparent w-[330px] h-[50px]' type="text" placeholder="Promo Code" />
            <button className='w-[170px] h-[58px] cursor-pointer text-base text-white bg-black'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems
