import * as React from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box(props) {
    const ref = React.useRef();
    const [hovered, setHover] = React.useState(false)
    const [rotate, setRotate] = React.useState(false)

    useFrame((_, delta) => {
        if(rotate){
            ref.current.rotation.x += 1 * delta
            ref.current.rotation.y += 0.5 * delta
        }
    });

    return (
        <mesh 
            {...props}
            onPointerDown={() => setRotate(!rotate)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            ref={ref}
            scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        >
            <boxGeometry />
            <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
        </mesh>
    )
}