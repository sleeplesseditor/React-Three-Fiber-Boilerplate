
import { Canvas, useLoader } from '@react-three/fiber';
import Polyhedron from './Polyhedron';
import * as THREE from 'three';
import * as React from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import Floor from './Floor';
import { Lights } from './Lights';

export default function App() {
  const texture = useLoader(THREE.TextureLoader, './img/grid.png');

  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }} shadows>
        <Lights />
        <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ map: texture })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial({ flatShading: true, map: texture })}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial({ flatShading: true, map: texture })}
      />
        <Floor />
        <OrbitControls target={[2, 2, 0]} />
        <axesHelper args={[5]}/>
        <gridHelper />
        <Stats />
    </Canvas>
  )
}