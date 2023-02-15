import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export const Box = () => {
  return (
    <div className="background-three">
      <Canvas>
        <Stars />
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />

        {/* <mesh rotateY={5}>
          <boxBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="hotpink" />
        </mesh> */}
      </Canvas>
    </div>
  );
};
