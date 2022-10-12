import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Environment} from '@react-three/drei';
import Lights from './components/Lights';
import Outline from './components/Outline';

const App = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas  linear dpr={[1, 2]} gl={{ }} camera={{ fov: 45, position: [0, 0, 5] }}>
        <color attach="background" args={['#C6C1B9']} />
        <Lights/>
        <OrbitControls/>
        <Environment preset={'night'}/>
        <Outline/>
      </Canvas>
    </Suspense>
  );
}

export default App;
