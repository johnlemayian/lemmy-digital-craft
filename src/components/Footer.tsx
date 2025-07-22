import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Web Design',
      'Graphic Design',
      'KRA Returns',
      'iTax Service',
      'Driving License',
      'E-commerce',
    ],
    company: [
      'About Us',
      'Portfolio',
      'Testimonials',
      'Blog',
      'Contact',
      'Privacy Policy',
    ],
    support: [
      'Help Center',
      'Documentation',
      'Live Chat',
      'Email Support',
      'Phone Support',
      'Terms of Service',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/254796677808', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                Lemmar Designs
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for creative and technical solutions. 
              Transforming businesses through innovative design and comprehensive digital services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-tech-blue" />
                <span className="text-sm">+254 796677808</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-tech-green" />
                <span className="text-sm">princelemar3@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-tech-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lemmar Designs. All rights reserved. | 
            <span className="ml-1">
              Crafted with ❤️ for businesses that dream big.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;