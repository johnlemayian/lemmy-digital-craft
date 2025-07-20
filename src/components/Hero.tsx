import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-tech-green rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-tech-purple rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-tech-cyan rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-tech-blue via-tech-purple to-tech-green bg-clip-text text-transparent">
              Your One-Stop Solution
            </span>
            <br />
            <span className="text-foreground">
              for Creative & Tech Services
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your digital presence with cutting-edge web design, stunning graphics, 
            and comprehensive business services that drive results.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <Code className="h-6 w-6 text-tech-blue" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <Palette className="h-6 w-6 text-tech-green" />
              <span className="text-sm font-medium">Graphic Design</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <Zap className="h-6 w-6 text-tech-purple" />
              <span className="text-sm font-medium">Digital Services</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={scrollToServices}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;