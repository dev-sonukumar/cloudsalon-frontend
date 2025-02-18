import { Link } from "react-router-dom";
import { ChevronDown, User, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function DesktopMenu({ menu, isAuthenticated }) {
  const [isHover, setIsHover] = useState(false);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="relative"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      key={menu.name}
    >
      <Link
        to={menu.path}
        className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-lg"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`transition-transform ${isHover ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="absolute left-0 mt-2 w-80 bg-popover rounded-lg shadow-lg z-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <Card className="p-2 space-y-2">
            {menu.subMenu.map((submenu, i) => (
              <Link
                key={i}
                to={submenu.path}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition w-full border border-dashed"
              >
                {submenu.icon && <submenu.icon className="w-5 h-5" />}
                <div>
                  <h6 className="font-semibold text-foreground text-sm">
                    {submenu.name}
                  </h6>
                </div>
              </Link>
            ))}
          </Card>
        </motion.div>
      )}

      {/* User & Login Option */}
      {menu.name === "Account" && (
        <div className="absolute right-0 mt-2 w-48 bg-popover rounded-lg shadow-lg z-50">
          <Card className="p-2 space-y-2">
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition w-full"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition w-full"
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </Card>
        </div>
      )}
    </motion.li>
  );
}
