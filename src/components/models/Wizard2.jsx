"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Wizard2 Component
const Wizard2 = React.memo(function Wizard2(props) {
  // Load the GLTF model
  const { nodes, materials } = useGLTF("/models/wizard2-transformed.glb");
  const modelRef = useRef();

  // Animate the model's Y position to create a bouncing effect
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[0.06, 0.06, 0.06]}
      rotation={[0.25, 0, 0]}
    >
      {/* First mesh (Hat) */}
      {nodes?.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0 && materials?.Evil_HatBLN_Hat ? (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry}
          material={materials.Evil_HatBLN_Hat}
          position={[-1.057, 0, 0]}
          rotation={[0, 0.224, 0]}
          scale={0.832}
        />
      ) : (
        <meshBasicMaterial attach="material" color="red" /> // Fallback if the node/material isn't found
      )}

      {/* Second mesh (New Part) */}
      {nodes?.NewPart2 && materials?.NewMaterial2 ? (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NewPart2.geometry}
          material={materials.NewMaterial2}
          position={[1, 0, 0]}
          scale={0.832}
        />
      ) : (
        <meshBasicMaterial attach="material" color="blue" /> // Fallback for missing node/material
      )}

      {/* Add additional meshes here if needed */}
    </group>
  );
});

export default Wizard2;

// Preload the GLTF model to improve loading performance
useGLTF.preload("/models/wizard2-transformed.glb");
