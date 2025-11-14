import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MissionVision } from './components/MissionVission';
import { ProcessTimeline } from './components/ProcessessTimeline';
import { StatsSection } from './components/Stats';
import { WhyChooseUs } from './components/Whychoseus';
import ServicesOverview from './components/ServicesOverView';
import ProjectsSection from './components/OurProjects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const imgs = Array.from(document.images);
    const onImg = () => ScrollTrigger.refresh();
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', onImg);
        img.addEventListener('error', onImg);
      }
    });
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
    setTimeout(refresh, 0);
    return () => {
      window.removeEventListener('load', refresh);
      ro.disconnect();
      imgs.forEach((img) => {
        img.removeEventListener('load', onImg);
        img.removeEventListener('error', onImg);
      });
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <MissionVision />
      <div id="services">
        <ServicesOverview />
      </div>
        <div id="gallery">
        <ProjectsSection />
      </div>
      <div id="process">
        <ProcessTimeline />
      </div>
      <StatsSection />
      <WhyChooseUs />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}