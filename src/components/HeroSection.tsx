import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const sunRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Sun animation – ab upar se aayega
      tl.fromTo(
        sunRef.current,
        { x: -300, y: -200, opacity: 0, filter: 'brightness(0.3)' },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2.5,
          filter: 'brightness(1.5)',
          ease: 'power2.out',
        }
      );

      // Sun pulse
      gsap.to(sunRef.current, {
        filter: 'brightness(2)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Text animations
      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 }, '-=1.5')
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 1 }, '-=0.8')
        .from(buttonsRef.current, { y: 20, opacity: 0, duration: 1 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682148012184-f51381dd28fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Sun – Ab Upar Left Mein */}
      <div
        ref={sunRef}
        className="absolute top-8 left-8 md:top-12 md:left-12 w-56 h-56 md:w-64 md:h-64 
                   rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 
                   blur-3xl opacity-80 shadow-[0_0_120px_40px_rgba(255,200,0,0.4)]"
      ></div>

      {/* Text Section with Clean Glass Box */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            }}
          >
            Building the Future —{' '}
            <span className="text-yellow-400">Powering Sustainability</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            style={{
              textShadow: '1px 1px 6px rgba(0,0,0,0.8)',
            }}
          >
            From Construction to Renewable Energy — AMC empowers progress with
            innovation.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-8 py-6 text-lg shadow-lg"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
            >
              Explore Our Services <ChevronRight className="ml-2" />
            </Button>

            <Button
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg shadow-lg"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
            >
              View Projects
            </Button>
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