import React from 'react'

const NewsLetter = () => {
  return (
    <div className='NewsLetter w-[65%] h-[40vh] flex flex-col justify-center items-center m-auto px-36 mb-36 gap-7' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <h1 className='text-zinc-700 text-[55px] font-semibold pt-10'>Get Exclusive Offers On Your Email</h1>
      <p className='text-zinc-700 text-xl'> Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-2 border-white'>
        <input className='w-[500px] ml-7 border-none outline-none text-zinc-600 text-base' type="email" placeholder='Your Email ID' />
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
