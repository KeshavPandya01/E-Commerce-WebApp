import React from 'react';
import exclusive_image from './assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers-container w-[65%] h-[60vh] flex m-auto py-0 px-[140px] mb-[140px]' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className='offers w-full flex'>
        <div className="offers-left flex-1 flex flex-col justify-center">
          <h1 className='font-semibold text-[80px] text-neutral-900'>Exclusive</h1>
          <h1 className='font-semibold text-[80px] text-neutral-900'>Offers For You</h1>
          <p className='font-semibold text-[22px] text-neutral-900'>Only On Best Products</p>
          <button className='w-[282px] h-[70px] rounded-[35px] bg-red-500 border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex-1 flex items-center justify-end pt-[50px]">
          <img src={exclusive_image} alt="Exclusive Offer" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
