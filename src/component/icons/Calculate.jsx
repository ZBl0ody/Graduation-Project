import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Calcu from "./Calcu";
const Calculate = () => {
  return (
    <>
      <Canvas className="w-full h-full">
        <Stage environment="city" intensity={0.6} />
        <Calcu />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p className="w-[200px] h-[70px] rounded bg-white text-black absolute  bottom-9 right-10 p-5">
        The online carbon footprint calculation tools enable you to calculate
        your business carbon footprint.
      </p>
    </>
  );
};

export default Calculate;
