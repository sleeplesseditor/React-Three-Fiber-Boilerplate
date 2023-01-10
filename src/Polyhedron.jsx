import * as React from 'react';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron ({ polyhedron, colour, ...props }) {
    const ref = React.useRef();
    const [count, setCount] = React.useState(0);

    console.log(polyhedron);

    useFrame((_, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += 0.5 * delta   
    });

    return (
        <mesh  
            {...props}
            geometry={polyhedron[count]}
            onPointerDown={() => {
                setCount((count + 1) % 3)
            }}
            ref={ref}
        >
            <meshBasicMaterial color={colour} wireframe />
        </mesh>
    )
};