import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Zap, Sun, Camera, Trees, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ServicesOverview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
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

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Construction & Build Solutions",
      description: "From blueprint to launch - new builds and renovations for commercial and residential projects",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Electrical & Mechanical Works",
      description: "Complete electrical and mechanical installations with modern technology integration",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Green Energy Solutions",
      description: "Solar, HVAC, and renewable energy systems for sustainable operations",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Low Current Systems",
      description: "CCTV, Access Control, Fire Alarm, and intelligent security solutions",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80"
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Landscape Services",
      description: "Design, development, maintenance, and multi-location management",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Building Management Systems",
      description: "Centralized control and monitoring for smart buildings",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">Comprehensive solutions for every project need</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} ref={addToRefs} className="bg-slate-800 border-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};