
import { Canvas, useLoader } from '@react-three/fiber';
import * as React from 'react';
import { Environment, OrbitControls, Stats } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb');

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
        <Environment background blur={0.5} files="./img/venice_sunset_4k.hdr" />
        <directionalLight castShadow position={[3.3, 1.0, 4.4]} intensity={4} />
        <primitive
          object={gltf.scene}
          position={[0, 1, 0]}
        />
        <OrbitControls target={[0, 1, 0]} autoRotate />
        <axesHelper args={[5]}/>
        <gridHelper />
        <Stats />
    </Canvas>
  )
}