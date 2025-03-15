import { ShoppingCart, User, Phone } from "lucide-react";
import MobMenu from "../components/common/MobMenu";
import DesktopMenu from "../components/common/DesktopMenu";
import { logo } from "../utils/ImgUtils";
import { Menus } from "../utils/MenuUtils";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="z-50 sticky top-0 left-0 text-[15px] w-full flex flex-col gap-2 bg-white shadow-lg">
      {/* -- Top nav bar -- */}
      <div className="bg-gray-100 text-gray-700 w-full py-2">
        <div className="container mx-auto flex flex-col lg:flex-row  gap-1 justify-between items-center px-4">
          <p className="text-sm">Free shipping on orders over ₹999!</p>
          <div className="flex  gap-4">
            <Link
              to="tel:+917065995901"
              className="flex items-center gap-1 text-[12px] sm:text-sm"
            >
              <Phone size={16} /> Call: +91-9315040549
            </Link>
          </div>
        </div>
      </div>
      {/* -- Top nav bar End-- */}
      <div>
        <nav className="px-4 flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-x-3 relative">
            <Link to={"/"}>
              <img
                src={logo}
                alt="E-commerce Logo"
                className="w-14 shadow rounded-xl transition-all duration-200 my-1"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="gap-x-6 lg:flex hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Icons & Mobile Menu */}
          <div className="flex items-center gap-6 ">
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            </Link>
            <Link to="/profile">
              <User size={24} />
            </Link>
            <div className="lg:hidden z-50">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
