import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import { useParams } from "react-router-dom";
import BreadCrum from "./BreadCrum";
import ProductDisplay from "./ProductDisplay";

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product  = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
