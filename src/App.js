import React from 'react';
import PreHeader from './components/PreHeader'; 
import Header from './components/Header'; 
import BgndVideo from './components/BgndVideo'; 
import IntroSection from './components/IntroSection'; 
import ScheduleWrap from './components/ScheduleWrap'; 
import SiteSection from './components/SiteSection'; 
import ClassesSection from './components/ClassesSection';
import TrainerSection from './components/TrainerSection'; 
import ServicesSection from './components/ServicesSection'; 
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div className="site-wrap" data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      {/* PreHeader */}
      <PreHeader />

      {/* Header */}
      <Header />

      {/* BgndVideo */}
      <BgndVideo />

      {/* IntroSection */}
      <IntroSection />

      {/* ScheduleWrap */}
      <ScheduleWrap />

      {/* SiteSection */}
      <SiteSection />

      {/* ClassesSection */}
      <ClassesSection />

      {/* TrainerSection */}
      <TrainerSection />

      {/* ServicesSection */}
      <ServicesSection />

      {/* ContactSection */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;