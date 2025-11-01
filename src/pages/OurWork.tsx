import React, { useState, useEffect } from 'react';
import { Heart, Users, MapPin, DollarSign, Calendar, CheckCircle, Shield, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AnimatedCounterProps {
  target: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNum = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        current = targetNum;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  const formatNumber = (num: number) => {
    if (target.includes('M')) return `${(num / 1000000).toFixed(1)}M`;
    if (target.includes('K')) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  return <span>{prefix}{formatNumber(count)}{suffix}</span>;
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: string;
  variant?: 'bordered' | 'shadow' | 'highlight';
  borderColor?: string;
}

const FeatureCard: React.FC<CardProps> = ({ icon, title, desc, delay, variant = 'bordered', borderColor = 'border-gray-200' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  const baseClasses = `relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`;
  const variantClasses = {
    bordered: `border ${borderColor} shadow-sm hover:shadow-md`,
    shadow: 'shadow-lg hover:shadow-xl border-none',
    highlight: 'border-l-4 border-[#22c55e] shadow-md hover:shadow-lg',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`} role="article" style={{ animationDelay: delay }}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default function OurWork() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50" aria-label="Our Work Hero">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2563eb]/10 text-[#2563eb] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Our Work
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Healthcare
            <span className="block bg-gradient-to-r from-[#22c55e] to-[#2563eb] bg-clip-text text-transparent">
              Through Franchising
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is to improve access to Effective-Quality Care (EQC) and prevention services for children and their families in the developing world, using franchise healthcare models that maintain standards, scale by replication, and achieve economies of scale.
          </p>
        </div>
      </section>

      {/* Healthcare Crisis Section */}
      <section className="py-20 bg-white" aria-label="Healthcare Challenges">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#2563eb]" />
              <h2 className="text-3xl font-bold text-gray-900">The Healthcare Crisis</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Millions of children suffer and die because they do not have access to affordable, effective primary healthcare. A 2018 Lancet analysis found that “poor quality of health care [is] a major driver of excess mortality across conditions.”
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#2563eb] shadow-md animate-fade-in-up">
              <p className="text-gray-600 leading-relaxed">
                The problem is not that people lack money to pay for care; the problem is that the care they receive is ineffective and substandard. Faulty diagnoses, negligence, inappropriate care, and fake medicines are widespread. Perverse incentives pervade the healthcare industry in most countries where quality regulations are not enforced.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#22c55e] shadow-md animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-gray-600 leading-relaxed">
                For example, care providers often purchase cheap, counterfeit drugs for resale at higher profits than selling real drugs can yield. There is little to gain by going to the extra effort and expense required to deliver effective care. For healthcare to be effective, each step in the process must be done correctly.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Substandard Care"
              desc="Poor quality healthcare drives excess mortality."
              delay="0ms"
              variant="bordered"
              borderColor="border-red-200"
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Faulty Diagnoses"
              desc="Inaccurate diagnoses lead to inappropriate care."
              delay="200ms"
              variant="shadow"
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Fake Medicines"
              desc="Counterfeit drugs are sold for higher profits."
              delay="400ms"
              variant="bordered"
              borderColor="border-yellow-200"
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Perverse Incentives"
              desc="Lack of motivation to deliver effective care."
              delay="600ms"
              variant="highlight"
            />
          </div>
        </div>
      </section>

      {/* Franchise Solution Section */}
      <section className="py-20 bg-gray-50" aria-label="Our Solution">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[#22c55e]" />
              <h2 className="text-3xl font-bold text-gray-900">Our Franchise Solution</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Healthstore’s franchise system, branded as Child and Family Wellness Clinics (CFW Clinics), equips nurse practitioners to deliver Effective-Quality Care (EQC) for an average price of $4.50—about the same as a Starbucks latte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#22c55e] animate-fade-in-up">
              <p className="text-gray-600 leading-relaxed">
                Our mission is to establish and operate social business entities that use the franchise business model to enable independent franchisees to deliver EQC. Our work has resulted in about 160 clinics in three countries serving hundreds of thousands of people per year; about 12 million since 2000.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#2563eb] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-gray-600 leading-relaxed">
                CFW Clinics offer a short list of services and drugs that meet 80-90% of clients’ needs, like treatment for malaria, diarrhea, and respiratory infections. This minimizes complexity and cost, making the model scalable to reach more hard-to-access areas.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6 text-white" />}
              title="Franchise Ownership"
              desc="Kenyan franchisees, mostly women, own and operate clinics under our CFW brand, earning incomes and becoming community leaders while adhering to EQC standards."
              delay="0ms"
              variant="shadow"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="EQC Standards"
              desc="Franchisees adhere to diagnostic, treatment, and supply chain guidelines to ensure every patient receives effective care, with compliance enforced to maintain brand standards."
              delay="200ms"
              variant="highlight"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-white" />}
              title="Scalability"
              desc="Our model scales by replication, with standardized systems and economies of scale making healthcare affordable and accessible in underserved areas."
              delay="400ms"
              variant="bordered"
              borderColor="border-blue-200"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white" aria-label="Our Impact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-[#2563eb]" />
              <h2 className="text-3xl font-bold text-gray-900">Our Impact Since 2000</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Serving over 12 million people through 160 clinics in three countries, with 10 million served in Kenya alone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">$4.50</div>
              <p className="text-gray-600 text-sm">Average Clinic Visit Cost</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Users className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">
                <AnimatedCounter target="457606" />
              </div>
              <p className="text-gray-600 text-sm">People Served in 2019</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Heart className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">
                <AnimatedCounter target="286211" />
              </div>
              <p className="text-gray-600 text-sm">Free Community Outreach Visits</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">$0.36</div>
              <p className="text-gray-600 text-sm">Support Cost Per Person</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Calendar className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">8,800</div>
              <p className="text-gray-600 text-sm">Avg Annual Clients Per Clinic</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <MapPin className="w-8 h-8 mx-auto mb-3 text-[#22c55e]" />
              <div className="text-2xl font-bold mb-2 text-gray-900">$250</div>
              <p className="text-gray-600 text-sm">Monthly Support Cost Per Franchisee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50" aria-label="Our Partners">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[#2563eb]" />
              <h2 className="text-3xl font-bold text-gray-900">Our Generous Partners</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Healthstore Foundation’s work has been made possible by the support of our generous partners throughout the years.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/67098a940eac1564a10a6550/ebb8d953-95d8-48a9-8584-a40b2f96afcd/Healthstore-Sponsorship-Logos.gif?format=1000w"
              alt="Healthstore Foundation Sponsorship Logos"
              className="rounded-2xl shadow-lg border border-gray-200 max-w-full h-auto max-h-[400px] object-contain animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2563eb] text-white" aria-label="Call to Action">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Healthcare</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Support our mission to expand Effective-Quality Care to more communities across the developing world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#2563eb] hover:bg-[#22c55e]/10 px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              aria-label="Support Our Mission"
            >
              Support Our Mission
              <Heart className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-[#22c55e]/10 px-8 py-3 text-lg transition-all duration-300"
              aria-label="Learn More"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" aria-label="Footer">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-[#22c55e] mr-3" aria-hidden="true" />
            <span className="text-2xl font-bold">HealthStore Foundation</span>
          </div>
          <p className="text-gray-400 mb-6">
            Improving access to Effective-Quality Care for children and families worldwide
          </p>
          <p className="text-sm text-gray-500">© 2024 HealthStore Foundation. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
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
    </div>
  );
}
