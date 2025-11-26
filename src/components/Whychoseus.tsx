import  { useEffect, useRef } from 'react';
import { Award, Shield, Clock, Leaf, Users, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
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

  const reasons = [
    { icon: <Award />, title: "Trusted Expertise", desc: "Years of proven excellence" },
    { icon: <Shield />, title: "Quality & Safety", desc: "Uncompromising standards" },
    { icon: <Clock />, title: "On-Time Delivery", desc: "Meeting every deadline" },
    { icon: <Leaf />, title: "Sustainability", desc: "Eco-friendly solutions" },
    { icon: <Users />, title: "Local Partnerships", desc: "Strong community ties" },
    { icon: <Lightbulb />, title: "Innovation", desc: "Latest technology" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Solution Source</h2>
          <p className="text-xl text-gray-600">Excellence in every aspect</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} ref={addToRefs} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};