import React, { 
  Target, 
  Eye, 
  Users, 
  Heart, 
  Award, 
  ShieldCheck, 
  Globe,
  Droplet
} from "lucide-react";
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

export default function AboutUs() {
  const team = [
    { name: "Shabbir Rohoman", role: "Founder & Chairman", image: "https://i.pravatar.cc/150?u=shabbir" },
    { name: "Dr. Sarah Ahmed", role: "Medical Director", image: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Rahat Kabir", role: "Operations Manager", image: "https://i.pravatar.cc/150?u=rahat" },
    { name: "Sumaiya Khan", role: "Community Lead", image: "https://i.pravatar.cc/150?u=sumaiya" },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Our Organization</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Manob Unnoyon O Rokto Joddha is a non-profit organization dedicated to building a healthier, more compassionate society through voluntary blood donation and human development initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-background p-10 rounded-[3rem] shadow-xl border border-primary/5 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To ensure that no life is lost due to the unavailability of blood and to empower individuals through education, skill development, and social awareness.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-background p-10 rounded-[3rem] shadow-xl border border-primary/5 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A society where every person has access to safe blood and equal opportunities for personal and professional growth, fostered by the spirit of volunteerism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every action we take and every life we touch.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We maintain the highest standards of honesty and transparency.", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "Compassion", desc: "We act with empathy and kindness towards all individuals.", icon: <Heart className="w-6 h-6" /> },
              { title: "Excellence", desc: "We strive for the best quality in our services and programs.", icon: <Award className="w-6 h-6" /> },
              { title: "Inclusivity", desc: "We serve everyone regardless of their background or status.", icon: <Globe className="w-6 h-6" /> },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary mb-6">
                  {value.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The passionate individuals working behind the scenes to make our mission a reality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10" />
                <Avatar className="w-40 h-40 border-4 border-background shadow-xl">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History / Story */}
      <section className="container mx-auto px-4">
        <div className="bg-background rounded-[3rem] shadow-2xl overflow-hidden border border-primary/5 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-80 lg:h-auto">
            <img 
              src="https://picsum.photos/seed/history/1000/1000" 
              alt="Our History" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <Badge className="w-fit mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">How It All Started</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020 by a group of passionate students, Manob Unnoyon O Rokto Joddha began as a small Facebook group helping people find blood donors in Dhaka.
              </p>
              <p>
                Seeing the immense need and the impact of our efforts, we officially registered as a non-profit and expanded our scope to include human development projects, recognizing that a healthy society needs both medical support and personal growth opportunities.
              </p>
              <p>
                Today, we have a network of over 10,000 donors and have successfully completed numerous social welfare projects across Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>
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
