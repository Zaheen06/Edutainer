import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col">
      {/* Background image */}
      <div className="relative flex-1 flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative container mx-auto px-4 pt-28 pb-16 flex-1 flex flex-col justify-between">
          {/* 24/7 Access card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-foreground/70 backdrop-blur-md rounded-xl p-6 max-w-sm border border-border/20"
          >
            <h2 className="text-4xl font-bold text-primary-foreground">24/7</h2>
            <h3 className="text-xl font-semibold text-primary-foreground">Access</h3>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Learn at your own pace, anytime, anywhere.
            </p>
          </motion.div>

          {/* Feature bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12 text-primary-foreground"
          >
            {[
              "Flexible Learning",
              "Expert Instructors",
              "Industry Driven Internship",
              "Cutting-Edge Courses",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-3 text-sm font-semibold">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Learning for the Modern<br />World
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl">
                Reshaping Learning for the Modern World, where Education Meets Accessibility and Inclusivity.
              </p>
            </div>
            <Button size="lg" className="gap-2 text-lg px-10 py-6 rounded-full">
              Explore Courses <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
