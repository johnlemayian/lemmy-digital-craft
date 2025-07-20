import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

const LiveChat = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      message: 'Hi! Welcome to Lemmar Designs. How can I help you today?',
      sender: 'system',
      timestamp: new Date(),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [isInfoCollected, setIsInfoCollected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(Math.random().toString(36).substring(7));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setIsInfoCollected(true);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        message: `Thanks ${userInfo.name}! Please feel free to ask any questions about our services.`,
        sender: 'system',
        timestamp: new Date(),
      }]);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      message: currentMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-message', {
        body: {
          name: userInfo.name,
          email: userInfo.email,
          message: currentMessage,
          session_id: sessionId.current,
        },
      });

      if (error) throw error;

      // Add system response
      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: 'Thank you for your message! I\'ll get back to you as soon as possible via email.',
        sender: 'system',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, systemMessage]);

      toast({
        title: "Message Sent!",
        description: "Your message has been sent. I'll respond via email soon.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-110"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
      <Card className="h-full bg-gradient-card border-border/50 shadow-glow">
        <CardHeader className="bg-gradient-hero text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Live Chat</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col h-full p-0">
          {!isInfoCollected ? (
            <div className="p-4 space-y-4 flex-1">
              <div className="text-center">
                <User className="h-12 w-12 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Let's get started!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Please provide your details to begin our conversation.
                </p>
              </div>
              
              <form onSubmit={handleInfoSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors text-sm"
                  required
                />
                <Button type="submit" className="w-full bg-gradient-hero">
                  Start Chat
                </Button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-hero text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-border">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-lg bg-background border border-border focus:border-tech-blue focus:outline-none transition-colors text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-gradient-hero hover:shadow-glow"
                    disabled={isLoading || !currentMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveChat;