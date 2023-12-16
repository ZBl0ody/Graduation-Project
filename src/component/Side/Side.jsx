import React from "react";
import { Link } from "react-router-dom";
import { BsFillCalculatorFill } from "react-icons/bs";
import { GiFootprint } from "react-icons/gi";

const Side = ({ isActive, handleClick }) => {
  return (
    <aside className="h-screen bg-black bg-opacity-50 z-50  fixed right-0 w-1/2 top-0 py-5">
      <div className="flex justify-between items-center m-2">
        <Link
          to="/"
          className=" font-bold flex-1 text-3xl flex gap-2 items-center text-maincolor"
        >
          <GiFootprint className="text-4xl" />
          O6U CFP
        </Link>
        <div className={"active burger-icon   "} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="flex my-2 flex-col justify-around gap-5 text-start">
        <li>
          <Link
            className="  hover:border-b   transition-all hover:text-white text-cyan font-medium ml-3 text-lg"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b   transition-all hover:text-white text-cyan font-medium ml-3 text-lg"
            to="/Support"
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b  transition-all hover:text-white text-cyan font-medium ml-3 text-lg"
            to="/About"
          >
            About
          </Link>
        </li>
      </ul>
      <hr />
      <div className="btn m-2  hidden px-2 py-3 h-fit   ">
        <Link
          to="/DataEntry"
          className=" text-base font-light  items-center gap-2 flex "
        >
          CALCULATE <BsFillCalculatorFill className="text-2xl " />
        </Link>
      </div>
    </aside>
  );
};

export default Side;
