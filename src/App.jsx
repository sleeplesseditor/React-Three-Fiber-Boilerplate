
import { Canvas } from '@react-three/fiber';
import Polyhedron from './Polyhedron';
import * as THREE from 'three';
import * as React from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { Lights } from './Lights';

export default function App() {
  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }} shadows>
        <Lights />
        <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ color: 'yellow', flatShading: true })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial({ color: 'lime', flatShading: true })}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial({ color: 0xff0033, flatShading: true })}
      />
        <OrbitControls target={[2, 2, 0]} />
        <axesHelper args={[5]}/>
        <gridHelper />
        <Stats />
    </Canvas>
  )
}