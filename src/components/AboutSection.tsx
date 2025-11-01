import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lightbulb, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          invalidateOnRefresh: true,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          invalidateOnRefresh: true,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%',
          invalidateOnRefresh: true,
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About AMC</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* About with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div ref={imageRef} className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" 
              alt="AMC Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>

          <div ref={contentRef}>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AMC provides comprehensive solutions for banking, commercial, and industrial spaces. We offer a full range of design, construction, and technical services — from building infrastructure to renewable energy, low current systems, and intelligent building management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team specializes in listening and then turning your goals into inviting, fully functional retail and commercial spaces. We combine creativity with practicality to deliver designs that are aesthetic, efficient, and aligned with your brand identity.
            </p>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card ref={addToRefs} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" 
                alt="Experience"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardHeader className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Decades of proven expertise in construction and sustainable solutions
            </CardContent>
          </Card>

          <Card ref={addToRefs} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" 
                alt="Innovation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardHeader className="text-center">
              <Lightbulb className="w-16 h-16 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl">Innovation</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Cutting-edge technology and smart systems integration
            </CardContent>
          </Card>

          <Card ref={addToRefs} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" 
                alt="Sustainability"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardHeader className="text-center">
              <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Sustainability</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Committed to environmental responsibility and green energy
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};