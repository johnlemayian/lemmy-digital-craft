import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Web Design Trends for 2024',
      excerpt: 'Discover the latest web design trends that will dominate the digital landscape and how to implement them effectively.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      author: 'Lemmar Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Web Design',
    },
    {
      id: 2,
      title: 'The Power of Visual Branding in Business Growth',
      excerpt: 'Learn how effective graphic design and consistent visual branding can accelerate your business growth and customer engagement.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      author: 'Design Expert',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Graphic Design',
    },
    {
      id: 3,
      title: 'Digital Transformation: Leveraging Technology for Success',
      excerpt: 'Explore how businesses can harness digital tools and technologies to streamline operations and boost productivity.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      author: 'Tech Consultant',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Technology',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-cyan to-tech-green bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with expert tips, industry insights, and the latest trends in design and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-card border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Stay Updated
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest design tips, industry insights, 
            and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors duration-300"
            />
            <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;