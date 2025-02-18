import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-0 right-0 top-[90px] overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
      >
        <ul>
          {Menus.map(({ name, path, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <span
                  className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative transition-colors duration-200"
                  onClick={() =>
                    hasSubMenu
                      ? setClicked(isClicked ? null : i)
                      : handleMenuClick(path)
                  }
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform duration-200 ${
                        isClicked ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5 overflow-hidden"
                  >
                    {subMenu.map(({ name, path, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex items-center gap-x-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors duration-200"
                        onClick={() => handleMenuClick(path)}
                      >
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
