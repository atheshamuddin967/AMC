import { useState, useEffect } from 'react';
import {  Heart, Users, Shield, Stethoscope, Globe, ArrowRight, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturePoint = ({ icon: Icon, title, description, delay }:any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50/50 transition-all duration-300 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const StatsBadge = ({ number, label, delay }:any) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 animate-fade-in`} style={{ animationDelay: delay }}>
      <div className="text-2xl font-bold text-blue-600 mb-1">{number}</div>
      <div className="text-sm text-gray-700 font-medium">{label}</div>
    </div>
  );
};

export default function MissionHighlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-l from-teal-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Target className="w-4 h-4" />
            Our Mission & Model
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">EQC Healthcare Model</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Improving access to Effective-Quality Care and prevention services for children and families in the developing world
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: What is EQC + Video */}
          <div className="space-y-8">
            {/* What is EQC Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900">What is EQC Healthcare?</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Our mission is to improve access to Effective-Quality Care (EQC) and prevention services for children and their families in the developing world, using franchise healthcare models that maintain standards, are geometrically scalable, and achieve economies of scale.
              </p>

              <div className="grid gap-1 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-blue-600">E</span>
                  </div>
                  <span className="font-medium text-gray-700"><strong>Effective:</strong> Evidence-based treatments with proven results</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-emerald-600">Q</span>
                  </div>
                  <span className="font-medium text-gray-700"><strong>Quality:</strong> International standards in every clinic</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-teal-600">C</span>
                  </div>
                  <span className="font-medium text-gray-700"><strong>Care:</strong> Patient-centered approach with compassion</span>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/NbonBOp8Mlc?si=Q0Pgfp625QtZeK2C"
                  title="EQC Healthcare Mission Video"
                  className="w-full h-[400px] rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-6 left-6 space-y-3">
                <StatsBadge number="E" label="Effective" delay="0.5s" />
                <StatsBadge number="Q" label="Quality" delay="0.7s" />
                <StatsBadge number="C" label="Care" delay="0.9s" />
              </div>

              {/* Achievement Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">Franchise Model</span>
              </div>
            </div>
          </div>

          {/* Right Column: Our Approach + CTA */}
          <div className="space-y-8">
            {/* Our Approach Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <FeaturePoint 
                icon={Shield}
                title="Prevention-Focused Care"
                description="Comprehensive preventive healthcare services designed specifically for children and families, addressing health issues before they become critical."
                delay={200}
              />
              
              <FeaturePoint 
                icon={Users}
                title="Franchise Healthcare Model"
                description="Scalable franchise system that maintains consistent quality standards while enabling rapid expansion across developing regions."
                delay={400}
              />
              
              <FeaturePoint 
                icon={Globe}
                title="Geometric Scalability"
                description="Our proven model enables exponential growth, reaching more communities efficiently while maintaining service quality and cost-effectiveness."
                delay={600}
              />
              
              <FeaturePoint 
                icon={Stethoscope}
                title="Economies of Scale"
                description="Leveraging bulk purchasing, standardized training, and shared resources to reduce costs and increase accessibility for underserved populations."
                delay={800}
              />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6" />
                  <span className="font-semibold">Ready to Make a Difference?</span>
                </div>
                <p className="mb-6 text-blue-100">
                  Help us expand our franchise healthcare model to reach more children and families in need. Your support enables geometric growth and economies of scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Support Our Mission
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}