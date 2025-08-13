import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Alternative email service using EmailJS or webhook approach
const sendNotification = async (contactData: any) => {
  // Method 1: Log to console (immediate solution)
  console.log('\n=== NEW CONTACT FORM SUBMISSION ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Name:', contactData.name);
  console.log('Email:', contactData.email);
  console.log('Company:', contactData.company || 'Not provided');
  console.log('Message:', contactData.message);
  console.log('=====================================\n');
  
  // Method 2: You can also check all messages via /api/contacts endpoint
  // Method 3: Future webhook integration (Discord, Slack, etc.)
  
  return true;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send notification using alternative method
      try {
        await sendNotification(validatedData);
        console.log('Notification sent successfully');
      } catch (notifyError) {
        console.error('Failed to send notification:', notifyError);
        // Continue even if notification fails
      }
      
      res.json({ success: true, message: "Message sent successfully!", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real implementation, this would serve the actual PDF file
    res.setHeader('Content-Type', 'application/json');
    res.json({ 
      success: true, 
      message: "Resume download endpoint - implement with actual PDF file",
      downloadUrl: "https://drive.google.com/file/d/1x0lqHt_uCYITEKiU2uJnsaAqpc1SYtQp/view?usp=sharing"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
