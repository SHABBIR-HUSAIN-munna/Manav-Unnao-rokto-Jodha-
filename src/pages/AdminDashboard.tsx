import { useState } from "react";
import { 
  Users, 
  Droplet, 
  Activity, 
  ShieldCheck, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  XCircle, 
  Trash2,
  LayoutDashboard,
  FileText,
  Settings,
  Bell,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

export default function AdminDashboard() {
  const summaryStats = [
    { label: "Total Donors", value: "12,450", change: "+12%", trend: "up", icon: <Users className="w-5 h-5" /> },
    { label: "Blood Requests", value: "1,240", change: "+5%", trend: "up", icon: <Droplet className="w-5 h-5" /> },
    { label: "Total Donations", value: "25,800", change: "+18%", trend: "up", icon: <Activity className="w-5 h-5" /> },
    { label: "Active Camps", value: "12", change: "-2%", trend: "down", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const donors = [
    { id: 1, name: "Ariful Islam", group: "O+", location: "Dhaka", status: "Active", joined: "Jan 12, 2024" },
    { id: 2, name: "Sabbir Ahmed", group: "A-", location: "Chittagong", status: "Active", joined: "Feb 05, 2024" },
    { id: 3, name: "Nusrat Jahan", group: "B+", location: "Sylhet", status: "Inactive", joined: "Mar 20, 2024" },
    { id: 4, name: "Tanvir Hossain", group: "AB+", location: "Rajshahi", status: "Active", joined: "Apr 02, 2024" },
  ];

  const requests = [
    { id: 1, patient: "Rahim Uddin", group: "O+", hospital: "Dhaka Medical", urgency: "Critical", status: "Pending" },
    { id: 2, patient: "Karim Ahmed", group: "B-", hospital: "United Hospital", urgency: "Urgent", status: "Approved" },
    { id: 3, patient: "Fatima Begum", group: "A+", hospital: "Apollo Hospital", urgency: "Normal", status: "Completed" },
  ];

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-background border-r p-6 gap-8">
        <div className="flex items-center gap-2 px-2">
          <Droplet className="w-8 h-8 text-primary fill-current" />
          <span className="font-heading font-bold text-xl">Admin Panel</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <Button variant="secondary" className="justify-start gap-3 rounded-xl bg-primary/10 text-primary">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Users className="w-4 h-4" /> Manage Donors
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Droplet className="w-4 h-4" /> Blood Requests
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Activity className="w-4 h-4" /> Activities
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <FileText className="w-4 h-4" /> Reports
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </nav>

        <div className="mt-auto p-4 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-xs font-bold text-primary uppercase mb-2">System Status</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-heading font-bold">Dashboard Summary</h1>
            <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search everything..." className="pl-10 rounded-xl w-64 bg-background" />
            </div>
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {summaryStats.map((stat, i) => (
            <Card key={i} className="border-none shadow-md rounded-2xl overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <Badge variant="outline" className={`rounded-full border-none ${stat.trend === "up" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tables */}
        <Tabs defaultValue="donors" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList className="bg-background border rounded-xl p-1">
              <TabsTrigger value="donors" className="rounded-lg px-6">Donors</TabsTrigger>
              <TabsTrigger value="requests" className="rounded-lg px-6">Requests</TabsTrigger>
            </TabsList>
            <Button className="rounded-xl gap-2">
              <FileText className="w-4 h-4" /> Export Data
            </Button>
          </div>

          <TabsContent value="donors">
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <div className="p-6 border-b bg-muted/30 flex justify-between items-center">
                <CardTitle className="text-lg">Donor Management</CardTitle>
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <Filter className="w-4 h-4" /> Filter
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="pl-6">Donor Name</TableHead>
                    <TableHead>Blood Group</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Joined Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donors.map((donor) => (
                    <TableRow key={donor.id}>
                      <TableCell className="pl-6">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{donor.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{donor.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">
                          {donor.group}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{donor.location}</TableCell>
                      <TableCell className="text-sm">{donor.joined}</TableCell>
                      <TableCell>
                        <Badge className={`rounded-full ${donor.status === "Active" ? "bg-green-50 text-green-600 hover:bg-green-100" : "bg-muted text-muted-foreground"}`}>
                          {donor.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2"><CheckCircle2 className="w-4 h-4" /> Approve</DropdownMenuItem>
                            <DropdownMenuItem className="gap-2"><XCircle className="w-4 h-4" /> Deactivate</DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-red-500"><Trash2 className="w-4 h-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <div className="p-6 border-b bg-muted/30 flex justify-between items-center">
                <CardTitle className="text-lg">Blood Request Management</CardTitle>
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <Filter className="w-4 h-4" /> Filter
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="pl-6">Patient</TableHead>
                    <TableHead>Blood Group</TableHead>
                    <TableHead>Hospital</TableHead>
                    <TableHead>Urgency</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="pl-6 font-medium">{req.patient}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">
                          {req.group}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{req.hospital}</TableCell>
                      <TableCell>
                        <Badge variant={req.urgency === "Critical" ? "destructive" : "secondary"} className="rounded-full">
                          {req.urgency}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={`rounded-full ${req.status === "Pending" ? "bg-orange-50 text-orange-600" : req.status === "Approved" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>
                          {req.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full text-red-500">
                            <XCircle className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-primary">
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
