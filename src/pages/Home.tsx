
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/Contact';
import { HeroSection } from '@/components/HeroSection';
import { MissionVision } from '@/components/MissionVission';
import { ProcessTimeline } from '@/components/ProcessessTimeline';
import { ServicesOverview } from '@/components/ServicesOverView';
import { StatsSection } from '@/components/Stats';
import { WhyChooseUs } from '@/components/Whychoseus';

const Home = () => {


  return (
    <div className="min-h-screen bg-white">

<HeroSection/>
<AboutSection/>
<MissionVision/>
<ServicesOverview/>
<ProcessTimeline/>
<StatsSection/>
<WhyChooseUs/>
<ContactSection/>
    </div>
  );
};

export default Home;