import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Globe,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Have questions or want to collaborate? We're here to help and listen to your suggestions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {[
                { title: "Our Office", detail: "123 Main Street, Mirpur-10, Dhaka, Bangladesh", icon: <MapPin className="w-5 h-5" /> },
                { title: "Phone Number", detail: "+880 1712 345678, +880 1812 345678", icon: <Phone className="w-5 h-5" /> },
                { title: "Email Address", detail: "info@manobunnoyon.org, support@manobunnoyon.org", icon: <Mail className="w-5 h-5" /> },
                { title: "Working Hours", detail: "24/7 for Emergency, 9 AM - 6 PM for Office", icon: <Clock className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-none shadow-xl rounded-[2rem] bg-primary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-bold mb-4">Emergency?</h3>
                <p className="text-primary-foreground/80 text-sm mb-6">If you need blood urgently, please use our request form or call our 24/7 hotline.</p>
                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-bold gap-2">
                  <Phone className="w-4 h-4" /> Call Hotline
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden h-full">
              <CardHeader className="bg-muted/30 p-8 border-b">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>We'll respond to your inquiry within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="bg-green-100 p-4 rounded-full mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                    <Button variant="outline" className="rounded-full px-8" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="rounded-xl h-12 bg-muted/20 border-none" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="rounded-xl h-12 bg-muted/20 border-none" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl h-12 bg-muted/20 border-none" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" className="rounded-xl h-12 bg-muted/20 border-none" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" placeholder="Write your message here..." className="rounded-xl min-h-[150px] bg-muted/20 border-none" required />
                    </div>

                    <Button type="submit" className="w-full h-14 rounded-xl text-lg shadow-xl shadow-primary/20 gap-2">
                      <Send className="w-5 h-5" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24">
          <Card className="border-none shadow-xl rounded-[3rem] overflow-hidden h-[400px] relative group">
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-muted-foreground">Mirpur-10, Dhaka, Bangladesh</p>
              </div>
            </div>
            {/* Overlay for "Open in Maps" */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <Button className="rounded-full px-8 h-12 gap-2">
                <Globe className="w-4 h-4" /> Open in Google Maps
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
