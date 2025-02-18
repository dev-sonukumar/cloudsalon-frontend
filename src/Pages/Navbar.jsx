import { MessageCircleMore, Phone } from "lucide-react";
import MobMenu from "../components/common/MobMenu";
import DesktopMenu from "../components/common/DesktopMenu";
import { logo } from "../utils/ImgUtils";
import { Menus } from "../utils/MenuUtils";

export default function Navbar() {
  return (
    <header className="z-50 sticky top-0 left-0 h-24 text-[15px]  w-full flex flex-col gap-2 bg-[var(--main-color2)]  shadow-lg">
      {/* -- Top nav bar -- */}
      <div className=" bg-[var(--main-color)] text-[var(--text-color)] w-full ">
        <div className="container mx-auto flex justify-center gap-10 items-center  px-12">
          <p className="text-[10px] ">mcstechnology.in | Mob: +91-9315973373</p>
          <div className="flex gap-2">
            <a href="tel:+917065995901">
              <button aria-label="Call Now" className="flex p-1 ">
                <Phone
                  className=" transition-transform duration-200 "
                  size={15}
                />
              </button>
            </a>
            <a href="tel:+917065995901">
              <button aria-label="Call Now" className="flex p-1 ">
                <MessageCircleMore
                  className=" transition-transform duration-200 "
                  size={15}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* -- Top nav bar End-- */}
      <div className="container">
        <nav className=" px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto ">
          {/* Logo */}
          <div className="flex items-center gap-x-3 relative">
            <img
              src={logo}
              alt="MCS Technology Logo"
              className="p-1 w-[9rem] h-12 shadow rounded-xl transition-all duration-200"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="gap-x-1 lg:flex hidden ">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Call Button & Mobile Menu */}
          {/* <div className="flex items-center  justify-end gap-x-5 bdr">
          <a href="tel:+917065995901">
            <button
              aria-label="Call Now"
              className="bg-[var(--secondary-color)] px-3 py-1.5 shadow rounded-xl flex items-center text-white hover:bg-[var(--secondary2-color)] transition-all duration-200"
            >
            <Phone
            className="mr-2 transition-transform duration-200"
            size={16}
            />
              +91-7065995901
              </button>
              </a>
              </div> */}
          {/* Mobile Menu */}
          <div className="lg:hidden z-50">
            <MobMenu Menus={Menus} />
          </div>
        </nav>
      </div>
    </header>
  );
}
