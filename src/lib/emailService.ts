import emailjs from '@emailjs/browser';

// EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'default_service'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your EmailJS template ID  
const EMAILJS_USER_ID = 'your_user_id'; // Replace with your EmailJS user ID

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Initialize EmailJS (you would normally do this with real credentials)
emailjs.init(EMAILJS_USER_ID);

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For demo purposes, we'll simulate a successful email send
    // In a real implementation, you would use:
    /*
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'princelemar3@gmail.com',
      }
    );
    return result.status === 200;
    */
    
    // Simulate email sending with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, always return true
    console.log('Contact form data:', formData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendChatMessage = async (message: string, senderEmail?: string): Promise<boolean> => {
  try {
    // For demo purposes, we'll simulate a successful email send
    // In a real implementation, you would use:
    /*
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_chat', // Different template for chat messages
      {
        message: message,
        sender_email: senderEmail || 'Anonymous',
        to_email: 'princelemar3@gmail.com',
      }
    );
    return result.status === 200;
    */
    
    // Simulate email sending with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, always return true
    console.log('Chat message:', { message, senderEmail });
    return true;
  } catch (error) {
    console.error('Error sending chat message:', error);
    return false;
  }
};