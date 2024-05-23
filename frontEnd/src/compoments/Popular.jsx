import data_product from './assets/data';
import Item from './Item';

const Popular = () => {
    console.log(data_product);
    return (
      <div className="popular flex-col gap-[10px] h-[90vh]">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] text-neutral-900 font-semibold text-center">
            POPULAR IN WOMEN
          </h1>
          <hr className="w-[200px] h-[6px] bg-neutral-800 rounded-[6px] mt-2" />
        </div>
        <div className="popular-item mt-[50px] flex gap-[30px] justify-center">
          {data_product.map((item) => {
            return (
              <Item
                key={item.id}
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

export default Popular;
