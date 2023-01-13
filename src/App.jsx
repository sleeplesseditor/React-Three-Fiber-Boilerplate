
import { Canvas, useLoader } from '@react-three/fiber';
import * as React from 'react';
import { Circle, OrbitControls, Stats } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb');

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <directionalLight castShadow position={[3.3, 1.0, 4.4]} />
        <primitive
          children-0-castShadow
          object={gltf.scene}
          position={[0, 1, 0]}
        />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]}/>
        <gridHelper />
        <Stats />
    </Canvas>
  )
}