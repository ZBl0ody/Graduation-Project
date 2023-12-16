"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Aim from "../component/icons/Aim";
import Calculate from "../component/icons/Calculate";
import Reduce from "../component/icons/Reduce";
import Offset from "../component/icons/Offset";
import Communicate from "../component/icons/Communicate";
import Comply from "../component/icons/Comply";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Home() {
  const data = [
    "Calculate",
    "Aim",
    "Reduce",
    "Offset",
    "Communicate",
    "Comply",
  ];
  const [isLogedin, setisLogedin] = useState(true);

  const [icon, seticon] = useState("Calculate");
  return (
    <section className=" backdrop-blur-lg p-5 flex flex-col">
      <main className="container   w-full min-h-screen  flex flex-col mx-auto  justify-between text-center md:text-left">
        <div className=" h-full  flex-1 flex justify-between flex-col items-center  w-full md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="left flex-1  h-full  flex flex-col justify-center items-center gap-5  md:items-start "
          >
            <h1 className="gradient text-4xl sm:text-4xl md:text-5xl font-bold text-white ">
              Welcome to October 6th UNIVERSITY.
            </h1>
            <h2 className=" text-3xl text-transparent stroke md:text-5xl sm:text-4xl font-black tracking-wider  ">
              CARBON FOOTPRINT
            </h2>
            <q className=" text-lg text-white ">
              Your Solution For Cutting Carbon And Caring For The Climate
            </q>
            <Link
              href="/calc"
              className=" px-9 py-3 flex gap-2 border-[1px] font-semibold  rounded-xl hover:text-white hover:bg-maincolor hover:border-[#155e45] transition-all duration-500"
            >
              calculate <AiOutlineLogin className="text-3xl" />
            </Link>
          </motion.div>
          <div className=" flex-1 container h-screen z-[-1] ">
            <Canvas camera={{ fov: 25, position: [0, 0, 9] }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 0, 0]} />
              <Sphere args={[1, 200, 100]} scale={1.5} position={[0, 0, -3]}>
                <MeshDistortMaterial
                  color="#05161a"
                  attach="material"
                  distort={0.3}
                  speed={3}
                />
              </Sphere>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 100]} scale={1} position={[0, 0, 0]}>
                <MeshDistortMaterial
                  color="#6da5c0"
                  attach="material"
                  distort={0.6}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
        </div>
      </main>
      <section className="relative min-h-screen  container pb-5  w-full mx-auto   	">
        <div className=" h-full p-5 flex-col flex justify-between md:flex-row ">
          <div className="left flex items-center justify-center  ">
            <motion.ul>
              {data.map((item) => (
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                  key={item}
                >
                  <h1
                    onClick={() => seticon(item)}
                    className="s slide text-center text-5xl sm:text-start  font-bold cursor-pointer text-transparent stroke md:text-8xl"
                  >
                    {item}
                  </h1>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="w-full h-screen flex-1 container relative right flex-col flex justify-center items-center   ">
            {icon === "Calculate" ? (
              <Calculate />
            ) : icon === "Aim" ? (
              <Aim />
            ) : icon === "Reduce" ? (
              <Reduce />
            ) : icon === "Offset" ? (
              <Offset />
            ) : icon === "Communicate" ? (
              <Communicate />
            ) : (
              <Comply />
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
