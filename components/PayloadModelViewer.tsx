"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Environment,
  Float,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

useGLTF.preload("/cube.glb");

type Props = {
  src?: string;
  className?: string;
  autoRotate?: boolean;
};

export default function PayloadModelViewer({
  src = "/cube.glb",
  className = "",
  autoRotate = true,
}: Props) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        orthographic
        camera={{
          // Top-isometric: 45° azimuth, ~60° elevation — top face dominant
          // with both +X and +Z side faces still visible at iso angles.
          position: [10, 24, 10],
          zoom: 80,
          near: -100,
          far: 100,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 8, 4]} intensity={1.1} />
        <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#ed6d2f" />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.15}>
            <Float
              speed={1.1}
              rotationIntensity={0.2}
              floatIntensity={0.4}
              floatingRange={[-0.03, 0.03]}
            >
              <PayloadModel src={src} autoRotate={autoRotate} />
            </Float>
          </Bounds>

          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.35}
            scale={6}
            blur={2.6}
            far={2.5}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function PayloadModel({
  src,
  autoRotate,
}: {
  src: string;
  autoRotate: boolean;
}) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(src);

  useFrame((state, delta) => {
    if (!autoRotate || !ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y += delta * 0.35;
    // Gentle x/z tumble keeps the +X and +Y faces always partially visible
    // while exposing every other face over a long cycle.
    ref.current.rotation.x = Math.sin(t * 0.35) * 0.18;
    ref.current.rotation.z = Math.cos(t * 0.25) * 0.08;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}
