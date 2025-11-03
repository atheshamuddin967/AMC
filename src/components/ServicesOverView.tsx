'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Zap, Sun, Camera, Trees, Settings, MapPin } from 'lucide-react';
import { Images } from '@/assets/images';

const services = [
  {
    id: 'green-energy',
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: "Green Energy Solutions",
    description: `AMC is providing a wide range of activities in the field of thermostatics, renewable energy, and energy efficiency. 
We focus on implementing modern concepts of HVAC systems for various types of facilities.

Furthermore, we offer comprehensive consulting services in the field of energy efficiency. 
Our business model is built on holistic, interdisciplinary thinking and international expertise to achieve the highest standards in consulting.

Design and Implementation of Renewable Energy Systems:
Green Energy Solutions designs and implements complete heating, cooling, air conditioning, solar, and gaseous systems 
for all purposes and types of residential and social facilities, with maximum utilization of renewable energy sources. 
All our realized systems in KSA — based on heat pumps, solar energy, and biomass — operate with maximum performance and efficiency for many years.

Moreover, our engineering personnel specialize in mechanical and electrical engineering, 
with a strong emphasis on energy efficiency and international experience in HVAC.`,
    image: Images.solar,
  },
  {
    id: 'construction',
    icon: <Building2 className="w-10 h-10 text-primary" />,
    title: "Construction & Build Solutions",
    description: `AMC provides comprehensive construction and building services that cover every stage 
from concept to completion. We specialize in the execution of civil, structural, and architectural works 
for residential, commercial, and industrial projects.

Our team ensures that all projects are carried out with the highest standards of quality, safety, and efficiency, 
integrating innovative technologies and sustainable practices. We focus on building environments that are not only 
functional and durable but also visually appealing and aligned with client goals.

Our construction and build solutions include:
• Project planning and management  
• Civil and structural construction  
• Architectural finishing and interior works  
• Infrastructure development  
• Quality assurance and control  
• Safety compliance and sustainability integration`,
    image: Images.construction,
  },
    {
    id: 'infrastructure',
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Infrastructure Development",
    description: `AMC provides integrated infrastructure development services that form the backbone of modern communities 
and industrial operations. Our expertise covers planning, design, and execution of essential systems that ensure 
reliable connectivity, sustainability, and long-term value.

We specialize in delivering infrastructure projects with precision and efficiency, 
ensuring compliance with international standards and environmental guidelines. 
Our focus is on developing durable, future-ready systems that support growing urban and industrial demands.

Our Infrastructure Development services include:
• Roads and highways construction  
• Water supply and drainage systems  
• Sewage and waste management solutions  
• Power and utility networks  
• Telecommunication and data infrastructure  
• Smart city and sustainable infrastructure initiatives`,
    image: Images.infra,
  },
  {
    id: 'electrical',
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Electrical & Mechanical Works",
    description: `AMC delivers a full spectrum of Electrical and Mechanical services designed to meet the demands 
of modern infrastructure. We provide complete design, installation, testing, and commissioning solutions 
for power distribution, lighting, HVAC, and control systems.

Our team of experienced engineers ensures all systems are installed safely and operate efficiently, 
integrating cutting-edge technologies that reduce energy consumption and operational costs. 
We prioritize reliability, safety, and long-term performance in every project.

Our Electrical & Mechanical services include:
• Power distribution systems  
• Lighting and illumination design  
• HVAC design and installation  
• Control and automation systems  
• Generator and UPS systems  
• Maintenance and system upgrades`,
    image: Images.mep,
  },
  {
    id: 'low-current',
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Low Current Systems",
    description: `AMC offers a wide range of Low Current Systems, Solutions, and Services 
that meet customer vision, strategies, business objectives, safety, and security needs.

Our solutions help customers capitalize on market trends, ensuring a safe, secure, and comfortable environment. 
We provide ease of use and seamless interactive operation through complex integrated platforms that deliver 
high-level connectivity among multiple systems. This ensures competitiveness by utilizing advanced low current 
technologies through increased efficiency and reduced costs.

Low Current Services include:
• LAN and WLAN
• Telephonic Systems
• Closed Circuit TV (CCTV)
• Access Control Systems (ACS)
• Intrusion Detection Systems (IDS)
• Fire Alarm Systems
• Public Address Systems (PAS/PAGA)
• SMATV / CATV / IPTV
• Home Automation`,
    image: Images.low,
  },
  {
    id: 'landscape',
    icon: <Trees className="w-10 h-10 text-primary" />,
    title: "Landscape Services",
    description: `AMC provides professional landscape design and maintenance services that transform outdoor spaces 
into beautiful, sustainable environments. Our approach integrates nature with functionality to create landscapes 
that enhance aesthetics, comfort, and environmental balance.

We handle every aspect of landscaping — from design and planning to execution and upkeep — ensuring long-lasting 
and eco-friendly results. Whether for residential, commercial, or public spaces, our designs blend innovation with 
sustainability to create spaces that inspire and endure.

Our Landscape Services include:
• Landscape design and planning  
• Irrigation and water management systems  
• Hardscape and softscape works  
• Garden and lawn development  
• Outdoor lighting and ambiance setup  
• Seasonal maintenance and plant care`,
    image: Images.land,
  },
  {
    id: 'bms',
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "Building Management Systems (BMS)",
    description: `AMC specializes in the design, installation, and integration of advanced Building Management Systems 
that optimize performance, energy efficiency, and occupant comfort. Our BMS solutions provide centralized control 
of HVAC, lighting, power, security, and other building systems through intelligent automation.

With AMC’s expertise, facilities can achieve improved operational efficiency, reduced energy costs, and enhanced safety. 
Our solutions are scalable and compatible with various technologies, allowing seamless management and monitoring.

Our BMS Services include:
• Centralized monitoring and control  
• Energy management and optimization  
• HVAC and lighting automation  
• Fire and safety system integration  
• Security and access control integration  
• Predictive maintenance and data analytics`,
    image: Images.bms,
  },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const activeService = services.find(s => s.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-background2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your vision — from concept to completion.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
<TabsList
  className="
    grid 
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
    gap-3 sm:gap-4
    p-0 bg-transparent
    h-auto
  "
>
  {services.map((service, index) => {
    // only center if it's the last one AND total items % columns !== 0
    const isLastExtra = index === services.length - 1 && services.length % 6 !== 0;

    return (
      <TabsTrigger
        key={service.id}
        value={service.id}
        className={`
          flex flex-col items-center justify-between
          p-3 sm:p-4 md:p-5
          rounded-xl
          bg-card border-2 border-transparent
          data-[state=active]:border-white data-[state=active]:border-2
          data-[state=active]:bg-white/10
          hover:bg-white/5 hover:border-white/30
          transition-all duration-300 ease-in-out
          group
          min-h-[140px] sm:min-h-[150px] md:min-h-[160px]
          h-full text-center
          ${activeTab === service.id ? 'ring-2 ring-white/20 ring-offset-2 ring-offset-background2' : ''}
          ${isLastExtra ? 'col-span-full flex justify-center' : ''}
        `}
      >
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="mb-2 text-muted-foreground group-data-[state=active]:text-white transition-all duration-300 scale-100 group-data-[state=active]:scale-110">
            {service.icon}
          </div>
          <span
            className="
              text-[11px] sm:text-sm md:text-base
              font-semibold text-center
              group-data-[state=active]:text-white
              line-clamp-2
              break-words whitespace-normal
              transition-all duration-300
            "
          >
            {service.title}
          </span>
        </div>
      </TabsTrigger>
    );
  })}
</TabsList>



          {/* Active Tab Content */}
          <div className={`
            mt-10 md:mt-14
            transition-all duration-500 ease-in-out
            ${isTransitioning ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
          `}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 order-2 lg:order-1 animate-in fade-in-30 slide-in-from-left-10 duration-500">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {activeService?.title}
                </h3>

                <div className="space-y-6 text-white/90">
                  {activeService?.description.split('\n\n').map((block, i) => {
                    const lines = block.split('\n');
                    const hasBullets = lines.some(line => line.includes('•'));

                    if (hasBullets) {
                      return (
                        <ul key={i} className="space-y-2 mt-4">
                          {lines.map((line, j) => {
                            const trimmed = line.trim();
                            if (trimmed.startsWith('•') || trimmed.includes('•')) {
                              return (
                                <li key={j} className="flex items-start gap-3 text-base sm:text-lg">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span className="leading-relaxed">
                                    {trimmed.replace('•', '').trim()}
                                  </span>
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      );
                    } else {
                      return (
                        <p key={i} className="text-base sm:text-lg leading-relaxed max-w-2xl">
                          {block}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Image */}
              <div className="
                relative h-56 sm:h-64 md:h-80 lg:h-96 
                rounded-3xl overflow-hidden 
                shadow-2xl shadow-black/30
                order-1 lg:order-2
                animate-in fade-in-50 slide-in-from-right-10 duration-700
                group/image
              ">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src={activeService?.image}
                  alt={activeService?.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <span className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-white">
                    Explore {activeService?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}