import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/emailService';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await sendContactEmail(formData);
      
      if (success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 796677808',
      description: 'Call us for immediate assistance',
      color: 'tech-blue',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'princelemar3@gmail.com',
      description: 'Send us your inquiries anytime',
      color: 'tech-green',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Nairobi, Kenya',
      description: 'Serving clients nationwide',
      color: 'tech-purple',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-blue to-neon-pink bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you succeed. Reach out to us through any of the following channels, 
                and we'll respond as quickly as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-${info.color}/20 flex items-center justify-center group-hover:bg-${info.color}/30 transition-colors duration-300`}>
                          <IconComponent className={`h-6 w-6 text-${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-foreground font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Live Chat CTA */}
            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Need Immediate Help?</h4>
                <p className="mb-4 opacity-90">
                  Chat with our team for real-time support and quick answers
                </p>
                <Button variant="secondary" className="bg-white text-background hover:bg-white/90">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-accent bg-clip-text text-transparent">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="kra-returns">KRA Returns</option>
                      <option value="itax-service">iTax Service</option>
                      <option value="driving-license">Driving License</option>
                      <option value="typesetting">Typesetting</option>
                      <option value="computer-classes">Computer Classes</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="hosting">Domain Hosting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;