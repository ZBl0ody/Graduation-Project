import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Target from "./Target";
const Aim = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} />
        <Target />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <p className="w-[200px] h-[70px] rounded bg-white text-black absolute  bottom-9 right-10 p-5">
        The online carbon footprint calculation tools enable you to calculate
        your business carbon footprint.
      </p>
    </>
  );
};

export default Aim;
