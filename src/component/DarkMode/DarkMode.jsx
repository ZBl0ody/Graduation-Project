"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkMode = () => {
  // const { toggel, mode } = useContext(ThemeContext);
  return (
    <div
      className="flex darkicon relative cursor-pointer justify-between items-center  "
      // onClick={toggel}
    >
      <div className="darktext text-xs">🌙</div>
      <div className="darktext text-xs">🔆</div>
      <div
        className="ball"
        // style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
