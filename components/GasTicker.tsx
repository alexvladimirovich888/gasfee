import React, { useState, useEffect } from 'react';

const GasTicker: React.FC = () => {
  const [fakeGas, setFakeGas] = useState<string>("98.53");

  useEffect(() => {
    // Simulate fluctuating gas prices on "the other chain"
    const interval = setInterval(() => {
      const randomPrice = (Math.random() * (150 - 40) + 40).toFixed(2);
      setFakeGas(randomPrice);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white h-12 flex items-center justify-center z-50 overflow-hidden border-t-4 border-acid-green">
      <div className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-widest">
        <span className="opacity-70">Current Gas Fee on the other chain:</span>
        <div className="group relative cursor-help inline-flex items-center gap-2">
            <span className="text-red-500 line-through decoration-2 decoration-red-500 group-hover:animate-shake inline-block transition-all duration-75">
                ${fakeGas}
            </span>
            <span className="text-acid-green text-xl ml-2 animate-pulse-fast">
                $0.00
            </span>
        </div>
      </div>
    </div>
  );
};

export default GasTicker;