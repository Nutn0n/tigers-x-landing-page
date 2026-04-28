"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import {
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  type Group,
} from "three";

useGLTF.preload("/cube.glb");

type Props = {
  src?: string;
  className?: string;
  autoRotate?: boolean;
  /** When true, meshes are hidden and only white edge lines are drawn (Story section). */
  outlineOnly?: boolean;
  /** Drag to orbit; pan and zoom off (e.g. Specification section). */
  orbitControls?: boolean;
  /** Clear color fully transparent (e.g. spec block on transparent wrapper). */
  transparentCanvas?: boolean;
};

export default function PayloadModelViewer({
  src = "/cube.glb",
  className = "",
  autoRotate = true,
  outlineOnly = false,
  orbitControls = false,
  transparentCanvas = false,
}: Props) {
  return (
    <div
      className={`relative h-full min-h-0 w-full overflow-hidden ${className}`}
    >
      <Canvas
        className={`!block h-full min-h-0 w-full max-w-full${orbitControls ? " cursor-grab active:cursor-grabbing" : ""}`}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          ...(transparentCanvas ? { premultipliedAlpha: false } : {}),
        }}
        onCreated={
          transparentCanvas
            ? ({ gl, scene }) => {
                scene.background = null;
                gl.setClearColor(0x000000, 0);
              }
            : undefined
        }
        orthographic
        camera={{
          position: [10, 24, 10],
          zoom: 80,
          near: -100,
          far: 100,
        }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 8, 4]} intensity={1.1} />
        <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#ed6d2f" />

        <Suspense fallback={null}>
          <Bounds
            fit
            clip
            observe={false}
            margin={1.06}
            maxDuration={orbitControls ? 0.001 : 1}
            interpolateFunc={orbitControls ? () => 1 : undefined}
          >
            <PayloadModel
              src={src}
              autoRotate={autoRotate}
              outlineOnly={outlineOnly}
            />
          </Bounds>

          {orbitControls && (
            <OrbitControls
              makeDefault
              enablePan={false}
              enableZoom={false}
              target={[0, 0, 0]}
            />
          )}

          {!outlineOnly && (
            <ContactShadows
              position={[0, -1.4, 0]}
              opacity={0.35}
              scale={6}
              blur={2.6}
              far={2.5}
            />
          )}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function PayloadModel({
  src,
  autoRotate,
  outlineOnly,
}: {
  src: string;
  autoRotate: boolean;
  outlineOnly: boolean;
}) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(src);
  const model = useMemo(
    () => (outlineOnly ? scene.clone(true) : scene),
    [scene, outlineOnly],
  );

  useLayoutEffect(() => {
    if (!outlineOnly) return;

    const lines: LineSegments[] = [];
    const hidden: Mesh[] = [];

    model.traverse((obj) => {
      if (!(obj as Mesh).isMesh) return;
      const mesh = obj as Mesh;
      const geom = mesh.geometry;
      if (!geom) return;

      const edgeGeom = new EdgesGeometry(geom, 28);
      const mat = new LineBasicMaterial({
        color: 0xffffff,
        depthTest: true,
        toneMapped: false,
      });
      const line = new LineSegments(edgeGeom, mat);

      const parent = mesh.parent;
      if (!parent) {
        edgeGeom.dispose();
        mat.dispose();
        return;
      }

      line.position.copy(mesh.position);
      line.quaternion.copy(mesh.quaternion);
      line.scale.copy(mesh.scale);
      parent.add(line);
      mesh.visible = false;
      lines.push(line);
      hidden.push(mesh);
    });

    return () => {
      for (const mesh of hidden) {
        mesh.visible = true;
      }
      for (const line of lines) {
        line.parent?.remove(line);
        line.geometry.dispose();
        (line.material as LineBasicMaterial).dispose();
      }
    };
  }, [outlineOnly, model]);

  useFrame((_, delta) => {
    if (!autoRotate || !ref.current) return;
    ref.current.rotation.y += delta * 0.4;
    ref.current.rotation.x = 0;
    ref.current.rotation.z = 0;
  });

  return (
    <group ref={ref}>
      <primitive object={model} />
    </group>
  );
}
