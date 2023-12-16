"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, spring } from "framer-motion";

export const metadata = {
  title: "Result",
  description: "your carbon footprint Result",
};

function Result() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/result.json")
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Calculate the total emission by summing up the result values of each item
  const totalEmission = data.reduce((total, item) => total + item.result, 0);

  return (
    <section className="container min-h-screen mx-auto w-full text-white ">
      <h1 className="text-4xl my-5 text-center font-extrabold gradient">
        Your Carbon Footprint:
      </h1>
      {console.log(data)}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="content w-fit p-5 hover:bg-secolor transition-all flex flex-col gap-3 border-[2px] border-secolor   "
      >
        {data.map((item) => (
          <div key={item.name} className="flex gap-1">
            <h2>{item.name}</h2>
            <p>
              <span className=" text-maincolor">{item.result}</span> metric tons
              of CO2e{" "}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.h1
        whileHover={{
          scale: 1.05,
          cursor: "pointer",
        }}
        className="text-3xl text-center border-secolor border-[2px] rounded   my-5"
      >
        The Total Emission is
        <span className=" text-maincolor">{totalEmission}</span> metric tons of
        CO2e
      </motion.h1>
    </section>
  );
}

export default Result;
