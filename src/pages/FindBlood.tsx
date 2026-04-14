import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Filter, 
  ChevronDown,
  Navigation,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Input from "../components/ui/Input"; 
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { motion } from "motion/react";

export default function FindBlood() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const donors = [
    { id: 1, name: "Ariful Islam", group: "A+", location: "Mirpur, Dhaka", distance: "2.5 km", lastDonation: "3 months ago", status: "Available", phone: "+880 1712 345678", image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sabbir Ahmed", group: "O+", location: "Uttara, Dhaka", distance: "5.1 km", lastDonation: "6 months ago", status: "Available", phone: "+880 1812 345678", image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Nusrat Jahan", group: "B-", location: "Dhanmondi, Dhaka", distance: "1.2 km", lastDonation: "1 month ago", status: "Not Available", phone: "+880 1912 345678", image: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Tanvir Hossain", group: "AB+", location: "Banani, Dhaka", distance: "3.8 km", lastDonation: "4 months ago", status: "Available", phone: "+880 1612 345678", image: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Mehedi Hasan", group: "A+", location: "Gulshan, Dhaka", distance: "4.2 km", lastDonation: "8 months ago", status: "Available", phone: "+880 1512 345678", image: "https://i.pravatar.cc/150?u=5" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">Find Blood Donors</h1>
        <p className="text-muted-foreground">
          Search for available donors in your area. Contact them directly for emergency needs.
        </p>
      </div>

      {/* Search Filters */}
      <Card className="max-w-5xl mx-auto mb-12 shadow-xl border-none bg-primary/5">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <Select onValueChange={setBloodGroup}>
              <SelectTrigger className="bg-background rounded-xl h-12">
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(g => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-background rounded-xl h-12">
                <SelectValue placeholder="Select Division" />
              </SelectTrigger>
              <SelectContent>
                {["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"].map(d => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input 
              placeholder="Enter location"
              className="bg-background rounded-xl h-12"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <Button className="w-full h-12 rounded-xl">
              <Search className="w-4 h-4 mr-2" />
              Search Donors
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Donors */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {donors.map((donor) => (
          <Card key={donor.id} className="p-6">
            <div className="flex gap-4">
              <img src={donor.image} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold">{donor.name}</h3>
                <p className="text-sm text-gray-500">{donor.location}</p>
                <p className="text-sm">Group: {donor.group}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}      lastDonation: "8 months ago", 
      status: "Available",
      phone: "+880 1512 345678",
      image: "https://i.pravatar.cc/150?u=5"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">Find Blood Donors</h1>
        <p className="text-muted-foreground">Search for available donors in your area. Contact them directly for emergency needs.</p>
      </div>

      {/* Search Filters */}
      <Card className="max-w-5xl mx-auto mb-12 shadow-xl border-none bg-primary/5">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Blood Group</label>
              <Select onValueChange={setBloodGroup}>
                <SelectTrigger className="bg-background rounded-xl h-12">
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(g => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Division</label>
              <Select>
                <SelectTrigger className="bg-background rounded-xl h-12">
                  <SelectValue placeholder="Select Division" />
                </SelectTrigger>
                <SelectContent>
                  {["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"].map(d => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">District / Area</label>
              <Input 
                placeholder="Enter location" 
                className="bg-background rounded-xl h-12"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <Button className="w-full h-12 rounded-xl gap-2 shadow-lg shadow-primary/20">
                <Search className="w-4 h-4" />
                Search Donors
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Found {donors.length} Donors</h2>
          <Button variant="ghost" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Sort by: Distance
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donors.map((donor) => (
            <motion.div 
              key={donor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/10">
                      <AvatarImage src={donor.image} />
                      <AvatarFallback>{donor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{donor.name}</h3>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                            <MapPin className="w-3 h-3" />
                            {donor.location}
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                          {donor.group}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">Last Donation</span>
                          <span className="text-sm font-medium">{donor.lastDonation}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">Distance</span>
                          <span className="text-sm font-medium flex items-center gap-1">
                            <Navigation className="w-3 h-3 text-primary" />
                            {donor.distance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <Badge 
                      variant={donor.status === "Available" ? "secondary" : "outline"}
                      className={`rounded-full px-3 py-1 ${donor.status === "Available" ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-50 text-red-600"}`}
                    >
                      {donor.status === "Available" ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                      {donor.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="rounded-full h-9 w-9 p-0">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="rounded-full h-9 gap-2 bg-green-600 hover:bg-green-700 border-none">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8">Load More Donors</Button>
        </div>
      </div>
    </div>
  );
}
