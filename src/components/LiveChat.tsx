import { useState } from 'react';
import { MessageCircle, Send, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendChatMessage } from '@/lib/emailService';

const LiveChat = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([
    { id: 1, text: "Hi! How can I help you today?", isUser: false }
  ]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    
    // Add user message to chat
    const newMessage = { id: Date.now(), text: message, isUser: true };
    setMessages(prev => [...prev, newMessage]);

    try {
      const success = await sendChatMessage(message, userEmail);
      
      if (success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you shortly.",
        });
        
        // Add confirmation message
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: "Thanks for your message! We'll respond to you soon.",
            isUser: false
          }]);
        }, 1000);
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

    setMessage('');
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-hero shadow-glow hover:shadow-xl transition-all duration-300 z-50"
        size="lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 bg-background border shadow-xl z-40">
          <CardHeader className="bg-gradient-hero text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-4 flex flex-col h-full">
            {/* Email Input */}
            {!userEmail && (
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                />
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      msg.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {!msg.isUser && <User className="h-3 w-3 inline mr-1" />}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-background border border-border focus:border-primary focus:outline-none resize-none"
                rows={2}
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LiveChat;