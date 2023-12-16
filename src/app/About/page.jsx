"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion, spring } from "framer-motion";

export const metadata = {
  title: "About",
  description: "About us",
};

const About = () => {
  return (
    <>
      <section className="container min-h-screen flex items-center justify-center flex-col mb-9 mx-auto mt-5 ">
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="mx-5"
        >
          <Image
            src="/About.jpg"
            width={800}
            height={800}
            alt="About"
            className=" grayscale"
          />
        </motion.div>
        <div className="flex flex-col md:flex-row gap-3 mx-5 my-5">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
            className="flex flex-col flex-1"
          >
            <h2 className="text-2xl font-bold text-cyan">Who are we?</h2>
            <p className="text-lg text-light leading-relaxed">
              We are a team of students who have created this project to raise
              awareness about carbon footprint and its impact on the
              environment. Our goal is to help people understand what carbon
              footprint is, how it affects the environment, and what they can do
              to reduce their own carbon footprint.
            </p>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
            className="flex flex-col flex-1"
          >
            <h2 className="text-2xl font-bold  text-cyan">Our Mission</h2>
            <p className="text-lg text-light leading-relaxed">
              Our mission is to educate people about carbon footprint and
              inspire them to take action to reduce their impact on the
              environment. We believe that by raising awareness and providing
              practical tips and tools, we can help individuals and communities
              make positive changes that will benefit the planet and future
              generations.
            </p>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", duration: 1, delay: 1.5 }}
            className="flex flex-col flex-1"
          >
            <h2 className="text-2xl font-bold  text-cyan">Contact Us</h2>
            <p className="text-lg text-light leading-relaxed">
              If you have any questions or feedback about our project, please
              feel free to . We would love to hear from you!
            </p>
          </motion.div>
        </div>
        <Link href="/Contact" className="btn px-10 py-5 self-start">
          contact us
        </Link>
      </section>
    </>
  );
};

export default About;
