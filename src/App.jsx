import { Route, Routes } from "react-router-dom";
import Collection from "@/page/Collection";
import Home from "@/page/Home";
import About from "@/page/About";
import Contact from "@/page/Contact";
import Product from "@/page/Product";
import Cart from "@/page/Cart";
import Login from "@/page/Login";
import PlaceOrder from "@/page/PlaceOrder";
import Orders from "@/page/Orders";
import NavBar from "@/components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Verify from "./page/Verify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
