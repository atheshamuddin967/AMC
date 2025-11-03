import 
 { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(statsRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,  
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el:any) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const stats = [
    { number: "120+", label: "Renewable Installations" },
    { number: "90%", label: "Energy Efficiency" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-r from-background2 to-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} ref={addToRefs} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
