import React, { useEffect, useRef } from 'react';
import { MapPin, Lightbulb, Settings, Award, Users, Hammer, Building2, Shield, Zap, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  const steps = [
    { title: "Research", icon: <MapPin /> },
    { title: "Design", icon: <Lightbulb /> },
    { title: "Planning", icon: <Settings /> },
    { title: "Feasibility Study", icon: <Award /> },
    { title: "Bidding", icon: <Users /> },
    { title: "Execution", icon: <Hammer /> },
    { title: "Architecture", icon: <Building2 /> },
    { title: "Permitting", icon: <Shield /> },
    { title: "Interior", icon: <Zap /> },
    { title: "Post-Launch", icon: <Clock /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">From concept to completion</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="flex gap-4 pb-8 justify-center flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                ref={addToRefs}
                className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-4 hover:scale-110 transition-transform cursor-pointer"
              >
                {step.icon}
              </div>
              <p className="text-center font-semibold text-slate-900 text-sm">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
