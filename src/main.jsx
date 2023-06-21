import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <App />
    <PerspectiveCamera position={[0, 0, 1]} />
    <OrbitControls
      maxAzimuthAngle={Math.PI * 2}
      maxPolarAngle={Math.PI / 2}
      maxZoom={3}
      minZoom={6}
    />
  </Canvas>
);
