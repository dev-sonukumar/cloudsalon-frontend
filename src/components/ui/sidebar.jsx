import { useState } from "react";
import {
  CornerDownRight,
  ChevronDown,
  ChevronUp,
  FolderCog,
  FileText,
  FileQuestionIcon,
  LayoutDashboard,
  StickyNote,
  ShieldCheck,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "dashboard", icon: <LayoutDashboard /> },
  { name: "Services", path: "services", icon: <FolderCog /> },
  { name: "Posts", path: "posts", icon: <StickyNote /> },
  { name: "Blog", path: "blog", icon: <FileText /> },
  {
    name: "FAQ",
    path: "faq",
    children: [
      { name: "BIS", path: "bisfaq" },
      { name: "ETA", path: "faq-eta" },
      { name: "EPR", path: "faq-epr" },
    ],
    icon: <FileQuestionIcon />,
  },
];

const Sidebar = ({ setActiveSection }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="mt-10">
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="mb-2 ">
            {/* Parent Menu Item */}
            <div
              className="flex justify-between items-center cursor-pointer hover:text-gray-400 p-2 rounded-md border"
              onClick={() => {
                if (item.children) {
                  toggleMenu(item.name);
                } else {
                  setActiveSection(item.path);
                }
              }}
            >
              <span className="flex items-center gap-3 ">
                {item.icon || <CornerDownRight />}
                {item.name}
              </span>
              {item.children &&
                (openMenu === item.name ? <ChevronUp /> : <ChevronDown />)}
            </div>

            {/* Child Menu (FAQ Submenu) */}
            {item.children && openMenu === item.name && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-dashed border-gray-500 pl-3">
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className="cursor-pointer hover:text-gray-300 flex items-center gap-2 p-2 mt-2  rounded-md border"
                    onClick={() => setActiveSection(child.path)}
                  >
                    <ShieldCheck /> {child.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
