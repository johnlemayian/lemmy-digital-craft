import { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      description: 'Modern online store with payment integration',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Corporate Brochure',
      category: 'graphic',
      description: 'Professional tri-fold brochure design',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Responsive website with online ordering system',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Event Poster',
      category: 'graphic',
      description: 'Eye-catching promotional poster design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Business Website',
      category: 'web',
      description: 'Professional corporate website with CMS',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Brand Identity',
      category: 'graphic',
      description: 'Complete brand identity package',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Design' },
    { key: 'graphic', label: 'Graphic Design' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-green to-tech-cyan bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our latest projects and see how we bring ideas to life
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "outline"}
                onClick={() => setActiveFilter(category.key)}
                className={`transition-all duration-300 ${
                  activeFilter === category.key 
                    ? 'bg-gradient-hero shadow-glow' 
                    : 'hover:border-tech-blue hover:text-tech-blue'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-glow transition-all duration-500 transform hover:scale-105 bg-gradient-card border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button size="sm" variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;