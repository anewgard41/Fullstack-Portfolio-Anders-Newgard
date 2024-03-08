import React from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import { Suspense } from "react";

const Home = () => {
    const adjustIslandForScreenSize = () => {
      let screenScale = null;
      let screenPosition = [0, -6.5, -43]
      let rotation = [0.1, 4.7, 0];

      if (window.innerWidth < 768) {
          screenScale = [0.09, 0.09, 0.09];
      } else {
          screenScale = [0.3, 0.3, 0.3];
      }

      return [ screenScale, screenPosition, rotation ];

  }

  const [islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island
           position = {islandPosition}
           scale = {islandScale}
           rotation = {islandRotation} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Pop
      </div> */
}

{/* <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="hotpink" />
          </mesh> */}