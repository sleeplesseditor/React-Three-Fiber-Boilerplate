
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { ContactShadows, OrbitControls, Stats } from '@react-three/drei';
import { Leva } from 'leva';
import { Env } from './Env';
import { Model } from './Model';

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [-8, 5, 8] }}>
        <Env />
        <Model />
        <ContactShadows 
          opacity={1.5}
          position={[0.33, -0.33, 0.33]}
          scale={150}
        />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
        <Stats />
      </Canvas>
      <Leva collapsed />
    </>
  )
}