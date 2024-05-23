import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { useContext, useRef, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import navbar_drop_down from "./assets/navbar_drop_down.png";
import "../../CSS/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();

  const dropdown_toggle = (e) => {
    e.stopPropagation();
    if (menuRef.current) {
      menuRef.current.classList.toggle("nav-menu-visible");
    }
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("open");
    }
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      menuRef.current.classList.remove("nav-menu-visible");
      dropdownRef.current.classList.remove("open");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="navbar flex justify-around p-4"
      style={{ boxShadow: "0 1px 3px -2px black" }}
    >
      <div className="nav-logo flex items-center gap-[10px]">
        <img src={logo} alt="logo" />
        <p className="text-[38px] text-[#171717] font-semibold">Shopper</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={navbar_drop_down}
        alt="Dropdown"
        ref={dropdownRef}
      />
      <ul
        ref={menuRef}
        className="navmenu flex items-center list-none gap-[50px] text-[20px] text-[#626262] font-medium"
      >
        <li
          className="nav-item flex flex-col items-center justify-center gap-[3px]"
          onClick={() => setMenu("shop")}
        >
          <Link
            to="/"
            className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1"
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          className="nav-item flex flex-col items-center justify-center gap-[3px]"
          onClick={() => setMenu("men")}
        >
          <Link
            to="/men"
            className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1"
          >
            Men
          </Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li
          className="nav-item flex flex-col items-center justify-center gap-[3px]"
          onClick={() => setMenu("women")}
        >
          <Link
            to="/women"
            className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1"
          >
            Women
          </Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li
          className="nav-item flex flex-col items-center justify-center gap-[3px]"
          onClick={() => setMenu("kids")}
        >
          <Link
            to="/kids"
            className="hover:font-bold hover:border-b-2 hover:border-red-500 py-1"
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px]">
        <Link to="/login">
          <button className="bg-white w-[157px] h-[58px] outline-none border-[1px] border-[#7a7a7a] rounded-[75px] font-medium hover:font-bold hover:bg-[#f3f3f3] text-[#515151] text-[20px]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img className="w-10 h-10" src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count bg-red-700 text-white flex justify-center items-center w-[22px] h-[22px] mt-[-35px] ml-[-55px] rounded-[11px] text-[14px]">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
