import React from 'react'
import new_collections from './assets/new_collections'
import Item from './Item'
const NewCollections = () => {
  return (
    <div className='newCollections  flex-col gap-20px h-4/5 my-8 mx-14 mb-[100px]'>
      <h1 className='text-5xl text-neutral-900 font-semibold text-center'>NEW COLLECTIONS</h1>
      <hr className='w-80 h-1.5 bg-neutral-800 rounded-xl mx-auto' />
      <div className="collections grid grid-cols-4 gap-7 mt-7 ">
        {new_collections.map((item,i)=>{
            return <Item  className='col-span-1' key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
        })}
      </div>
    </div>
  )
}

export default NewCollections
