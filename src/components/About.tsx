import { Target, Eye, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional creative and technical services that empower businesses to thrive in the digital age.',
      color: 'tech-blue',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading digital solutions provider, transforming ideas into impactful digital experiences.',
      color: 'tech-green',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We are passionate about innovation, creativity, and delivering results that exceed expectations.',
      color: 'tech-purple',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of experts committed to bringing your vision to life with precision and care.',
      color: 'tech-cyan',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-purple to-neon-pink bg-clip-text text-transparent">
              About Lemmar Designs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We are a dynamic digital agency dedicated to transforming your business through innovative 
            design and comprehensive digital solutions. Our team combines creativity with technical 
            expertise to deliver exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-gradient-card border-border/50"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${value.color}/20 flex items-center justify-center group-hover:bg-${value.color}/30 transition-colors duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${value.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to bridge the gap between creativity and technology, Lemmar Designs 
              has grown from a small startup to a trusted partner for businesses across various industries. 
              We believe that every business deserves exceptional digital presence and streamlined operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began with a simple idea: to make professional design and digital services 
              accessible to everyone. Today, we continue to push boundaries, embrace new technologies, 
              and deliver solutions that drive real results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;