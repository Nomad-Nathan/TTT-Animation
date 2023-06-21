import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Sparkles,
  SpotLight,
  Svg,
  Clone,
} from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

function App() {
  const { scene } = useGLTF("/ttt1.glb");
  const gltfRef = useRef();
  const sparklesRef = useRef();

  useFrame(({ clock }) => {
    gltfRef.current.rotation.y =
      Math.PI * 1.8 + Math.cos(clock.getElapsedTime() / 2) / 1.5;
    gltfRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 2) / 2;
  });

  /* CHANGE POSITION ON MOUSE MOVE */
  const [mouseMoove, setMouseMoove] = useState();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseMoove(e);
      gltfRef.current.position.x = e.clientX / 1000;
      gltfRef.current.position.y = -e.clientY / 1000;
    });
    console.log(mouseMoove);
  }, [mouseMoove]);

  return (
    <>
      <ambientLight />
      {/* <primitive object={scene} ref={gltfRef} /> */}
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.2} />

      {/* <mesh ref={gltfRef}>
        <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
        <meshStandardMaterial color="black" roughness={0.1} metalness={0.5} />
      </mesh> */}
      {/* <group ref={gltfRef}>
        <primitive object={scene} ref={gltfRef} />
      </group> */}

      <primitive object={scene} position={[0,0,-6]} ref={gltfRef} />
    </>
  );
}

export default App;
