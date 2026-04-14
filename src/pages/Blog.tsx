import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Share2,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why Regular Blood Donation is Good for Your Heart",
      excerpt: "Did you know that donating blood can actually reduce the risk of heart disease? Learn about the health benefits for donors.",
      author: "Dr. Sarah Ahmed",
      date: "April 10, 2024",
      category: "Health Tips",
      image: "https://picsum.photos/seed/blog1/800/600",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Common Myths About Blood Donation Debunked",
      excerpt: "Many people are afraid to donate blood due to misconceptions. We're here to clear the air and tell you the truth.",
      author: "Manob Unnoyon Team",
      date: "March 28, 2024",
      category: "Awareness",
      image: "https://picsum.photos/seed/blog2/800/600",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How to Prepare for Your First Blood Donation",
      excerpt: "Feeling nervous about your first time? Follow our simple guide to ensure a smooth and comfortable experience.",
      author: "Rahat Kabir",
      date: "March 15, 2024",
      category: "Guide",
      image: "https://picsum.photos/seed/blog3/800/600",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Role of Youth in Social Development",
      excerpt: "Exploring how the younger generation can drive positive change through volunteerism and community service.",
      author: "Prof. M. Islam",
      date: "February 20, 2024",
      category: "Development",
      image: "https://picsum.photos/seed/blog4/800/600",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Awareness <span className="text-primary">Blog</span></h1>
          <p className="text-xl text-muted-foreground">Insights, health tips, and stories from our community to keep you informed and inspired.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 rounded-full h-12 bg-muted/30 border-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-12">
          {posts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-none shadow-none bg-transparent flex flex-col md:flex-row gap-8">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden rounded-[2rem]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-3/5 flex flex-col justify-center py-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 border-none px-3">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">
                        {post.author[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold">{post.author}</span>
                        <span className="text-[10px] text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-full gap-2 group/btn">
                      Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          <div className="pt-8 flex justify-center">
            <Button variant="outline" className="rounded-full px-12 h-12">Load More Articles</Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <Card className="border-none shadow-xl rounded-[2rem] bg-primary text-white p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">Get the latest health tips and community stories delivered to your inbox.</p>
              <div className="space-y-3">
                <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl h-11" />
                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-11 font-bold">Subscribe</Button>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" /> Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Health", "Blood Donation", "Community", "Youth", "Safety", "Nutrition", "First Aid", "Volunteering"].map(tag => (
                <Badge key={tag} variant="outline" className="rounded-full px-4 py-1.5 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="border-none shadow-lg rounded-[2rem] p-8 bg-muted/30">
            <h3 className="font-heading font-bold text-xl mb-6">Featured Story</h3>
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/seed/featured/400/300" 
                alt="Featured" 
                className="rounded-2xl w-full h-40 object-cover"
                referrerPolicy="no-referrer"
              />
              <h4 className="font-bold leading-tight hover:text-primary cursor-pointer transition-colors">How One Donation Saved a Family of Four</h4>
              <p className="text-xs text-muted-foreground">A heart-touching story of resilience and the power of community support.</p>
              <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold">Read Story</Button>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Clock(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
