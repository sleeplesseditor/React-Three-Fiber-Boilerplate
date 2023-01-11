import * as THREE from 'three';

export default function Floor() {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[10]} />
            <meshStandardMaterial />
        </mesh>
    )
}