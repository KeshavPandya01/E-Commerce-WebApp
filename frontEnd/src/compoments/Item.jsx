import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item w-80 hover:transform hover:scale-105 hover:transition-transform duration-600">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={props.image}
          alt=""
        />
      </Link>
      <p className="py-6 px-0">{props.name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-gray-700 font-semibold text-lg">
          ${props.new_price}
        </div>
        <div className="item-price-old font-medium text-lg line-through text-neutral-400">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
