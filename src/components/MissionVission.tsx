import { useEffect, useRef } from 'react';
import { Users, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MissionVision = () => {
  const sectionRef = useRef(null);
  const floatingImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating (bouncing) image animation
      gsap.to(floatingImgRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Fade-in animation for section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,123,255,0.08),transparent)]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Our Mission & Vision
          </h2>

          <div className="space-y-10">
            {/* Mission */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/10 p-3 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower communities and organizations through sustainable, smart, and efficient
                construction and engineering practices — improving lives while preserving the
                planet.
              </p>
            </div>

            {/* Vision */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary/10 p-3 rounded-2xl group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To lead innovation in sustainable infrastructure — creating future-ready spaces that
                harmonize with nature and drive progress for generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - DOUBLE IMAGE DESIGN */}
        <div className="relative w-full flex justify-center">
          {/* Base image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[85%]">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80"
              alt="Innovation"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>

          {/* Floating overlay image */}
          <div
            ref={floatingImgRef}
            className="absolute -bottom-10 -right-10 w-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Sustainability"
              className="w-full h-[280px] object-cover rounded-3xl"
            />
          </div>

          {/* Glow accent */}
          <div className="absolute -bottom-16 -right-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
