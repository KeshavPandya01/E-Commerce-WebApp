import React from 'react'
import new_collections from './assets/new_collections'
import Item from './Item'
const NewCollections = () => {
  return (
    <div className="newCollections  flex-col gap-[10px] mb-[100px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[50px] text-neutral-900 font-semibold text-center">
          NEW COLLECTIONS
        </h1>
        <hr className="w-[200px] h-[6px] bg-neutral-800 rounded-[6px] mt-2" />
      </div>
      <div className="collections grid grid-cols-4 gap-[30px] mt-[50px]">
        {new_collections.map((item, i) => {
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
  );
}

export default NewCollections
