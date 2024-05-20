import data_product from './assets/data';
import Item from './Item';

const Popular = () => {
    console.log(data_product);
    return (
        <div className='popular flex-col gap-10px h-4/5 my-8'>
            <h1 className='text-5xl text-neutral-900 font-semibold text-center'>POPULAR IN WOMEN</h1>
            <hr className='w-80 h-1.5 bg-neutral-800 rounded-xl mx-auto' />
            <div className="popular-item my-5 flex flex-wrap gap-4 justify-center">
                {data_product.map((item) => {
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default Popular;
