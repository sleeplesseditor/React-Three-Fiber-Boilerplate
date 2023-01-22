
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { Environment, OrbitControls, Stats } from '@react-three/drei';
import { useControls } from 'leva';
import { AnnotatedModel } from './AnnotatedModel';
import Models from './models';

export default function App() {
  const { model } = useControls({
    model: {
      value: 'hammer',
      options: Object.keys(Models),
    }
  });

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment files="./img/workshop_1k.hdr" background />
        <group>
          <AnnotatedModel url={Models[model]} />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected</span>
    </>
  )
}