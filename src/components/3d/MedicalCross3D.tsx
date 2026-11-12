import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const MedicalCross3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle continuous rotation
      groupRef.current.rotation.y += delta * 0.4;
      // Gentle tilt based on mouse pointer
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.3,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -state.pointer.x * 0.3,
        0.05
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.2;
      ringRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.15}>
        {/* Vertical Bar of Cross */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[0.75, 2.4, 0.75]} />
          <meshPhysicalMaterial
            color="#102A43"
            roughness={0.15}
            metalness={0.2}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            reflectivity={0.8}
          />
        </mesh>

        {/* Horizontal Bar of Cross */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 0.75, 0.75]} />
          <meshPhysicalMaterial
            color="#102A43"
            roughness={0.15}
            metalness={0.2}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            reflectivity={0.8}
          />
        </mesh>

        {/* Glowing Center Accent Sphere */}
        <mesh position={[0, 0, 0.3]}>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#12B8A6"
            emissive="#12B8A6"
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Back Center Accent Sphere */}
        <mesh position={[0, 0, -0.3]}>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#12B8A6"
            emissive="#12B8A6"
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Orbiting Glass / Healthcare Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.8, 0.06, 16, 64]} />
          <meshPhysicalMaterial
            color="#1769AA"
            emissive="#1769AA"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.1}
            transmission={0.5}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Subtle decorative floating particles */}
        <mesh position={[1.4, 1.3, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#12B8A6" emissive="#12B8A6" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[-1.3, -1.2, -0.4]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1769AA" emissive="#1769AA" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[-1.5, 0.9, 0.6]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#12B8A6" emissive="#12B8A6" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

