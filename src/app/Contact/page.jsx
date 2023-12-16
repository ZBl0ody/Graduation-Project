"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, spring, useInView } from "framer-motion";

export const metadata = {
  title: "Contact",
  description: "Contact us",
};

const Contact = () => {
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container mx-auto my-9 px-9 min-h-screen flex gap-5 flex-col lg:flex-row  items-center  justify-center md:text-left">
      <div className="right flex-1 flex flex-col items-end  justify-center  ">
        <motion.h1
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring" }}
          className=" font-extralight text-transparent text-7xl stroke "
        >
          contact us
        </motion.h1>

        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex   flex-col gap-6 w-[500px]  "
          >
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              <motion.input
                whileFocus={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.7 }}
                type="text"
                placeholder="Name"
                name="name"
                className=" rounded  w-full p-6 text-cyan   "
              />
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", delay: 0.6 }}
            >
              <motion.input
                whileFocus={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.7 }}
                type="email"
                name="email"
                placeholder="Email"
                className=" rounded  w-full p-6 text-cyan "
              />
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", delay: 0.9 }}
            >
              <motion.textarea
                whileFocus={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.7 }}
                type="text"
                placeholder="message"
                name="message"
                className=" rounded  w-full p-6 text-cyan "
                rows={10}
              />
            </motion.div>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                drag
                whileTap={{ cursor: "grabbing" }}
                dragConstraints={{
                  top: -200,
                  right: 200,
                  bottom: 200,
                  left: -200,
                }}
                type="submit"
                className=" bg-white text-black rounded-xl  hover:text-white hover:bg-black transition-all duration-[1s] px-9 py-2 w-40 "
              >
                send ▶
              </motion.button>
            </div>
            {success &&
              "your message has been sent. we'll get back to you soon :) "}
          </form>
        </div>
      </div>
      <motion.div
        animate={{ y: 50, rotate: 5 }}
        initial={{ y: -10, rotate: -5 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
          duration: 3,
        }}
        className="right -z-10 flex-1"
      >
        <Image
          src="/contact.png"
          width={400}
          height={500}
          alt="contact"
          className="  mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
