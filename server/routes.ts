import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from 'nodemailer';

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'Missing required fields' 
        });
      }

      // Log the contact form submission
      console.log('📧 New contact form submission:');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log(`Timestamp: ${new Date().toISOString()}`);
      console.log('-----------------------------------');

      // Create email transporter (using Gmail as example)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        `
      };

      // Send email
      try {
        await transporter.sendMail(mailOptions);
        console.log('📧 Email notification sent successfully');
        
        res.json({ 
          success: true, 
          message: 'Contact form submitted successfully and notification sent' 
        });
      } catch (emailError) {
        console.error('❌ Failed to send email notification:', emailError);
        
        res.json({ 
          success: true, 
          message: 'Contact form submitted successfully but email notification failed' 
        });
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        error: 'Internal server error' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}