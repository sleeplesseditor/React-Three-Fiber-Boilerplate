import { Canvas } from '@react-three/fiber';
import CustomBox from './CustomBox';
import { Stats, OrbitControls } from '@react-three/drei';
import useKeyboard from './helpers/useKeyboard';

export default function App() {
  const keyMap = useKeyboard()

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <CustomBox position={[-1.5, 0.5, 0]} keyMap={keyMap} />
      <CustomBox position={[0, 0.5, 0]} keyMap={keyMap} selected />
      <CustomBox position={[1.5, 0.5, 0]} keyMap={keyMap} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}