import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import cart_icon from "./assets/cart_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <>
      <div className="navbar flex justify-between items-center my-2">
        <div className="logo flex items-center gap-5">
          <img src={logo} alt="logo" />
          <p className="text-xl self-center font-bold">Shopper</p>
        </div>
        <div className="navmenu flex gap-5">
          <div className="nav-item"  onClick={()=>{setMenu("shop")}} >
           <Link to="/" className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1">Shop</Link>{menu==='shop'?<hr/>:<></>}
          </div>
          <div className="nav-item" onClick={()=>{setMenu("men")}}>
             <Link to="/men" className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1">Men</Link>{menu==='shop'?<hr/>:<></>}
          </div>
          <div className="nav-item" onClick={()=>{setMenu("women")}}>
            <Link to="/women"  className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1">Women</Link>{menu==='shop'?<hr/>:<></>}
          </div>
          <div className="nav-item" onClick={()=>{setMenu("kids")}}>
            <Link to="/kids"  className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1">Kids</Link>{menu==='shop'?<hr/>:<></>}
          </div>
        </div>
        <div className="nav-login-cart flex items-center gap-5 mx-5 relative">
          <Link to='/login'><button className="self-center py-2 px-4 rounded-full border border-gray-400hover:font-bold">Login</button></Link> 
          <Link to='/cart'><img className="w-10 h-10" src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count bg-red-700 text-white px-1 rounded-full text-xs opacity-95 absolute -top-2 -right-2 flex justify-center items-center w-6 h-6">{getTotalCartItems()}</div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;


