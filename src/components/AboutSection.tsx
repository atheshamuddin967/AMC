import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lightbulb, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { Images } from '@/assets/images';

export const AboutSection = () => {
  const bounceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bounceRef.current) {
      gsap.to(bounceRef.current, {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">ABOUT US</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* About with Double Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center relative">
          {/* Left Image Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={Images.about1}
              alt="Main Office"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Overlay Bouncing Image */}
            <div
              ref={bounceRef}
              className="absolute -right-10 bottom-[0] w-1/2 h-1/2 rounded-xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src={Images.about2}
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">WHO ARE WE</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Empowering community banks & financial facilities to compete against the big banks
              with proven expertise and innovative thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No matter the size of your financial institution, we work with you to create memorable,
              cohesive, full-service retail branch environments that make an impression. The spaces and
              products we create are future-facing and dynamic: designed to serve your community today
              and grow with it tomorrow.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">OUR GOALS & COLLABORATIVE PROCESS</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We design sustainable, high-impact banking branches and headquarters tailored to your
            needs—helping you better serve your employees, customers, and communities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
