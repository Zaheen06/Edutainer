import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SimpleServicesSection from "@/components/sections/SimpleServicesSection";
import VTUSection from "@/components/sections/VTUSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import JourneySection from "@/components/sections/JourneySection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SimpleServicesSection />
      <VTUSection />
      <CoursesSection />
      <TestimonialsSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default Index;
