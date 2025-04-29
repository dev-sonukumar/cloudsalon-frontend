import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import add_icon from "./add_icon.png";
import order_icon from "./order_icon.png";
import upload_area from "./upload_area.png";
import parcel_icon from "./parcel_icon.svg";
import main_banner_bg from "./main_banner_bg.png";

import hairstyle from "././assets/service/hair1.webp";
import makeup from "././assets/service/makeup1.webp";
import threading from "././assets/service/threading1.webp";
import facial from "././assets/service/facial1.webp";
import waxing from "././assets/service/waxing1.webp";
import manicure from "././assets/service/manicure1.webp";
import combo from "././assets/service/combo1.webp";

export const assets = {
  logo,
  add_icon,
  order_icon,
  upload_area,
  parcel_icon,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  main_banner_bg,
  hairstyle,
  makeup,
  threading,
  facial,
  waxing,
  manicure,
  combo,
};

export const products = [
  {
    _id: "aaaba",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [logo],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716640945448,
    bestseller: false,
  },
];

export const categories = [
  {
    text: "Hair-Style",
    path: "Hair-Style",
    image: hairstyle,
    bgColor: "#FEF6DA",
  },
  {
    text: "Makeup",
    path: "Makeup",
    image: makeup,
    bgColor: "#FEE0E0",
  },
  {
    text: "Face-Threading",
    path: "FaceThreading",
    image: threading,
    bgColor: "#F0F5DE",
  },
  {
    text: "Facial",
    path: "Facial",
    image: facial,
    bgColor: "#E1F5EC",
  },
  {
    text: "Waxing",
    path: "Waxing",
    image: waxing,
    bgColor: "#FEE6CD",
  },
  {
    text: "Manicure-Pedicure",
    path: "Manicure-Pedicure",
    image: manicure,
    bgColor: "#E0F6FE",
  },
  {
    text: "Combo",
    path: "Combo",
    image: combo,
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Services", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "Privacy Policy Page", url: "#" },
      { text: "Terms & Conditions ", url: "#" },
      { text: "FAQ", url: "#" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { text: "Address: Dwarka, New Delhi, India", url: "#" },
      { text: "Phone: +91-9315040549 ", url: "#" },
      { text: "Email: contact@cloudsalon.in", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];
