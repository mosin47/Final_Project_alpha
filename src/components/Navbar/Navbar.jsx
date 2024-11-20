import { Menus } from "./utils";
import background from "../../assets/assects.png"
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import DesktopMenu from "./DesktopMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-inherit justify-between items-center px-40 py-7">
      <div>
        
        <img
          src={background}
          alt="Nike Logo"
          width={200}
          height={150}
        />
      </div>
      <div className="flex gap-5">
        {Menus.map((item) => (
          <div key={item.category} className="group">
            <Link
              to={item.href}
              className="text-lg font-semibold py-1 hover:border-b-[3px] border-black"
            >
              {item.category}
              {item.product && <DesktopMenu product={item.product} />}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-10 w-48 rounded-full text-lg"
          />
          <IoSearch className="absolute top-[50%] translate-y-[-50%] left-2" />
        </div>
        <div className="flex items-center gap-5 text-lg">
          <FaRegHeart />
          <IoBagOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
