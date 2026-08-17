import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;

      const targetX = (state.pointer.x * state.viewport.width) / 35;
      const targetY = (state.pointer.y * state.viewport.height) / 35;
      meshRef.current.position.x += (targetX * 0.25 - meshRef.current.position.x) * 0.04;
      meshRef.current.position.y += (targetY * 0.25 - meshRef.current.position.y) * 0.04;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.2;
      ringRef1.current.rotation.y = t * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.4) * 0.2;
      ringRef2.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <group position={[-1.2, 0.2, -0.5]}>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Core sphere */}
        <mesh ref={meshRef} scale={1.35}>
          <icosahedronGeometry args={[1, 16]} />
          <MeshDistortMaterial
            color="#7c5cff"
            attach="material"
            distort={0.4}
            speed={0.4}
            roughness={0.1}
            metalness={0.9}
            emissive="#43229b"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Orbiting glowing rings */}
        <mesh ref={ringRef1}>
          <Ring args={[1.8, 1.84, 64]}>
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} side={THREE.DoubleSide} />
          </Ring>
        </mesh>

        <mesh ref={ringRef2}>
          <Ring args={[2.1, 2.13, 64]}>
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.25} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 550;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#22d3ee" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!absolute inset-0 pointer-events-none"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} intensity={2.5} color="#7c5cff" />
        <pointLight position={[-4, -3, -3]} intensity={2} color="#22d3ee" />
        <Core />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
