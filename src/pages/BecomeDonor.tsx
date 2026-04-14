import React, { useState, ReactNode } from "react";
import { 
  User, 
  Phone, 
  Droplet, 
  Calendar, 
  MapPin, 
  Weight, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

export default function BecomeDonor() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Registration successful! Welcome to the community.");
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-primary/10 p-6 rounded-full mb-8"
        >
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </motion.div>
        <h1 className="text-4xl font-heading font-bold mb-4">You're a Life Saver!</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto mb-10">
          Thank you for registering as a donor. Your profile is now active and you'll be notified of emergency requests in your area.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full px-8">Go to Dashboard</Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">View Requests</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Join the Mission</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Become a <span className="text-primary">Blood Hero</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Registering as a donor takes less than 2 minutes. Your information is secure and will only be used to connect you with those in urgent need.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { title: "Privacy First", desc: "Your contact details are only shared with verified hospitals and patients.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
              { title: "Real-time Alerts", desc: "Get notified immediately when someone in your area needs your blood type.", icon: <Bell className="w-6 h-6 text-primary" /> },
              { title: "Track Impact", desc: "See how many lives you've saved and earn community badges.", icon: <Heart className="w-6 h-6 text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-muted/30 border border-border/50">
                <div className="bg-background p-3 rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-2xl border-none overflow-hidden rounded-[2rem]">
          <CardHeader className="bg-primary p-8 text-white">
            <CardTitle className="text-2xl">Donor Registration</CardTitle>
            <CardDescription className="text-primary-foreground/80">Step {step} of 2: Personal Details</CardDescription>
            <div className="flex gap-2 mt-4">
              <div className={`h-1.5 flex-grow rounded-full ${step >= 1 ? "bg-white" : "bg-white/30"}`} />
              <div className={`h-1.5 flex-grow rounded-full ${step >= 2 ? "bg-white" : "bg-white/30"}`} />
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input id="name" placeholder="John Doe" className="pl-10 rounded-xl h-11" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input id="phone" placeholder="+880 1XXX XXXXXX" className="pl-10 rounded-xl h-11" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Blood Group</Label>
                        <Select required>
                          <SelectTrigger className="rounded-xl h-11">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(g => (
                              <SelectItem key={g} value={g}>{g}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="18+" className="rounded-xl h-11" required />
                      </div>
                    </div>

                    <Button 
                      type="button" 
                      className="w-full h-12 rounded-xl mt-4" 
                      onClick={() => setStep(2)}
                    >
                      Next Step
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <div className="relative">
                        <Weight className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input id="weight" type="number" placeholder="50+" className="pl-10 rounded-xl h-11" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input id="location" placeholder="Area, City" className="pl-10 rounded-xl h-11" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastDonation">Last Donation Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input id="lastDonation" type="date" className="pl-10 rounded-xl h-11" />
                      </div>
                      <p className="text-[10px] text-muted-foreground px-1">Leave empty if you've never donated before.</p>
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-xs leading-tight text-muted-foreground">
                        I agree to the terms and conditions and confirm that I am healthy and eligible to donate blood.
                      </Label>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-grow h-12 rounded-xl" 
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-[2] h-12 rounded-xl shadow-lg shadow-primary/20">
                        Complete Registration
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  );
}

function Bell(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
