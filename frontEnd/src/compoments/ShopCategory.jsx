import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import dropdown_icon from "./assets/dropdown_icon.png";
import Item from "./Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  if (!all_products) {
    return <div>Loading products...</div>; 
  }

  return (
    <div className="shopCategory">
      <img
        className="Shopcategory-banner block my-7 mx-auto w-[82%]"
        src={props.banner}
        alt="Category Banner"
      />
      <div className="shopcategory-indexSort flex my-0 mx-[170px] justify-between items-center">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex gap-1 py-[10px] px-[20px] rounded-[40px] border-solid border-[1px] border-zinc-500">
          <span>Sort by</span> <img className="w-4 h-4 mt-1" src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>
      <div className="shopcategory-products my-5 mx-[50px] grid grid-cols-4 gap-7">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-36 mx-auto w-[233px] h-[69px] rounded-[75px] bg-gray-200 text-lg font-medium text-neutral-500">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
