import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

const FloatingShape = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => (
  <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
    <mesh position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
    </mesh>
  </Float>
);

const HeroScene = () => (
  <div className="absolute inset-0 -z-5">
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#c8a96e" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#e8dcc8" />
        <FloatingShape position={[-2.5, 1, 0]} color="#c8a96e" scale={0.8} />
        <FloatingShape position={[2.5, -0.5, -1]} color="#a08050" scale={0.6} />
        <FloatingShape position={[0.5, 2, -2]} color="#e8dcc8" scale={0.4} />
        <FloatingShape position={[-1, -2, -1]} color="#8a7040" scale={0.5} />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
