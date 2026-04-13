import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import FindBlood from "@/pages/FindBlood";
import BecomeDonor from "@/pages/BecomeDonor";
import RequestBlood from "@/pages/RequestBlood";
import DonorDashboard from "@/pages/DonorDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import Activities from "@/pages/Activities";
import Blog from "@/pages/Blog";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-blood" element={<FindBlood />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/request-blood" element={<RequestBlood />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" />
    </Router>
  );
}
