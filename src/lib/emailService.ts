// Email service using Resend API
const RESEND_API_KEY = 'sb_secret_zKpIg6gBkKvNLl7jkktJ5Q_EQt6VecU';
const RESEND_API_URL = 'https://api.resend.com/emails';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      
      Message:
      ${formData.message}
    `;

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@lemmardesigns.com',
        to: ['princelemar3@gmail.com'],
        subject: `New Contact Form Submission from ${formData.name}`,
        text: emailContent,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendChatMessage = async (message: string, senderEmail?: string): Promise<boolean> => {
  try {
    const emailContent = `
      New Chat Message
      
      ${senderEmail ? `From: ${senderEmail}` : 'From: Anonymous'}
      
      Message:
      ${message}
    `;

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'chat@lemmardesigns.com',
        to: ['princelemar3@gmail.com'],
        subject: 'New Chat Message from Website',
        text: emailContent,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending chat message:', error);
    return false;
  }
};