"use client";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiFootprint } from "react-icons/gi";
import Link from "next/link";

const Foot = () => {
  return (
    <footer className="z-50 snap-center w-full   bg-white p-3   ">
      <div className="container mx-auto flex flex-col justify-between ">
        <div className="upper py-9 flex flex-1  items-center justify-center gap-20 md:flex-row">
          <div className="left flex flex-1 flex-col items-center justify-center gap-10 md:items-start ">
            <GiFootprint className="text-6xl text-maincolor" />
            <p className="">
              Making the world a better place through educe carbon emissions and
              <br /> energy costs all year round.
            </p>
            <ul className="flex gap-3">
              <li className="llll">
                <a href="https://www.facebook.com/o6u.eg" target="_blank">
                  <AiOutlineFacebook className="text-5xl" />
                </a>
              </li>
              <li className="llll">
                <a href="https://www.facebook.com/o6u.eg" target="_blank">
                  <AiOutlineInstagram className="text-5xl" />
                </a>
              </li>
              <li className="llll">
                <a href="https://o6u.edu.eg/" target="_blank">
                  <AiOutlineGlobal className="text-5xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="right container flex-1 self-start  mt-10 ">
            <div className="flex gap-10 justify-center">
              <ul className="gap-5 mt-5 flex flex-col text-center">
                <h1 className="text-maincolor text-2xl">USEFUL LINKS</h1>

                <li className="llllll">
                  <Link
                    target="_blank"
                    className="  hover:text-black text-lg "
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="llllll">
                  <Link
                    target="_blank"
                    className="  hover:text-black text-lg "
                    href="https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf"
                  >
                    protocol
                  </Link>
                </li>
                <li className="llllll">
                  <Link
                    target="_blank"
                    href="/calc"
                    className=" hover:text-black text-lg"
                  >
                    CALCULATE
                  </Link>
                </li>
              </ul>
              <ul className="gap-5 mt-5 flex flex-col text-center">
                <h1 className="text-maincolor text-2xl">USEFUL LINKS</h1>

                <li className="llllll">
                  <Link
                    target="_blank"
                    className="  hover:text-black text-lg "
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="llllll">
                  <Link
                    target="_blank"
                    className="  hover:text-black text-lg "
                    href="https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf"
                  >
                    protocol
                  </Link>
                </li>
                <li className="llllll">
                  <Link
                    target="_blank"
                    href="/calc"
                    className=" hover:text-black text-lg"
                  >
                    CALCULATE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower flex  flex-col gap-4 ">
          <hr />
          <p>© 2023 O6U UNIVERSITY, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
