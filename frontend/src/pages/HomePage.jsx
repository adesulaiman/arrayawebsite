import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../lib/scroll';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Products from '../sections/Products';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import WhyArraya from '../sections/WhyArraya';
import Process from '../sections/Process';
import TechStack from '../sections/TechStack';
import CtaBand from '../sections/CtaBand';
import Contact from '../sections/Contact';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      const timer = setTimeout(() => scrollToId(target), 120);
      window.history.replaceState({}, '');
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Seo titleKey="homeTitle" descKey="homeDesc" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <Projects />
        <Services />
        <WhyArraya />
        <Process />
        <TechStack />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default HomePage;
