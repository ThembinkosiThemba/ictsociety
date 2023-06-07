import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 mb-2">
      <div
        className="md:flex-[0.5] flex-initial justify-center items-center t
      ext-black text-xl"
      >
        <a href="./">ICT Society</a>
      </div>
      <ul className="text-black text-lg md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">
          <a href="#Events" className="cursor-pointer" rel="noopener">
            Events
          </a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#Membership" className="cursor-pointer" rel="noopener">
            Membership
          </a>
        </li>
        <li className="bg-gray-800 text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <a href="#Contact" className="cursor-pointer">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-[50%] bg-gray-700 shadow-2xl md:hidden list-none
            flex flex-col justify-start items-start rounded-md text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="text-xl w-full my-2">
              <a href="#Events">Events</a>
            </li>
            <li className="text-xl w-full my-2">
              <a href="#Membership">Membership</a>
            </li>
            <li className="bg-gray-800 py-2 px-7 text-xl my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <a href="#Register">Register</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
