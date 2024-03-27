import { React, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.09, 0.09, 0.09];
    } else {
      screenScale = [0.25, 0.25, 0.25];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

      <Canvas
        className={`w-full h-screen relative ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} />
          <Plane 
          scale={planeScale}
          position={planePosition}
          />
          <Sky isRotating={isRotating} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
          />
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

{
  /* <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="hotpink" />
          </mesh> */
}

// TODO

// rewrite about and projects sections. MOST IMPORTNAT
// fix island currentStages to be larger. 








