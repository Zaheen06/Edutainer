import { motion } from "framer-motion";
import { Settings, UserCheck, SlidersHorizontal, Wifi } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Hands-On Learning",
    desc: "Engage with projects designed to build real skills.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    desc: "Get one-on-one guidance to help you succeed.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Courses",
    desc: "Choose from a variety of courses to suit your learning style.",
  },
  {
    icon: Wifi,
    title: "Virtual Internships",
    desc: "Gain real-world experience through virtual internships.",
  },
];

const ServicesSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <s.icon className="w-8 h-8 mx-auto mb-4 text-foreground" />
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
