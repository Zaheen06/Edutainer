import { motion } from "framer-motion";
import { Settings, UserCheck, SlidersHorizontal, Wifi } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Hands-On Learning",
    desc: "Engage with projects designed to build real skills you can apply on day one.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    desc: "Get one-on-one guidance tailored to your goals and learning pace.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Courses",
    desc: "Choose from a variety of courses to suit your schedule and learning style.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Wifi,
    title: "Virtual Internships",
    desc: "Gain real-world experience through fully remote, structured internships.",
    color: "bg-amber-50 text-amber-600",
  },
];

const ServicesSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
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
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Your Learning Journey
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive learning solutions designed to help you succeed in today's competitive landscape
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
