import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex bg-slate-200 mx-auto w-full justify-between h-24">
        <img src="/assets/logo.png" className=" my-auto ml-8 h-16 " />
        <div class="flex w-[35%] justify-around items-center text-3xl mr-[33%] ">
          <a href="#" className="">
            Home
          </a>
          <a
            href="#"
            className="inline-block relative transition-colors duration-300 ease-in"
          >
            <span className="text-blue-500 hover:text-white hover:bg-blue-500 px-1 py-0.5 transition-colors duration-300 ease-in-out">
              Service
            </span>
          </a>
          <a href="#" className="">
            About
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
