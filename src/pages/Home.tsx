import { 
  Heart, 
  Users, 
  Droplet, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  Star,
  ChevronRight,
  Search as SearchIcon,
  UserPlus as UserPlusIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  const stats = [
    { label: "Total Donors", value: "12,450+", icon: <Users className="w-5 h-5" />, color: "bg-blue-500" },
    { label: "Blood Donations", value: "25,800+", icon: <Droplet className="w-5 h-5" />, color: "bg-red-500" },
    { label: "Lives Saved", value: "48,200+", icon: <Heart className="w-5 h-5" />, color: "bg-pink-500" },
    { label: "Active Requests", value: "42", icon: <Clock className="w-5 h-5" />, color: "bg-orange-500" },
  ];

  const emergencyRequests = [
    { id: 1, group: "O+", location: "Dhaka Medical College", units: 2, urgency: "Critical", time: "10 mins ago" },
    { id: 2, group: "B-", location: "Chittagong General Hospital", units: 1, urgency: "Urgent", time: "25 mins ago" },
    { id: 3, group: "A+", location: "Rajshahi Medical College", units: 3, urgency: "Normal", time: "1 hour ago" },
  ];

  const activities = [
    { 
      title: "Blood Donation Camp", 
      date: "May 15, 2024", 
      location: "Central Park, Dhaka", 
      image: "https://picsum.photos/seed/blood1/800/600",
      description: "Join our mega blood donation camp to help local hospitals."
    },
    { 
      title: "Human Development Workshop", 
      date: "May 22, 2024", 
      location: "Community Center", 
      image: "https://picsum.photos/seed/dev1/800/600",
      description: "Skill development session for underprivileged youth."
    },
    { 
      title: "Health Awareness Seminar", 
      date: "June 05, 2024", 
      location: "Public Library", 
      image: "https://picsum.photos/seed/health1/800/600",
      description: "Learning about preventive healthcare and nutrition."
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5">
              <Droplet className="w-3 h-3 mr-2 fill-current" />
              Every drop counts
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight leading-[1.1]">
              Save Life, <span className="text-primary">Donate Blood</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Join our community of heroes. Your simple act of kindness can give someone a second chance at life. We are committed to human development and healthcare.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/find-blood">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20 group">
                  Find Blood
                  <SearchIcon className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Link to="/become-donor">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Become a Donor
                  <UserPlusIcon className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-red-500/20 blur-2xl rounded-[2rem] -z-10" />
            <img 
              src="https://picsum.photos/seed/hero/1200/600" 
              alt="Blood Donation Hero" 
              className="rounded-3xl shadow-2xl border w-full object-cover h-[400px] md:h-[500px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="bg-background/80 backdrop-blur-md border-none shadow-lg">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className={`${stat.color} p-2 rounded-lg text-white mb-2`}>
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Feed */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Emergency Requests</h2>
            <p className="text-muted-foreground">Real-time blood requests from hospitals across the country. Help if you can.</p>
          </div>
          <Link to="/request-blood">
            <Button variant="link" className="text-primary font-semibold group">
              View all requests
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyRequests.map((req) => (
            <motion.div key={req.id} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold">
                      {req.group}
                    </div>
                    <Badge variant={req.urgency === "Critical" ? "destructive" : "secondary"} className="rounded-full">
                      {req.urgency}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-lg">{req.location}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {req.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Units needed:</span>
                    <span className="font-bold">{req.units} Units</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 pt-4">
                  <Button className="w-full rounded-lg" variant="outline">Contact Hospital</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10" />
              <img 
                src="https://picsum.photos/seed/donate/600/600" 
                alt="Donation Process" 
                className="rounded-[2.5rem] shadow-2xl border-8 border-background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm">Safe & Easy</span>
                </div>
                <p className="text-xs text-muted-foreground">The whole process takes only 15-20 minutes.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 italic">"Your blood can give someone another chance to dream."</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Blood donation is a noble cause. It doesn't just save lives; it strengthens our community and brings us together. At Manob Unnoyon, we ensure a safe, professional, and rewarding experience for every donor.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Free Health Checkup", desc: "Get a mini-physical before every donation." },
                  { title: "Save 3 Lives", desc: "A single donation can save up to three people." },
                  { title: "Community Impact", desc: "Help local hospitals maintain blood supply." },
                  { title: "Donor Rewards", desc: "Earn badges and recognition in our community." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-background p-2 rounded-lg shadow-sm h-fit">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-fit rounded-full px-8">Learn More About Donation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Recent Activities</h2>
          <p className="text-muted-foreground">Beyond blood donation, we are active in various human development and social welfare projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <Card key={i} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background">
                    {activity.date}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{activity.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {activity.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {activity.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
                  Read more <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">What People Say</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahat Ahmed", role: "Regular Donor", text: "I've been donating blood with Manob Unnoyon for 3 years. The process is so smooth and the staff is incredibly supportive." },
              { name: "Sumaiya Khan", role: "Blood Recipient", text: "When my father needed O- blood urgently, this platform helped us find a donor within 30 minutes. Truly life-saving." },
              { name: "Dr. Asif Iqbal", role: "Medical Partner", text: "The organization's commitment to quality and safety is commendable. They are a vital part of our healthcare ecosystem." },
            ].map((t, i) => (
              <Card key={i} className="bg-background border-none shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare className="w-12 h-12" />
                </div>
                <CardContent className="pt-8">
                  <p className="italic text-muted-foreground mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to make a difference?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Whether you want to donate blood, request help, or volunteer for our development projects, your contribution matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg">
                Register as Donor
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Search(props: any) {
  return <SearchIcon {...props} />;
}

function UserPlus(props: any) {
  return <UserPlusIcon {...props} />;
}
