import React from 'react';
import Navbar from './Navbar';
import Desc from './desc';
import About from './About';
import Projects from './Projects';
import Particles from './Background';

const App = () => {
  return (
    <>
      <img src="noise.png" alt="" className="noise"/>
      <div className='backgroundP'>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        </div>
      </div>
      <Navbar/>
      <Desc/>
      <About/>
    </>
  );
}

export default App;
