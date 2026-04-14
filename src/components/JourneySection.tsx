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
    <section className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-full mb-5 uppercase tracking-[0.1em]">
                Get Started
              </span>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-gray-900 mb-4 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
                Start Your Journey with Edutainer
              </h2>
              <p className="text-base text-gray-500 max-w-lg mx-auto leading-[1.7]">
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
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[20px] overflow-hidden group flex flex-col cursor-default"
                style={{ 
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(37,99,235,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    loading="lazy"
                    style={{ transition: 'transform 0.3s ease' }}
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
                    >
                      {option.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2563EB]">{option.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed flex-1">{option.description}</p>
                  <Button 
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-semibold transition-all duration-200 group/btn"
                    size="sm"
                    style={{ transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {option.contactLabel}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-14"
          style={{ 
            borderTop: '1px solid #E2E8F0',
            backgroundColor: '#F8FAFF',
            marginLeft: '-2rem',
            marginRight: '-2rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '3.5rem',
            paddingBottom: '3.5rem'
          }}
        >
          {[
            { number: "10k+", label: "Active Students" },
            { number: "50+", label: "Courses Available" },
            { number: "95%", label: "Success Rate" },
            { number: "500+", label: "Career Opportunities" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2">{stat.number}</div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
