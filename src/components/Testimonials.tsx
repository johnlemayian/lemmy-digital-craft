import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      company: 'Taste Paradise',
      content: 'Lemmar Designs transformed my business with their stunning website design! My online orders increased by 200% within the first month.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Solutions',
      content: 'Their graphic design services are top-notch! The brochures and posters they created perfectly captured our brand identity.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Bloom Boutique',
      content: 'The team made my KRA returns filing process so smooth and stress-free. Professional service with excellent communication throughout.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Kimani',
      role: 'Entrepreneur',
      company: 'Kimani Enterprises',
      content: 'From web design to hosting services, Lemmar Designs provided everything I needed. Their computer literacy classes also helped my staff tremendously.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Grace Wanjiku',
      role: 'Marketing Director',
      company: 'Creative Hub Kenya',
      content: 'Exceptional e-commerce website that boosted our online sales significantly. The design is both beautiful and functional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-tech-purple bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-tech-blue mx-auto mb-6 opacity-50" />
                
                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-tech-blue"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-tech-blue font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-tech-blue scale-125' 
                      : 'bg-muted-foreground hover:bg-tech-blue/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;