import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
