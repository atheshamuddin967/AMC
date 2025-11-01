import  { useState, useEffect } from 'react';
import { Target, Users, Globe, Shield, Heart, Award, CheckCircle, User, DollarSign, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoalsSection from '@/components/OurGoal';

const AnimatedCounter = ({ target, prefix = "", suffix = "" }:any) => {
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

  const formatNumber = (num:number) => {
    if (target.includes('M')) return `${(num / 1000000).toFixed(1)}M`;
    if (target.includes('K')) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  return <span>{prefix}{formatNumber(count)}{suffix}</span>;
};

const TeamMember = ({ name, title, description, delay }:any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-blue-600 font-medium text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};



export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Heart className="w-4 h-4" />
            About HealthStore Foundation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Healthcare 
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 2000, we've been pioneering franchise-based healthcare delivery to bring Effective-Quality Care to underserved communities across the developing world.
          </p>
        </div>
      </section>
{/* Mission Section */}
  <section className="py-16 bg-white relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border-l-4 border-blue-500 mx-auto max-w-3xl animate-fade-in-up">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Our mission is to improve access to Effective-Quality Care (EQC) and prevention services for children and their families in the developing world, using franchise healthcare models that maintain standards, are geometrically scalable, and achieve economies of scale.
          </p>
        </div>
      </div>
  
      <iframe
                  src="https://www.youtube.com/embed/NbonBOp8Mlc?si=Q0Pgfp625QtZeK2C"
                  title="EQC Healthcare Mission Video"
                  className="w-full h-[600px] rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
    </div>
  </section>

  {/* Our Model Section */}
  <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-teal-600" />
          <h2 className="text-3xl font-bold text-gray-900">Our Model</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          The HealthStore Foundation has combined established micro-enterprise principles with proven franchise business practices to create a micro-franchise business model called CFW—Child and Family Wellness.
        </p>
      </div>

      <div className="space-y-12">
        {/* How We Do It */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Do It</h3>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
                <p className="text-gray-600 leading-relaxed">
                  CFW franchisees operate small CFW drug shops or clinics strategically located to improve access to essential drugs. CFW clinics and shops enable trained health workers to operate their own businesses treating the diseases that cause 70-90% of illness and death in their communities while following HealthStore drug handling and distribution regulations calculated to ensure good practice.
                </p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
                <p className="text-gray-600 leading-relaxed">
                  A short-list of inexpensive generic drugs can effectively treat a large percentage of the children suffering and dying from infectious diseases in the developing world. Too often, people do not have access to these drugs. HealthStore seeks to improve access to these essential drugs using its micro-franchise business model.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/67098a940eac1564a10a6550/e1e4edee-7378-4b98-8029-b5e381be33a3/bullseyemodel.jpg"
                alt="CFW clinic in a community setting"
                className="rounded-2xl shadow-lg border border-gray-100 w-full h-80 object-cover animate-fade-in-up"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
              <p className="text-gray-600 leading-relaxed">
                The micro-franchise business model engages the forces and participants in the marketplace to incent health care providers to follow good practices for the handling and distribution of essential drugs. Franchisees enjoy the benefits of owning a valuable profit-making business but may retain it only by compliance with CFW drug handling and administration regulations. It is in their own self-interest for franchisees to follow the regulations. HealthStore believes that franchisees acting in their own self-interest will achieve more than centralized command-and-control bureaucracies can.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
              <p className="text-gray-600 leading-relaxed">
                The franchise model has delivered a wide variety of high quality, low cost goods and services throughout the world—including medicine—and has proved to be an effective method of mass distribution across a wide diversity of economic and cultural conditions. The CFW franchise operating system includes an operating manual complete with policies, procedures and forms constituting a turn-key management system which, if followed, enables franchisees to conduct business and provide necessary compliance reports to The HealthStore Foundation®.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in md:col-span-2">
              <p className="text-gray-600 leading-relaxed">
                Franchisees are entitled to receive a supply of high quality, low cost drugs, management support, training and other valuable benefits from HealthStore. But, if the franchisee fails to comply with rules and reporting requirements, the franchise may be revoked. The system is designed to make the long term benefits of retaining the franchise worth too much to risk losing by breaking the rules. The rules are calculated to assure good drug handing and administration practices.
              </p>
            </div>
          </div>
        </div>

        {/* CFW Franchise System */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-xl">CFW Franchise System</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Proper procedures for the handling of drugs and the diagnosis and treatment of patients.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Regular reports along with routine and surprise inspections and investigations to test and maintain compliance with franchise regulations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Management and clinical training in the use of the franchise system.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Development of professional culture by promotion of inter-disciplinary contact and continuing education.</span>
                </div>
              </div>
            </div>
            <div>
              
<img src="https://images.unsplash.com/photo-1584515933487-779824d29309" 
                alt="Health worker educating a community group"
                className="rounded-2xl shadow-lg border border-gray-100 w-full h-80 object-cover animate-fade-in-up"
              />
            </div>
          </div>
        </div>

    
      </div>
    </div>
  </section>

<GoalsSection/>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">2019 Impact Data (Pre-COVID)</h2>
            <p className="text-blue-100 text-lg">Real numbers showing our community impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-2">$4.50</div>
              <p className="text-blue-100 text-sm">Average Clinic Visit Cost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-green-300" />
              <div className="text-2xl font-bold mb-2">
                <AnimatedCounter target="457606" />
              </div>
              <p className="text-blue-100 text-sm">People Served Annually</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-3 text-pink-300" />
              <div className="text-2xl font-bold mb-2">
                <AnimatedCounter target="286211" />
              </div>
              <p className="text-blue-100 text-sm">Free Community Outreach Visits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <div className="text-2xl font-bold mb-2">$0.36</div>
              <p className="text-blue-100 text-sm">Support Cost Per Person</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-orange-300" />
              <div className="text-2xl font-bold mb-2">8,800</div>
              <p className="text-blue-100 text-sm">Average Annual Clients Per Clinic</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-teal-300" />
              <div className="text-2xl font-bold mb-2">$250</div>
              <p className="text-blue-100 text-sm">Monthly Support Cost Per Franchisee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
   {/* Team Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Users className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        </div>
        <p className="text-xl text-gray-600">
          Meet the dedicated team driving healthcare innovation across Africa
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamMember
          name="Scott Hillstrom"
          title="Co-Founder & Chair"
          description="Scott is the chair and co-founder of The HealthStore Foundation. Since 1996, he investigated why 10 million children die annually in the developing world while life-saving medicine costs less than a cup of coffee. In 2000, he launched the first CFW franchise clinics in Kenya, serving 5,000,000 Kenyans. He co-founded a clinic network in Ghana, now part of Sanford Health’s world clinics, and established a CFW network in Rwanda, later transferred to One Family Health. Previously, he co-founded Rehab One, a U.S. clinic network, and has been an investor and advisor for 35 years. Recognized as the 2013 Entrepreneur of the Year by the International Franchising Association, Scott holds a JD from Mitchell Hamline School of Law and lives in Seattle."
          delay={0}
        />
        <TeamMember
          name="Eric McCarthey"
          title="Chief Executive Officer"
          description="Eric serves as CEO of The HealthStore Foundation. A retired Coca-Cola senior executive with 30 years of experience, he led global business units, strategic planning, and market development. He is a leadership fellow with NACD, a board member of Interra International, Saulsbury Industries, and Commerce Science Corporation, and CEO of Shelty-Viking Capital Group. A published author and speaker on leadership, Eric holds an EMBA from USC Marshall School of Business and a BS in Biology from the University of Colorado, Boulder. He lives in Roswell, Georgia."
          delay={200}
        />
        <TeamMember
          name="Dr. Walter Obita"
          title="CEO, Healthstore East Africa"
          description="Dr. Walter Obita is COO of Healthstore East Africa and managing director of Sustainable Healthcare Foundation, overseeing CFW clinics in Kenya. With extensive healthcare experience, he has served as a medical doctor, district medical officer, and manager at various hospitals and consulting firms. He is a board member of Fountain Health Care and AfriHealth Consulting. Dr. Obita holds an MBCh.B from the University of Nairobi and an MBA in Strategic Management from Catholic University of Eastern Africa. He lives in Nairobi, Kenya."
          delay={400}
        />
        <TeamMember
          name="Abraham O. Were"
          title="Franchise Development Manager, Africa"
          description="Abraham joined HealthStore in 2007 as a malaria project field officer and now oversees quality assurance and field operations as Franchise Development Manager. With 15 years of experience in pharmacy, project management, and community health, he is a registered pharmaceutical practitioner and member of the Kenya Healthcare Federation. Abraham holds a diploma in pharmaceutical technology, a diploma in project management, and degrees in community health from Great Lakes University. He lives in Kisumu, Kenya."
          delay={600}
        />
        <TeamMember
          name="Esther Nderitu"
          title="Finance Director, SHF"
          description="Esther has led the finance department of Sustainable Healthcare Foundation in Nairobi since 2012, with seven years of progressive responsibilities. She is a key member of the senior management team, ensuring financial oversight for the nonprofit CFW franchisor. Esther lives in Nairobi, Kenya."
          delay={800}
        />
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-gold-500" />
            <h4 className="font-bold text-gray-900 text-lg mb-2">Board of Directors</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Executive Committee:</strong><br />
              Scott Hillstrom, Co-founder and Chairman, Healthstore Foundation<br />
              Michael Seid, Director and Founder, Michael H. Seid & Associates, LLC<br />
              Eric McCarthey, Managing Partner, Crestlight Ventures & Productions<br />
              <br />
              <strong>Board Members:</strong><br />
              Mark Benson, President, APCO Insight<br />
              Kaye Kirsch, Consultant<br />
              Eva Ombaka, Coordinator, Ecumenical Pharmaceutical Network (Ret.)<br />
              Colin Owen, Founder and CEO, DHY Manufacturing (Ret.)<br />
              Mark Zdeblick, Co-founder and CTO, Proteus
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Code of Ethics */}
     {/* Code of Ethics */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Shield className="w-8 h-8 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">Code of Ethics</h2>
      </div>
      <p className="text-xl text-gray-600">
        Our guiding principles that shape every decision we make
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white font-bold text-sm">1</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We are focused exclusively on our mission and don’t pursue anything that does not serve it.
          </p>
        </div>
        <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white font-bold text-sm">2</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To ensure that we are efficient, effective, and financially responsible, we test our actions and measure our success by how well we achieve specific goals central to our mission and not by how well we raise funds or build our public image.
          </p>
        </div>
        <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white font-bold text-sm">3</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To ensure that our patients come first, we subordinate our own organizational and personal interests to the interests and well-being of the patients we serve.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white font-bold text-sm">4</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We strictly adhere to the principles of integrity and trust, always respecting longstanding principles of sound governance by an actively engaged board of directors.
          </p>
        </div>
        <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-2xl">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white font-bold text-sm">5</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We believe that resources needed to achieve our mission are abundant; we work with partners and share what we know in common cause with others pursuing the same mission.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Help us expand access to Effective-Quality Care for children and families across the developing world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Support Our Work
              <Heart className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}