import * as React from 'react';
import { useControls } from 'leva';

export function Lights() {
    const directionalRef = React.useRef()

  useControls('Directional Light', {
    intensity: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.1,
      onChange: (v) => {
        directionalRef.current.intensity = v
      },
    },

    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
      onChange: (v) => {
        directionalRef.current.position.copy(v)
      },
    },
  })

  return <directionalLight ref={directionalRef} castShadow />
}