
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { Model } from './Shoe';

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
      <Environment preset="forest" />
      <Model />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls autoRotate />
    </Canvas>
  )
}