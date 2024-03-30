import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-green-500 bg-opacity-20 fixed w-full z-10">
        <div className="w-full flex justify-between items-center">
          <div className="w-11 ml-12 mt-4">
            <img src="/assets/logo.png" alt="logoBonbol" />
          </div>
          <div className="md:hidden mr-6">
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

          <ul className="hidden mr-14 md:flex md:items-bottom">
            <li className="mr-6 text-white">
              <Link
                href="/"
                className="text-white font-semibold hover:border-b-4 transition-all hover:border-lime-500"
              >
                Home
              </Link>
            </li>
            <li className="mr-6 text-white">
              <Link
                href="/data_spasial"
                className="text-white font-semibold hover:border-b-4 transition-all ease-in hover:border-lime-500"
              >
                Data Spasial
              </Link>
            </li>
            <li className="text-white">
              <Link
                href="/data_tabular"
                className="text-white font-semibold hover:border-b-4 transition-all ease-in hover:border-lime-500"
              >
                Data Tabular
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
