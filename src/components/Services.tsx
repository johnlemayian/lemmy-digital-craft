import { 
  Globe, 
  Palette, 
  FileText, 
  Calculator, 
  Car, 
  Type, 
  GraduationCap, 
  ShoppingCart, 
  Server 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Custom websites that captivate and convert visitors into customers.',
      color: 'tech-blue',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching posters, brochures, and marketing materials.',
      color: 'tech-green',
    },
    {
      icon: FileText,
      title: 'Filing KRA Returns',
      description: 'Professional tax return filing services to keep you compliant.',
      color: 'tech-purple',
    },
    {
      icon: Calculator,
      title: 'iTax Service',
      description: 'Comprehensive iTax solutions for individuals and businesses.',
      color: 'tech-cyan',
    },
    {
      icon: Car,
      title: 'Driving License Applications',
      description: 'Hassle-free assistance with driving license applications.',
      color: 'neon-pink',
    },
    {
      icon: Type,
      title: 'Typesetting',
      description: 'Professional document formatting and typesetting services.',
      color: 'tech-blue',
    },
    {
      icon: GraduationCap,
      title: 'Computer Literacy Classes',
      description: 'Online courses to boost your digital skills and confidence.',
      color: 'tech-green',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Site Design',
      description: 'Complete online stores that drive sales and growth.',
      color: 'tech-purple',
    },
    {
      icon: Server,
      title: 'Domain Hosting Services',
      description: 'Reliable hosting solutions to keep your website running smoothly.',
      color: 'tech-cyan',
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to elevate your business and simplify your digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-card border-border/50"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}/20 flex items-center justify-center group-hover:bg-${service.color}/30 transition-colors duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;