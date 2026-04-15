import { Settings, User, BookOpen, Briefcase, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    id: "hands-on",
    icon: Settings,
    title: "Hands-On Learning",
    description: "Engage with projects designed to build real skills through practical application.",
    link: "#courses",
  },
  {
    id: "support",
    icon: User,
    title: "Personalized Support",
    description: "Get one-on-one guidance to help you succeed in your learning journey.",
    link: "#contact",
  },
  {
    id: "flexible",
    icon: BookOpen,
    title: "Flexible Courses",
    description: "Choose from a variety of courses to suit your learning style and schedule.",
    link: "#courses",
  },
  {
    id: "internships",
    icon: Briefcase,
    title: "Virtual Internships",
    description: "Gain real-world experience through virtual internships with top companies.",
    link: "#courses",
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD COMPONENT
───────────────────────────────────────────── */
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <div
      className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 16px rgba(4, 140, 228, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(4, 140, 228, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(4, 140, 228, 0.08)";
      }}
    >
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
        style={{
          background: "linear-gradient(135deg, #048CE4 0%, #0480E8 100%)",
          boxShadow: "0 4px 12px rgba(4, 140, 228, 0.2)",
        }}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Read More Link */}
      <a
        href={link}
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
        style={{ color: "#048CE4" }}
      >
        Read more
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const SimpleServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(239, 246, 255, 0.4) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container Wrapper */}
        <div
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(239, 246, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)",
            boxShadow: "0 20px 60px rgba(4, 140, 228, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: "#048CE4", letterSpacing: "0.1em" }}
            >
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Our Services
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
              Comprehensive learning solutions designed to empower your educational journey
              and career growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/#courses"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #048CE4 0%, #0454AC 100%)",
                boxShadow: "0 4px 16px rgba(4, 140, 228, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(4, 140, 228, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(4, 140, 228, 0.3)";
              }}
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleServicesSection;
