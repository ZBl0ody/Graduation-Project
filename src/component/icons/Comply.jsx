import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Paper from "./Paper";
const Comply = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} />
        <Paper scale={5} />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <p className="w-[200px] h-[70px] rounded bg-white text-black absolute  bottom-3 right-10 p-5">h1</p>
    </>
  );
};

export default Comply;
