import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export default function Box(props) {
    const ref = React.useRef();
    const [count, setCount] = React.useState(0);
    const geometry = React.useMemo(
        () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)], 
        []
    );

    React.useEffect(() => {
        console.log(ref.current.geometry.uuid)
    });

    useFrame((_, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += 0.5 * delta
    });

    return (
        <mesh 
            {...props}
            geometry={geometry[count]}
            onPointerDown={() => setCount((count + 1) % 2)}
            ref={ref}
        >
            <meshBasicMaterial color={'lime'} wireframe />
        </mesh>
    )
}