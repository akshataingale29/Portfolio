import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const LINK_DISTANCE = 2.6;

function useNodePositions(count: number, spread: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds: number[] = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
      speeds.push(0.05 + Math.random() * 0.09);
    }
    return { positions, speeds };
  }, [count, spread]);
}

function Field() {
  const { positions, speeds } = useNodePositions(NODE_COUNT, 14);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport, pointer } = useThree();

  const basePositions = useMemo(() => positions.slice(), [positions]);
  const linePositions = useMemo(
    () => new Float32Array(NODE_COUNT * NODE_COUNT * 3),
    []
  );
  const lineGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const posAttr = pointsRef.current?.geometry.attributes.position as
      | THREE.BufferAttribute
      | undefined;

    if (posAttr) {
      for (let i = 0; i < NODE_COUNT; i++) {
        const bx = basePositions[i * 3];
        const by = basePositions[i * 3 + 1];
        const bz = basePositions[i * 3 + 2];
        const s = speeds[i];
        posAttr.array[i * 3] = bx + Math.sin(t * s + i) * 0.5;
        posAttr.array[i * 3 + 1] = by + Math.cos(t * s * 1.3 + i) * 0.4;
        posAttr.array[i * 3 + 2] = bz + Math.sin(t * s * 0.7 + i * 2) * 0.5;
      }
      posAttr.needsUpdate = true;

      let idx = 0;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = arr[i * 3] - arr[j * 3];
          const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
          const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < LINK_DISTANCE && idx < linePositions.length - 6) {
            linePositions[idx++] = arr[i * 3];
            linePositions[idx++] = arr[i * 3 + 1];
            linePositions[idx++] = arr[i * 3 + 2];
            linePositions[idx++] = arr[j * 3];
            linePositions[idx++] = arr[j * 3 + 1];
            linePositions[idx++] = arr[j * 3 + 2];
          }
        }
      }
      for (let k = idx; k < linePositions.length; k++) linePositions[k] = 0;
      if (lineGeometryRef.current) {
        (lineGeometryRef.current.attributes.position as THREE.BufferAttribute).needsUpdate = true;
        lineGeometryRef.current.setDrawRange(0, idx / 3);
      }
    }

    if (groupRef.current) {
      const targetX = (pointer.x * viewport.width) / 40;
      const targetY = (pointer.y * viewport.height) / 40;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#5fd9ff"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry ref={lineGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b7bff" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

function GlowSphere({
  position,
  color,
  radius,
}: {
  position: [number, number, number];
  color: string;
  radius: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.4 + position[0]) * 0.6;
    ref.current.rotation.y = t * 0.15;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
}

export default function NetworkField() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <Field />
        <GlowSphere position={[-4.5, 1.5, -3]} color="#3b7bff" radius={1.6} />
        <GlowSphere position={[4.5, -1.2, -4]} color="#8b5cf6" radius={2} />
        <GlowSphere position={[0, 2.5, -6]} color="#22d3ee" radius={1.3} />
      </Canvas>
    </div>
  );
}
