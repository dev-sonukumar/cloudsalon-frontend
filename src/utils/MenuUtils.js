import {
  ShoppingBag,
  BellDot,
  BookOpenText,
  BriefcaseBusiness,
  Images,
  Play,
  MapPin,
  PanelsTopLeft,
  ChevronRight,
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
        name: "BIS (Bureau of Indian Standards)",
        // icon: ChevronRight,
        icon: PanelsTopLeft,
        desc: "Responsive design",
        path: "/services/bis",
      },
      {
        name: "BEE (Bureau of Energy Efficiency)",

        icon: PanelsTopLeft,
        desc: "Responsive design",
        path: "/services/bee",
      },
      {
        name: "WPC",

        icon: PanelsTopLeft,
        desc: "Responsive design",
        path: "/services/wpc",
      },
      {
        name: "ISI (Indian Standards Institute)",

        icon: PanelsTopLeft,
        desc: "Responsive design",
        path: "/services/isi",
      },
      {
        name: "TEC (Telecommunication Engineering Centre)",
        desc: "Responsive design",

        icon: PanelsTopLeft,
        path: "/services/tec",
      },
      {
        name: "EPR (Extended Producer Responsibility)",
        desc: "Responsive design",
        icon: PanelsTopLeft,
        path: "/services/epr",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Product Testing",
    path: "/product-testing",
    subMenu: [
      {
        name: "EMI / EMC",
        desc: "Browse templates",
        icon: ShoppingBag,
        path: "/product-testing/emi",
      },
      {
        name: "LED LM79 & LM80",
        desc: "Upcoming events",
        icon: MapPin,
        path: "/product-testing/led-lm79-lm80",
      },
      {
        name: "Ingress Protection (IP) Testing",
        desc: "Changelog",
        icon: BellDot,
        path: "/product-testing/ip-testing",
      },
      {
        name: "All NABL Testing for LED Lighting",
        desc: "Watch lessons",
        icon: Play,
        path: "/product-testing/nabl-led",
      },
      {
        name: "NABL Testing for Toys",
        desc: "Posts",
        icon: BookOpenText,
        path: "/product-testing/nabl-toys",
      },
      {
        name: "CE Marking Certification",
        desc: "Plugin",
        icon: PanelsTopLeft,
        path: "/product-testing/ce-marking",
      },
      {
        name: "FCC Marking Certificate",
        desc: "Jobs",
        icon: BriefcaseBusiness,
        path: "/product-testing/fcc-marking",
      },
      {
        name: "Medical Equipment",
        desc: "Images",
        icon: Images,
        path: "/product-testing/medical-equipment",
      },
      {
        name: "RF Testing for Wireless Products",
        desc: "Images",
        icon: Images,
        path: "/product-testing/rf-testing",
      },
    ],
    gridCols: 2,
  },
  {
    name: "FAQs",
    path: "/faqs",
    gridCols: 1,
  },

  {
    name: "Contact",
    path: "/contact",
  },
];
