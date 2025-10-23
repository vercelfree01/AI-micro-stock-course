"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei"
import type * as THREE from "three"

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhongMaterial color="#9333ea" emissive="#7e22ce" shininess={100} />
    </mesh>
  )
}

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color="#06b6d4" emissive="#0891b2" shininess={100} />
    </mesh>
  )
}

function AccentTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.z += 0.005
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 1.5, -1]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshPhongMaterial color="#fbbf24" emissive="#f59e0b" shininess={80} />
    </mesh>
  )
}

export function Hero3DScene() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="studio" />

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#9333ea" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <RotatingCube />
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <FloatingOrb />
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <AccentTorus />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}
