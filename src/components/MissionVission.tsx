import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MissionVision = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(missionRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from(visionRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card ref={missionRef} className="border-none shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="bg-secondary text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Users className="w-10 h-10" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 bg-white">
              <p className="text-lg text-gray-700">
                Collaborating with partners to build sustainable community projects that enhance quality of life and drive economic growth through innovative construction and energy solutions.
              </p>
            </CardContent>
          </Card>

          <Card ref={visionRef} className="border-none shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Leaf className="w-10 h-10" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 bg-white">
              <p className="text-lg text-gray-700">
                Design for the future, build for sustainability — creating innovative solutions that stand the test of time while protecting our environment for generations to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};