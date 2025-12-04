import React from 'react';
import { XIcon, TelegramIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-multiply pointer-events-none">
      {/* Left: Logo Text */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black bg-white">
           <img 
             src="https://i.postimg.cc/Zq4fx4m2/Gemini-Generated-Image-tg75jitg75jitg75.png" 
             alt="$NOGAS Logo" 
             className="w-full h-full object-cover"
           />
        </div>
        <span className="font-black text-2xl tracking-tighter">$NOGAS</span>
      </div>

      {/* Right: Socials */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <a 
          href="#" 
          className="group transition-transform hover:scale-110 duration-200"
          aria-label="X (Twitter)"
        >
          <XIcon className="w-6 h-6 text-black group-hover:text-acid-green-hover transition-colors" />
        </a>
        
        <a 
          href="#" 
          className="group transition-transform hover:scale-110 duration-200"
          aria-label="Telegram"
        >
          <TelegramIcon className="w-6 h-6 text-black group-hover:text-acid-green-hover transition-colors" />
        </a>

        <a 
          href="https://pump.fun" 
          target="_blank"
          rel="noreferrer"
          className="group transition-transform hover:scale-110 duration-200 w-8 h-8 rounded-full overflow-hidden border border-transparent hover:border-acid-green"
          aria-label="Pump.fun"
        >
          <img 
            src="https://i.postimg.cc/j56WKrBk/ADS-2025-12-03T201034-818.png" 
            alt="Pump.fun" 
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;