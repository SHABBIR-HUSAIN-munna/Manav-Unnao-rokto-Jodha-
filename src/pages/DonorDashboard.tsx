import { useState } from "react";
import { 
  User, 
  Droplet, 
  Heart, 
  Clock, 
  Calendar, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  XCircle,
  Bell,
  MapPin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { motion } from "motion/react";

export default function DonorDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  const stats = [
    { label: "Total Donations", value: "8", icon: <Droplet className="w-4 h-4" /> },
    { label: "Lives Saved", value: "24", icon: <Heart className="w-4 h-4" /> },
    { label: "Requests Received", value: "15", icon: <Bell className="w-4 h-4" /> },
    { label: "Community Rank", value: "#12", icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  const requests = [
    { id: 1, patient: "Rahim Uddin", group: "A+", location: "Dhaka Medical", date: "Today", status: "Pending" },
    { id: 2, patient: "Karim Ahmed", group: "A+", location: "United Hospital", date: "Yesterday", status: "Accepted" },
    { id: 3, patient: "Fatima Begum", group: "A+", location: "Apollo Hospital", date: "2 days ago", status: "Completed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-lg overflow-hidden rounded-2xl">
            <div className="h-24 bg-primary" />
            <CardContent className="pt-0 -mt-12 flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
                <AvatarImage src="https://i.pravatar.cc/150?u=donor" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">Ariful Islam</h2>
              <p className="text-sm text-muted-foreground">O+ Blood Donor</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <MapPin className="w-3 h-3" /> Mirpur, Dhaka
              </div>
              
              <div className="w-full mt-6 p-4 bg-muted/50 rounded-xl flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <Label htmlFor="availability" className="text-xs font-bold uppercase tracking-wider">Availability</Label>
                  <span className={`text-xs ${isAvailable ? "text-green-600" : "text-red-600"}`}>
                    {isAvailable ? "Available to donate" : "Not available"}
                  </span>
                </div>
                <Switch 
                  id="availability" 
                  checked={isAvailable} 
                  onCheckedChange={setIsAvailable} 
                />
              </div>

              <div className="w-full mt-6 space-y-2">
                <Button variant="outline" className="w-full justify-start gap-3 rounded-xl">
                  <User className="w-4 h-4" /> Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 rounded-xl">
                  <Settings className="w-4 h-4" /> Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4" /> Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg rounded-2xl bg-primary text-white">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Next Eligibility</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">You are eligible to donate blood again in:</p>
              <div className="text-3xl font-bold">12 Days</div>
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[85%]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="border-none shadow-md rounded-2xl">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Requests */}
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
              <div>
                <CardTitle className="text-lg">Recent Blood Requests</CardTitle>
                <CardDescription>Manage requests sent to you</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">View All</Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="pl-6">Patient</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right pr-6">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="pl-6 font-medium">{req.patient}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{req.location}</TableCell>
                      <TableCell className="text-sm">{req.date}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={req.status === "Pending" ? "outline" : "secondary"}
                          className={`rounded-full ${
                            req.status === "Pending" ? "bg-orange-50 text-orange-600 border-orange-200" : 
                            req.status === "Accepted" ? "bg-blue-50 text-blue-600" : 
                            "bg-green-50 text-green-600"
                          }`}
                        >
                          {req.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        {req.status === "Pending" ? (
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-600">
                              <XCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-primary hover:bg-primary/90">
                              <CheckCircle2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="ghost" className="h-8 rounded-full text-xs">Details</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Donation History Chart Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Donation Impact</CardTitle>
                <CardDescription>Your contribution over time</CardDescription>
              </CardHeader>
              <CardContent className="h-48 flex items-end gap-4 px-8">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="flex-grow bg-primary/10 rounded-t-lg relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="bg-primary rounded-t-lg w-full transition-all group-hover:bg-primary/80"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground">M{i+1}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Camps</CardTitle>
                <CardDescription>Nearby donation events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Mirpur Mega Camp", date: "May 20", time: "10:00 AM" },
                  { title: "Dhanmondi Drive", date: "June 02", time: "09:00 AM" },
                ].map((camp, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="bg-background p-2 rounded-lg shadow-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold">{camp.title}</h5>
                        <p className="text-[10px] text-muted-foreground">{camp.date} • {camp.time}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs h-8 rounded-full">Join</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
