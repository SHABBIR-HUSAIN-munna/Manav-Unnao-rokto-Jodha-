import { 
  Activity, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Heart, 
  Users, 
  Droplet,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function Activities() {
  const activities = [
    { 
      id: 1,
      category: "Blood Camp",
      title: "Dhaka University Mega Blood Drive", 
      date: "May 15, 2024", 
      location: "TSC, Dhaka University", 
      image: "https://picsum.photos/seed/activity1/800/600",
      description: "Our annual mega blood drive at Dhaka University. We aim to collect 500+ bags of blood to support local public hospitals during the summer shortage.",
      impact: "500+ Bags Target"
    },
    { 
      id: 2,
      category: "Human Development",
      title: "Youth Skill Development Workshop", 
      date: "June 02, 2024", 
      location: "Manob Unnoyon Center", 
      image: "https://picsum.photos/seed/activity2/800/600",
      description: "A 3-day workshop focusing on digital literacy and soft skills for underprivileged youth in the Mirpur area.",
      impact: "120 Students"
    },
    { 
      id: 3,
      category: "Charity",
      title: "Flood Relief Distribution", 
      date: "July 10, 2024", 
      location: "Sylhet Region", 
      image: "https://picsum.photos/seed/activity3/800/600",
      description: "Providing essential food, medicine, and clean water to families affected by the recent flash floods in Sylhet and Sunamganj.",
      impact: "2000+ Families"
    },
    { 
      id: 4,
      category: "Health Awareness",
      title: "World Blood Donor Day Seminar", 
      date: "June 14, 2024", 
      location: "National Press Club", 
      image: "https://picsum.photos/seed/activity4/800/600",
      description: "A seminar to honor our regular donors and raise awareness about the importance of voluntary blood donation among the general public.",
      impact: "300 Attendees"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our <span className="text-primary">Activities</span></h1>
        <p className="text-xl text-muted-foreground">
          We are more than just a blood donation platform. We are committed to social welfare and human development through various initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {activities.map((activity, i) => (
          <motion.div 
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="group overflow-hidden border-none shadow-xl rounded-[2rem] flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-white border-none px-4 py-1 rounded-full shadow-lg">
                    {activity.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {activity.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {activity.location}</span>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">{activity.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <div className="bg-muted/50 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold">Impact</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{activity.impact}</span>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="link" className="p-0 h-auto text-primary font-bold group/btn">
                  View Full Report <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-primary/5 rounded-[3rem] p-12 md:p-20 text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Want to Volunteer?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Join our team of dedicated volunteers and help us make a real difference in the community. We're always looking for passionate individuals.
        </p>
        <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20">
          Join as Volunteer
        </Button>
      </div>
    </div>
  );
}
