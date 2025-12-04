import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row h-[calc(100vh-3rem)] w-full pt-20 md:pt-0">
      
      {/* Left Half: Visual & Main Title */}
      <section className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 border-b md:border-b-0 md:border-r border-gray-300 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="z-10 flex flex-col gap-6 md:gap-8">
            <div className="relative w-72 h-72 md:w-[30rem] md:h-[30rem] -ml-6 md:-ml-10 mb-2">
                <img 
                    src="https://i.postimg.cc/Zq4fx4m2/Gemini-Generated-Image-tg75jitg75jitg75.png" 
                    alt="$NOGAS Logo"
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-black uppercase relative z-20">
              Stop Paying <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Rent</span> To <br/>
              The Chain.
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-gray-600 max-w-md leading-relaxed relative z-20">
              Finally, a meme you can afford to buy. Your trading hobby just became cheaper than complaining about Gas on X.
            </p>
        </div>
      </section>

      {/* Right Half: Mission & CTA */}
      <section className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-gray-50 relative">
        <div className="max-w-xl flex flex-col gap-8 items-start">
            
            <div className="space-y-4">
                <h2 className="text-xs md:text-sm font-black tracking-[0.3em] uppercase text-acid-green-hover border-b-2 border-acid-green inline-block pb-1">
                    The Mission
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                    0% Tax. <br/>
                    100% Fair Launch.
                </h3>
            </div>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                We don't fix inflation. We just don't steal your money for network fees like those other guys. 
                <br/><br/>
                <span className="font-black">$NOGAS</span>. Freedom to trade. Get rid of the Gas anxiety.
            </p>

            <button className="group relative w-full md:w-auto px-8 py-5 bg-acid-green text-black font-black text-lg md:text-xl uppercase tracking-wider overflow-hidden transition-all hover:bg-black hover:text-acid-green shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border-2 border-black">
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Fuel Up Now 
                    <span className="text-xs bg-black text-white px-2 py-0.5 rounded-sm group-hover:bg-acid-green group-hover:text-black transition-colors">
                        (No Gas Tax)
                    </span>
                </span>
            </button>
        </div>
      </section>

    </main>
  );
};

export default Hero;