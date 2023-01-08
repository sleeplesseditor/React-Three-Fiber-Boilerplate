import * as React from 'react';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron ({ position, polyhedron }) {
    const ref = React.useRef();
    const [count, setCount] = React.useState(0);

    console.log(polyhedron);

    useFrame((_, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += 0.5 * delta   
    });

    return (
        <mesh  
            geometry={polyhedron[count]}
            onPointerDown={() => {
                setCount((count + 1) % 3)
            }}
            position={position}
            ref={ref}
        >
            <meshBasicMaterial color={"lime"} wireframe />
        </mesh>
    )
};