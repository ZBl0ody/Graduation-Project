import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Arrow from "./Arrow";
const Reduce = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} />
        <Arrow scale={0.01} />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <p className="w-[200px] text-xs h-[100px] rounded bg-white text-black absolute  bottom-3 right-10 p-5">
        Reducing emissions is the key solution to tackling climate change
      </p>
    </>
  );
};

export default Reduce;
