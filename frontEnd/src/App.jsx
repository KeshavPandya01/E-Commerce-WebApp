import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import Shop from "./compoments/Shop";
import Cart from "./compoments/Cart";
import ShopCategory from "./compoments/ShopCategory";
// import Category from "./compoments/Category";
import Product from "./compoments/Product";
import Login from "./compoments/Login";
import men_banner from './compoments/assets/banner_mens.png'
import women_banner from './compoments/assets/banner_women.png'
import kids_banner from './compoments/assets/banner_kids.png'
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <hr />
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
          
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
