# How to View Contact Form Messages

## Method 1: Check Console Logs (Immediate)
When someone submits the contact form, you'll see the message details in the server console logs in Replit. Look for:
```
=== NEW CONTACT FORM SUBMISSION ===
Timestamp: 2025-01-02T20:35:00.000Z
Name: John Doe
Email: john@company.com
Company: Tech Corp
Message: Interested in hiring you as a data analyst...
=====================================
```

## Method 2: View All Messages via API
Visit this URL in your browser to see all submitted messages:
`https://your-replit-url.replit.app/api/contacts`

This will show you a JSON list of all contact form submissions.

## Method 3: Future Email Integration Options

### Option A: EmailJS (No server setup needed)
- Sign up at emailjs.com
- Configure to send emails directly from the frontend
- No server-side email configuration required

### Option B: Discord Webhook
- Create a Discord server
- Set up a webhook to get notifications there
- Very easy to set up

### Option C: Slack Webhook
- Similar to Discord but uses Slack

### Option D: Alternative Email Services
- Mailgun, SendGrid, or Resend.com
- Often easier to set up than Gmail

## Recommended Immediate Solution
For now, Method 1 (console logs) and Method 2 (API endpoint) will work perfectly. You can check the Replit console whenever you want to see new messages, and use the /api/contacts URL to view all messages in a web browser.