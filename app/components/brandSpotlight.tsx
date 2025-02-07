import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";

export default function BrandSpotlight(): JSX.Element {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
    >
      <fog attach="fog" args={["#202020", 5, 20]} />
      <ambientLight intensity={0.015} />

      <Scene />
    </Canvas>
  );
}

function Scene(): JSX.Element {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials }: any = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf"
  );
  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
        // scale={1.5}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
      />

      <mesh
        position={[0, -1.03, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials["Default OBJ.001"]}
        dispose={null}
      />
    </>
  );
}

interface MovingSpotProps {
  vec?: Vector3;
  depthBuffer: any;
  color: string;
  position: [number, number, number];
}

function MovingSpot({
  vec = new Vector3(),
  ...props
}: MovingSpotProps): JSX.Element {
  const light = useRef<any>();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={2}
      distance={6}
      angle={0.35}
      scale={2.5}
      attenuation={6}
      anglePower={5}
      intensity={50}
      {...props}
    />
  );
}
