import React from "react";

const Header = () => {
  return (
    <>
      <nav className=" bg-red-100 h-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" w-11 mt-2">
            <img src="/assets/logo.png" alt="logoBonbol" />
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex md:items-center">
            <li className="mr-6 text-white">
              <a href="#" className="text-white font-semibold">
                Home
              </a>
            </li>
            <li className="mr-6 text-white">
              <a href="#" className="text-white font-semibold">
                Data Spasial
              </a>
            </li>
            <li className="text-white">
              <a href="#" className="text-white font-semibold">
                Data Tabular
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
