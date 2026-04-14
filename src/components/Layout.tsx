import React, { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Droplet, 
  Search, 
  UserPlus, 
  LayoutDashboard, 
  Activity, 
  Info, 
  Phone, 
  Menu, 
  X, 
  Bell, 
  Moon, 
  Sun,
  Heart,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Droplet className="w-4 h-4" /> },
    { name: "Find Blood", path: "/find-blood", icon: <Search className="w-4 h-4" /> },
    { name: "Become a Donor", path: "/become-donor", icon: <UserPlus className="w-4 h-4" /> },
    { name: "Activities", path: "/activities", icon: <Activity className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Droplet className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none tracking-tight">
                Manob Unnoyon
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                O Rokto Joddha
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant={location.pathname === link.path ? "secondary" : "ghost"}
                  className={`rounded-full px-4 ${location.pathname === link.path ? "bg-primary/10 text-primary hover:bg-primary/20" : ""}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                  <span className="font-semibold text-xs text-primary">Emergency Request</span>
                  <p className="text-xs text-muted-foreground">O+ blood needed at Dhaka Medical College</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/donor-dashboard" className="hidden sm:block">
              <Button className="rounded-full shadow-lg shadow-primary/20">
                Dashboard
              </Button>
            </Link>

            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-8 h-8 text-primary fill-current" />
                    <span className="font-heading font-bold text-2xl">Manob Unnoyon</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link key={link.path} to={link.path}>
                        <Button 
                          variant={location.pathname === link.path ? "secondary" : "ghost"}
                          className="w-full justify-start gap-3 h-12 rounded-xl text-lg"
                        >
                          {link.icon}
                          {link.name}
                        </Button>
                      </Link>
                    ))}
                    <Separator className="my-4" />
                    <Link to="/donor-dashboard">
                      <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl text-lg">
                        <LayoutDashboard className="w-5 h-5" />
                        Donor Dashboard
                      </Button>
                    </Link>
                    <Link to="/admin-dashboard">
                      <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl text-lg">
                        <ShieldCheck className="w-5 h-5" />
                        Admin Panel
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-2">
                <Droplet className="w-6 h-6 text-primary fill-current" />
                <span className="font-heading font-bold text-xl">Manob Unnoyon</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dedicated to saving lives through blood donation and fostering human development in our community. Join our mission today.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Heart className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><Link to="/find-blood" className="hover:text-primary transition-colors">Find Blood</Link></li>
                <li><Link to="/become-donor" className="hover:text-primary transition-colors">Become a Donor</Link></li>
                <li><Link to="/request-blood" className="hover:text-primary transition-colors">Request Blood</Link></li>
                <li><Link to="/activities" className="hover:text-primary transition-colors">Our Activities</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-6">Support</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Awareness Blog</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-6">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest activities and emergency requests.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background border rounded-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm" className="rounded-lg">Join</Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2024 Manob Unnoyon O Rokto Joddha. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={`h-[1px] bg-border ${className}`} />;
}
