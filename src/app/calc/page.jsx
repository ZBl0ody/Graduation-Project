"use client";

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "how to calculate",
  description: "how to calculate your carbon footprint",
};
const Calc = () => {
  return (
    <section className="container min-h-screen  flex flex-col mx-auto  justify-between mb-5">
      <div className=" text-center my-5 ">
        <h1 className="font-extralight  text-transparent text-7xl stroke">
          CALCULATE
        </h1>
        <p className="text-dark">
          Start Measuring And Reporting Your Carbon Emissions
        </p>
      </div>

      <div className=" cards   my-5 w-full  flex-1 grid grid-flow-col grid-cols-2 grid-rows-3 gap-5 text-center  ">
        <div className="transition-all group mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              chose a protocol
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl   ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>

        <div className="transition-all group mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              select data and scopes
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl   ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>

        <div className="transition-all group mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              collect data
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl   ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>

        <div className="transition-all group mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              collect data
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl   ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>

        <div className="transition-all group mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              use the right unites
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl   ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>

        <div className="transition-all group  mx-auto flex duration-700  border-[1px] text-white font-semibold  rounded-xl   justify-center items-center p-3 hover:bg-white cursor-pointer">
          <div className="flex flex-col  justify-center items-center mr-3">
            <h1 className="group-hover:text-maincolor font-black text-3xl ">
              use the website
            </h1>
          </div>
          <p className="flex-1 text-white group-hover:text-dark  text-xl  ">
            there is alot of protocols out there we are using GHG protocol
          </p>
        </div>
      </div>

      <Link
        href="calc/Scopes"
        className=" px-9 py-3  border-[1px] text-secolor font-semibold  rounded-xl self-end hover:text-white hover:bg-maincolor hover:border-[#155e45] transition-all duration-500"
      >
        scope1 ▶
      </Link>
    </section>
  );
};

export default Calc;
