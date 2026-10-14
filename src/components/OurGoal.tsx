import  { useState, useEffect } from 'react';
import { Shield, Heart, Users, Globe, Award, TrendingUp } from 'lucide-react';

const GoalCard = ({ icon: Icon, title, description, gradient, delay }:any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
        isVisible ? 'animate-slide-in' : 'opacity-0'
      }`}
    >
      <div
        className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

const GoalsSection = () => {
  const majorGoals = [
    {
      icon: Shield,
      title: "Reliable Drug Supply",
      description:
        "Create a reliable supply of high-quality, low-cost essential drugs and make them available to the people who need them when and where they are needed.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: Heart,
      title: "Treat Childhood Diseases",
      description:
        "Treat childhood infectious diseases in the communities where children live, reducing congestion in the healthcare system so scarce resources can be applied to others not so easily treated.",
      gradient: "from-emerald-500 to-teal-500",
      delay: 200,
    },
    {
      icon: Users,
      title: "Reduce Under-5 Mortality",
      description:
        "Reduce under age 5 mortality rates, encouraging family planning and lower population growth rates.",
      gradient: "from-purple-500 to-pink-500",
      delay: 400,
    },
    {
      icon: Globe,
      title: "Prevent Drug Resistance",
      description:
        "Discourage the development of drug-resistant microbes by the provision and appropriate use of adequate supplies of effective drugs.",
      gradient: "from-orange-500 to-red-500",
      delay: 600,
    },
    {
      icon: Award,
      title: "Improve Community Health",
      description:
        "Improve community health through educational and prevention activities to promote long-term wellness.",
      gradient: "from-indigo-500 to-blue-500",
      delay: 800,
    },
  ];


  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Our Goals</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving transformative healthcare access through our micro-franchise model and key objectives
          </p>
        </div>

        {/* Major Goals */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major Goals of CFW Network
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorGoals.map((goal, index) => (
              <GoalCard
                key={index}
                icon={goal.icon}
                title={goal.title}
                description={goal.description}
                gradient={goal.gradient}
                delay={goal.delay}
              />
            ))}
          </div>
        </div>

        {/* Micro-Franchise Business Model */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Micro-Franchise Business Model
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
                <p className="text-gray-600 leading-relaxed text-sm">
                  The micro-franchise business model engages the forces and participants in the marketplace to incent health care providers to follow good practices for the handling and distribution of essential drugs. Franchisees enjoy the benefits of owning a valuable profit-making business but may retain it only by compliance with CFW drug handling and administration regulations. It is in their own self-interest for franchisees to follow the regulations. HealthStore believes that franchisees acting in their own self-interest will achieve more than centralized command-and-control bureaucracies can.
                </p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
                <p className="text-gray-600 leading-relaxed text-sm">
                  The franchise model has delivered a wide variety of high quality, low cost goods and services throughout the world—including medicine—and has proved to be an effective method of mass distribution across a wide diversity of economic and cultural conditions.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
              <p className="text-gray-600 leading-relaxed text-sm">
                Franchisees are entitled to receive a supply of high quality, low cost drugs, management support, training, and other valuable benefits from HealthStore. But, if the franchisee fails to comply with rules and reporting requirements, the franchise may be revoked. The system is designed to make the long-term benefits of retaining the franchise worth too much to risk losing by breaking the rules. The rules are calculated to assure good drug handling and administration practices.
              </p>
            </div>
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default GoalsSection;