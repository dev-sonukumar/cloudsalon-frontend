import { bg2 } from "@/utils/ImgUtils";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      className="bg-no-repeat bg-cover bg-center  py-10 "
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left ">
          {/* Column 1: About Us */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm ">
              Cloud Salon provides all Salon Services near you, including
              Waxing, facials, Manicures, pedicures, Spa from experienced
              beauticians, and more.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb sm:mb-0 lg:pl-32 ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm ">
              <li className="mb-2">
                <Link
                  to="/"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:text-gray-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-sm ">
              <li className="mb-2">
                <span className="font-semibold">Address:</span> Dwarka, New
                Delhi, India
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +91-9315040549
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                contact@cloudsalon.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
