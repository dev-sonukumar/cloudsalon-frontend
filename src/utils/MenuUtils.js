import {
  BookOpenText,
  BriefcaseBusiness,
  MapPin,
  PanelsTopLeft,
  Scissors,
  Brush,
  Sparkles,
  Flower,
  Droplet,
  Hand,
} from "lucide-react";

export const Menus = [
  {
    name: "Home",
    desc: "Welcome to the homepage",
    icon: PanelsTopLeft,
    path: "/",
    gridCols: 1,
  },
  {
    name: "Services",
    path: "/services",
    subMenu: [
      {
        name: "Hair Style",
        icon: Scissors,
        path: "/services/hair-style",
      },
      {
        name: "MakeUp",
        icon: Brush,
        path: "/services/makeup",
      },
      {
        name: "Face-Threading",
        icon: Sparkles,
        path: "/services/face-threading",
      },
      {
        name: "Facial",
        icon: Flower,
        path: "/services/facial",
      },
      {
        name: "Waxing",
        icon: Droplet,
        path: "/services/waxing",
      },
      {
        name: "Manicure-Pedicure",
        icon: Hand,
        path: "/services/manicure-pedicure",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Dashboard",
    icon: BriefcaseBusiness,
    path: "/userdashboard",
    gridCols: 2,
  },
  {
    name: "FAQs",
    icon: BookOpenText,
    path: "/faqs",
    gridCols: 1,
  },
  {
    name: "Contact",
    icon: MapPin,
    path: "/contact",
  },
];
