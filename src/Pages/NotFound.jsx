import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className=" lg:px-4 sm:px-6 text-center lg:mb-20">
        <h1 className="text-7xl font-extrabold text-[var(--main-color)] hover:text-[var(--main2-color)]">
          404
        </h1>
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[var(--main-color)] hover:text-[var(--main2-color)]">
          Sorry! Page Not Found
        </h2>
        <p>Something went wrong, We will fix as soon as possible</p>
        <button className="mt-3 border px-4 py-2 rounded-md bg-[var(--main-color)] text-white hover:bg-gray-500 ">
          <Link
            to="/"
            className="text-sm text-white font-semibold text-[var(--main-color)] "
          >
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
