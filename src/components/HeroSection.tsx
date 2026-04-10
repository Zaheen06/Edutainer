import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const stats = [
    {
      value: "100%",
      label: "Placement Support",
      description: "Real-world experience with top companies.",
      icon: Award,
    },
    {
      value: "50+",
      label: "New Courses",
      description: "Stay ahead with the latest tech trends.",
      icon: BookOpen,
    },
    {
      value: "24/7",
      label: "Access",
      description: "Learn at your own pace, anytime.",
      icon: Clock,
    },
    {
      value: "400+",
      label: "Expert Instructors",
      description: "Seasoned educators & industry leaders.",
      icon: Users,
    },
  ];

  const features = [
    "Flexible Learning",
    "Expert Instructors",
    "Industry Driven Internship",
    "Cutting-Edge Courses",
  ];

  return (
    <section className="relative pt-24 pb-20 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/60 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container-custom relative">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-[1.1] tracking-tight">
              Learning for the{" "}
              <span className="text-blue-600">Modern World</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
              Reshaping education where accessibility and inclusivity meet real industry experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Button size="lg" className="btn-primary px-8 h-12 rounded-xl text-sm font-semibold">
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-xl text-sm font-semibold px-8">
              Learn More
            </Button>
          </motion.div>

          {/* Feature tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-full"
              >
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                {f}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1.5">{stat.label}</div>
                <p className="text-xs text-gray-400 leading-snug">{stat.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
