import { Link } from "react-router-dom"
import add_product from '../assets/Product_Cart.svg'
import list_product from '../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar flex-col pt-[30px] gap-5 w-[100%] max-w-[250px] h-[100vh] bg-white'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item flex items-center justify-center my-0 mx-[20px] py-[5px] px-[10px] rounded-md bg-[#f6f6f6] gap-5 cursor-pointer">
            <img src={add_product} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item flex items-center justify-center my-0 mx-[20px] py-[5px] px-[10px] rounded-md bg-[#f6f6f6] gap-5 cursor-pointer">
            <img src={list_product} alt="" />
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
