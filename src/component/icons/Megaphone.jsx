/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Megaphone.gltf --transform
Author: wanna96id (https://sketchfab.com/wanna96id)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/megaphone-model-aba36e712df44a6f9ca8f2d80ae593f5
Title: MEGAPHONE MODEL
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Megaphone-transformed.glb");
  return (
    <group position={[0,0,-0.6]} scale={1}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        position={[-0.63, 0, 0.47]}
        rotation={[-0.83, 0.94, 0.78]}
        scale={[0.2, 0.19, 0.15]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.003"]}
        position={[-0.34, -0.21, 0.6]}
        rotation={[-0.83, 0.94, 0.78]}
        scale={[0.14, 0.11, 0.14]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Material.002"]}
        position={[-0.14, -0.39, 0.68]}
        rotation={[-0.93, 0.87, 0.86]}
        scale={[0.05, 0.07, 0.07]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["Material.008"]}
        position={[0.74, 1.43, 1.18]}
        rotation={[1.63, 0, -2.71]}
        scale={0.62}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.008"]}
        position={[0.97, 0.96, 1.25]}
        rotation={[1.89, -0.52, -2.64]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["Material.008"]}
        position={[1.12, 0.5, 1.3]}
        rotation={[2.43, -1.01, -2.25]}
        scale={0.42}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.008"]}
        position={[0.35, 1.64, 1.02]}
        rotation={[1.5, 0.27, -2.7]}
        scale={0.35}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials["Material.008"]}
        position={[1.09, 0.12, 1.25]}
        rotation={[2.77, -1.11, -1.96]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials["Material.005"]}
        position={[-0.26, 0.21, 0.66]}
        rotation={[1.41, 0.43, -1.09]}
        scale={[0.62, 0.86, 0.62]}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials["Material.004"]}
        position={[0.18, 0.45, 0.88]}
        rotation={[1.41, 0.43, -1.09]}
        scale={[0.62, 0.86, 0.62]}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials["Material.003"]}
        position={[-0.46, 0.1, 0.56]}
        rotation={[1.41, 0.43, -1.09]}
        scale={[0.62, 0.86, 0.62]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials["Material.003"]}
        position={[0.42, 0.57, 1]}
        rotation={[1.41, 0.43, -1.09]}
        scale={[0.62, 0.86, 0.62]}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials["Material.001"]}
        position={[0.55, 0.65, 1.06]}
        rotation={[1.41, 0.43, -1.09]}
        scale={[0.62, 0.86, 0.62]}
      />
    </group>
  );
}

useGLTF.preload("/Megaphone-transformed.glb");