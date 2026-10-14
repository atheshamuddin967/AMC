import  { useEffect, useRef } from "react";
import {
  MapPin,
  Lightbulb,
  Settings,
  Award,
  Users,
  Hammer,
  Building2,
  Shield,
  Clock,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !stepsRef.current.includes(el)) stepsRef.current.push(el);
  };

  const steps = [
    {
      title: "Research",
      icon: <MapPin size={26} />,
      content:
        "Before starting any financial or commercial project, we conduct in-depth research to identify the best features and design elements. Our discovery process ensures every project aligns with the latest design trends and client needs.",
    },
    {
      title: "Feasibility Study",
      icon: <Award size={26} />,
      content:
        "We assess the viability of proposed branch locations to ensure they bring optimal results and sustainable growth for our clients.",
    },
    {
      title: "Planning",
      icon: <Settings size={26} />,
      content:
        "Our strategic planning and site selection expertise helps financial institutions choose the best locations, while we provide purchase and planning assistance.",
    },
    {
      title: "Design",
      icon: <Lightbulb size={26} />,
      content:
        "We merge modern aesthetics with functional efficiency. Our designs focus on customer experience, visibility, and operational flow — inside and out.",
    },
    {
      title: "Bidding",
      icon: <Users size={26} />,
      content:
        "We leverage our experience in negotiating bids to secure the most competitive rates while utilizing trusted local professionals and resources.",
    },
    {
      title: "Architecture",
      icon: <Building2 size={26} />,
      content:
        "We work closely with architects to translate your ideas into detailed, functional plans that meet every technical and visual requirement.",
    },
    {
      title: "Execution",
      icon: <Hammer size={26} />,
      content:
        "Our experienced construction partners ensure top quality. We supervise every stage, maintaining deadlines and delivering your project on time.",
    },
    {
      title: "Interior",
      icon: <Shield size={26} />,
      content:
        "Our interior designers create welcoming, professional spaces that balance comfort and functionality to reflect your brand identity.",
    },
    {
      title: "Post-Launch",
      icon: <Clock size={26} />,
      content:
        "We provide marketing and promotional support post-launch, helping you boost brand recognition and customer engagement.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            From concept to completion — every step crafted with precision.
          </p>
          <div className="w-20 h-1 bg-background2 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="flex flex-col gap-16 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={addToRefs}
                className={`flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-12`}
              >
                {/* Icon */}
                <div className="flex flex-col items-center md:w-1/2">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white shadow-lg shadow-primary/30 z-10">
                    {step.icon}
                    {/* Connector dot */}
                    <span className="hidden md:block absolute w-5 h-5 rounded-full bg-white border-4 border-secondary top-1/2 -translate-y-1/2 right-[-36px] md:right-auto md:left-[-36px]"></span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-white shadow-md rounded-2xl p-6 md:w-1/2 border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    i % 2 === 0
                      ? "md:ml-auto md:text-left"
                      : "md:mr-auto md:text-left"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-background2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
