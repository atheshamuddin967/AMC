import  { useState, useEffect } from 'react';
import { Users, Calendar, MapPin, Heart, TrendingUp, Award, Globe, Stethoscope } from 'lucide-react';

const StatCard = ({ icon: Icon, number, label, description, gradient, delay }:any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate the number counting up
    const target = parseInt(number.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedNumber(Math.floor(current));
    }, duration / steps);

    return () => clearInterval(timer);
  }, [number]);

  const formatNumber = (num:number) => {
    if (number.includes('M+')) return `${(num / 1000000).toFixed(1)}M+`;
    if (number.includes('+')) return `${num}+`;
    return num.toString();
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: delay }}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Animated Background Pattern */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full opacity-50 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-pink-50 to-purple-50 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-10 transition-all duration-700" />
      
      {/* Icon Container */}
      <div className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Number */}
      <div className="relative mb-3">
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          {formatNumber(animatedNumber)}
        </h3>
        <div className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${gradient} rounded-full transition-all duration-500 w-0 group-hover:w-full`} />
      </div>
      
      {/* Label */}
      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
        {label}
      </h4>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
    </div>
  );
};

export default function ImpactStatsGrid() {
  const stats = [
    {
      icon: Users,
      number: "4000000+",
      label: "People Served",
      description: "Lives transformed through accessible healthcare across communities worldwide",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Calendar,
      number: "20+",
      label: "Years Experience",
      description: "Two decades of dedicated service and continuous innovation in healthcare delivery",
      gradient: "from-emerald-500 to-teal-500",
      delay: "200ms"
    },
    {
      icon: MapPin,
      number: "150+",
      label: "Franchise Clinics",
      description: "Network of clinics across Kenya & Rwanda bringing care closer to communities",
      gradient: "from-purple-500 to-pink-500",
      delay: "400ms"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Patient Satisfaction",
      description: "Exceptional care quality recognized by patients and healthcare professionals",
      gradient: "from-rose-500 to-orange-500",
      delay: "600ms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-teal-100/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Impact & Growth
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Global Impact</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming healthcare accessibility across Africa with innovative solutions and unwavering commitment to quality care
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              gradient={stat.gradient}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recognition & Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2">WHO Partnership</div>
                <p className="text-gray-600 text-sm">Collaborating with World Health Organization for better healthcare standards</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <Stethoscope className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2">Medical Excellence</div>
                <p className="text-gray-600 text-sm">Certified healthcare professionals providing world-class medical care</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <Heart className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2">Community Impact</div>
                <p className="text-gray-600 text-sm">Empowering local communities through sustainable healthcare solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}