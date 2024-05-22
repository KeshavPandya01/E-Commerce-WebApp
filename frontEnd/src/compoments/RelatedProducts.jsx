import React from 'react'
import data_product from './assets/data'
import Item from './Item'
const RelatedProducts = () => {
  return (
    <div className='relatedProducts flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-[50px] text-[#171717] font-semibold'>Related Products</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="items flex mt-[50px] gap-[30px]">
        {data_product.map((item, i)=>{
            return (
              <Item
                className="col-span-1"
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
