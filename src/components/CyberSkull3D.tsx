import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { Center } from '@react-three/drei';

const skullSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
  <path d="m12.5 17-.5-1-.5 1h1z" />
  <circle cx="15" cy="12" r="1.5" />
  <circle cx="9" cy="12" r="1.5" />
</svg>
`;

export default function CyberSkull3D() {
  const groupRef = useRef<THREE.Group>(null);

  const geometries = useMemo(() => {
    const loader = new SVGLoader();
    const svgData = loader.parse(skullSvg);
    const shapes: THREE.Shape[] = [];
    
    svgData.paths.forEach((path) => {
      const pathShapes = path.toShapes(true);
      shapes.push(...pathShapes);
    });

    return shapes.map((shape) => {
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 2,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.1,
        bevelSegments: 3,
      });
      // Invert Y axis because SVG Y goes down, but Three.js Y goes up
      geometry.scale(1, -1, 1);
      return geometry;
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={0.4}>
      <Center>
        {geometries.map((geometry, index) => (
          <mesh key={index} geometry={geometry}>
            <meshStandardMaterial 
              color="#ff0000" 
              emissive="#ff0000" 
              emissiveIntensity={4} 
              wireframe={true} 
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
        {/* Inner solid core */}
        {geometries.map((geometry, index) => (
          <mesh key={`core-${index}`} geometry={geometry} scale={0.95}>
            <meshStandardMaterial 
              color="#550000" 
              emissive="#ff0000" 
              emissiveIntensity={1.5} 
            />
          </mesh>
        ))}
      </Center>
    </group>
  );
}
