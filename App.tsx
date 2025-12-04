import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GasTicker from './components/GasTicker';

const App: React.FC = () => {
  return (
    // 'min-h-screen' ensures full height. 
    // 'overflow-hidden' on desktop prevents scrolling as requested, 
    // but we allow auto on mobile via flex layout handling if content overflows.
    <div className="relative min-h-screen bg-gray-50 font-sans text-black selection:bg-acid-green selection:text-black flex flex-col">
      <Header />
      <Hero />
      <GasTicker />
    </div>
  );
};

export default App;