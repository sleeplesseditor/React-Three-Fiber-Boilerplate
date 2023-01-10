
import { Canvas } from '@react-three/fiber';
import Polyhedron from './Polyhedron';
import * as THREE from 'three';
import * as React from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { useControls } from 'leva';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  const options = React.useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      colour: { value: 'lime' },
    }
  }, []);

  const pA = useControls('Polyhedron A', options);
  const pB = useControls('Polyhedron B', options);

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
        <Polyhedron 
          colour={pA.colour}
          polyhedron={polyhedron}
          position={[-1, 1, 0]} 
          rotation={[pA.x, pA.y, pA.z]}
          visible={pA.visible}
        />
        <Polyhedron 
          colour={pB.colour}
          polyhedron={polyhedron} 
          position={[1, 1, 0]} 
          rotation={[pB.x, pB.y, pB.z]}
          visible={pB.visible}
        />
        <OrbitControls />
        <axesHelper args={[5]}/>
        <gridHelper />
        <Stats />
    </Canvas>
  )
}