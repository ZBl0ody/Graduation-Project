import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkMode from "../DarkMode/DarkMode"
function Navbar() {
  return (
    <header className=" container mx-auto flex justify-between items-center py-2">
      <div className="flex items-center   px-6 py-3 ">
        <Link href="/" className="flex gap-1 items-center text-xl">
          <Image src="/logo.png" width={25} height={10} alt="Logo" />
          <h1 className=" text-maincolor font-semibold">ctober 6th</h1>
        </Link>
      </div>

      <DarkMode />

      <div className="flex gap-5 items-center justify-center">

        <nav className=" flex gap-5 pr-20">
          <Link href="/" className=" text-white hover:text-dark hover:border-b">
            Home
          </Link>
          <Link
            href="/About"
            className="text-white hover:text-dark hover:border-b"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-white hover:text-dark hover:border-b"
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/singIn"
          className=" px-6 py-1 flex gap-2 border-[1px] font-semibold  rounded-xl hover:text-white hover:bg-maincolor hover:border-[#155e45] transition-all duration-500"
        >
          singIn
        </Link>
        <Link
          href="/singUp"
          className=" px-6 py-1 flex gap-2 border-[1px] font-semibold  rounded-xl hover:text-white hover:bg-maincolor hover:border-[#155e45] transition-all duration-500"
        >
          singUp
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
