import { assets } from "@/assets/assets";
import { ShopContext } from "context/ShopContext";
import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    token,
    setCartItems
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="relative flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="varala" className="w-36" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>Home</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>Collection</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>About</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>Contact</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          {/* ====drop down menu===== */}

          {token &&
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="varala" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 overflow-hidden ${visible
          ? "w-3/4 sm:hidden"
          : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          {/* Mobile Menu Links */}
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
