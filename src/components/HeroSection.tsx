import { 
   useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >

         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-125"
          src="https://www.youtube.com/embed/68fVavlz3Sg?autoplay=1&mute=1&loop=1&playlist=68fVavlz3Sg&controls=0&showinfo=0&modestbranding=1"
          title="Hero Video"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />



      {/* Text Section with Clean Glass Box */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1
            ref={titleRef}
            className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            }}
          >
            Building the Future —{' '}
            <span className="text-secondary">Powering Sustainability</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            style={{
              textShadow: '1px 1px 6px rgba(0,0,0,0.8)',
            }}
          >
            From Construction to Renewable Energy — Solution Source empowers progress with
            innovation.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button
                size="lg"
                className="bg-secondary hover:bg-primary text-white font-semibold px-8 py-6 text-lg shadow-lg"
              >
                Explore Our Services
              </Button>
            </a>

            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-white w-8 h-8 drop-shadow-lg" />
      </div>
    </section>
  );
};
