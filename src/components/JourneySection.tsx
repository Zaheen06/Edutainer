import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Briefcase } from "lucide-react";
import journey1 from "@/assets/journey-1.jpg";
import journey2 from "@/assets/journey-2.jpg";
import journey3 from "@/assets/journey-3.jpg";

const journeyOptions = [
  {
    title: "For Universities",
    contactLabel: "Contact Us",
    image: journey1,
    icon: GraduationCap,
    description: "Partner with us to enhance your curriculum with industry-relevant courses and virtual internships.",
    badge: "Universities",
    badgeColor: "bg-blue-50 text-blue-600",
  },
  {
    title: "For Students",
    contactLabel: "Contact Us",
    image: journey2,
    icon: Users,
    description: "Transform your career with hands-on learning, expert mentorship, and real-world projects.",
    badge: "Students",
    badgeColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "For Career Opportunities",
    contactLabel: "Contact Us",
    image: journey3,
    icon: Briefcase,
    description: "Join our team and help shape the future of education with innovative learning solutions.",
    badge: "Careers",
    badgeColor: "bg-emerald-50 text-emerald-600",
  },
];

const JourneySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-5">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Journey with Edutainer
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Whether you're a student, university, or looking for career opportunities, we have the perfect path for you
            </p>
          </motion.div>
        </div>

        {/* Journey Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyOptions.map((option, i) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${option.badgeColor}`}>
                      {option.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{option.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{option.description}</p>
                  <Button className="w-full btn-primary mt-1 rounded-xl" size="sm">
                    {option.contactLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-12 border-t border-gray-100"
        >
          {[
            { number: "50+", label: "University Partners" },
            { number: "10k+", label: "Active Students" },
            { number: "95%", label: "Placement Rate" },
            { number: "500+", label: "Career Opportunities" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
