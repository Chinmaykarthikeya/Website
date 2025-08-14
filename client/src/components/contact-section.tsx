import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      let emailSent = false;
      let errorMessage = "";

      // Try Formspree as primary email service (better domain support)
      try {
        const formspreeData = {
          name: data.name,
          email: data.email,
          company: data.company || "",
          message: data.message,
          _replyto: data.email,
          _subject: `New message from ${data.name} - Portfolio Website`
        };

        const response = await fetch("https://formspree.io/f/mkgzvzgk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formspreeData)
        });

        const result = await response.json();
        if (response.ok) {
          emailSent = true;
        } else {
          console.warn("Formspree failed:", result);
          errorMessage = "Email service temporarily unavailable";
        }
      } catch (emailError) {
        console.warn("Email service error:", emailError);
        errorMessage = "Email service temporarily unavailable";
      }

      // Always save to local storage
      await apiRequest("POST", "/api/contact", data);

      return { 
        success: true, 
        emailSent, 
        message: emailSent ? "Message sent successfully via email!" : `Message saved successfully! ${errorMessage ? `(${errorMessage})` : ''}`
      };
    },
    onSuccess: (result) => {
      toast({
        title: result.emailSent ? "Message sent successfully!" : "Message received!",
        description: result.emailSent 
          ? "Thank you for reaching out. I'll get back to you soon via email."
          : "Your message has been saved. I'll review it and get back to you soon. You can also view all messages at /api/contacts",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

 const downloadResume = async () => {
    try {
      // Open the Google Drive link in a new tab
      window.open("https://drive.google.com/file/d/1XOu8mQWJTgNUn4ZNB8x7JRV1VCU-upRl/view?usp=sharing", "_blank");

      // Show success toast message
      toast({
        title: "Resume Download",
        description: "Your resume download has started in a new tab.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Resume download will be available soon.",
        variant: "destructive",
      });
    }
  };


  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-xl" />,
      title: "Email",
      content: "karthikeyachinmay@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=karthikeyachinmay@gmail.com",
      bgColor: "bg-data-primary"
    },
    {
      icon: <Linkedin className="text-xl" />,
      title: "LinkedIn", 
      content: "linkedin.com/in/chinmaykarthikeya",
      href: "https://www.linkedin.com/in/chinmaykarthikeya",
      bgColor: "bg-data-secondary"
    },
    {
      icon: <Github className="text-xl" />,
      title: "GitHub",
      content: "github.com/ChinmayKarthikeya", 
      href: "https://github.com/ChinmayKarthikeya",
      bgColor: "bg-gray-800"
    },
    {
      icon: <MapPin className="text-xl" />,
      title: "Location",
      content: "Hyderabad, India",
      href: null,
      bgColor: "bg-data-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Let's Connect</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ready to contribute to your data analytics team. Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className={`${info.bgColor} text-white p-3 rounded-lg mr-4`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-data-primary hover:text-data-primary-dark"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-secondary">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-data-primary shadow-sm">
              <h4 className="font-semibold text-primary mb-2">Download Resume</h4>
              <p className="text-secondary mb-4">Get my complete professional profile and project details</p>

              <Button
                onClick={downloadResume}
                className="bg-data-primary hover:bg-data-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell me about the opportunity or project..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-data-primary hover:bg-data-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Mail className="mr-2" size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
