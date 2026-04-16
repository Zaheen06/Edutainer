import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef, useEffect } from "react";
import {
  Target,
  Rocket,
  Lightbulb,
  Globe,
  Award,
  Heart,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { StatCard } from "@/components/common";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly adapting to bring the latest advancements in technology to education.",
    gradient: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-100",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making education accessible and inclusive for learners, regardless of limitations.",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving to deliver quality in every course, partnership, and support system.",
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description: "Building strong relationships with universities, partners, and communities.",
    gradient: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-100",
  },
];

/* ─────────────────────────────────────────────
   OUR STORY — Premium Zig-Zag with Scroll Animations
───────────────────────────────────────────── */
const storyPhases = [
  {
    id: "founded",
    title: "Our Journey of Innovation Began",
    para1: "In 2018, Edutainer was established with a mission to innovate education. Successfully served over 50,000 students through skill enhancement and career-focused programs.",
    para2: "Since its inception, Edutainer has been committed to transforming learning into a more engaging, practical, and future-ready experience. Our journey reflects continuous growth, innovation, and a strong dedication to empowering learners for real-world success.",
    image: "/images/about/about-journey-growth.svg",
    accent: "#2563EB",
  },
  {
    id: "collaboration",
    title: "Strengthening Industry-Academic Bonds",
    para1: "Our partnership with VTU focuses on upskilling students through job-ready courses and virtual internships, preparing them with practical skills needed for the tech industry.",
    para2: "Through this collaboration, we bridge the gap between academics and industry by providing hands-on learning experiences that enhance employability and career readiness.",
    image: "/images/about/collaboration-vtu.png",
    accent: "#7C3AED",
  },
  {
    id: "growth",
    title: "Expanding Opportunities Through Innovation",
    para1: "Launched 15+ successful programs designed to upskill engineering students and professionals in high-demand fields. Proudly partnered with a prestigious technological university to support 400,000 engineering students, helping to drive their career growth and job readiness.",
    para2: "Through these initiatives, we continue to strengthen our impact by delivering industry-aligned learning experiences that empower learners with practical skills and future-focused career opportunities.",
    image: "/images/about/about-hero-learning.svg",
    accent: "#059669",
  },
  {
    id: "impact",
    title: "Transforming the Education Ecosystem",
    para1: "From individual learners to university-wide implementations, our focus remains on providing accessible, engaging, and highly effective learning experiences that create lasting impact.",
    para2: "We continue to innovate and scale our reach, ensuring that every learner — regardless of background or geography — has access to quality education that prepares them for the challenges and opportunities of tomorrow.",
    image: "/images/about/about-journey-growth.svg",
    accent: "#D97706",
  },
];

/* Hook: animate a single row when it enters the viewport (scroll-triggered) */
const useRowAnimation = (index: number) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isImageLeft = index % 2 === 0;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const imgCol = el.querySelector<HTMLElement>(".zz-img");
    const txtCol = el.querySelector<HTMLElement>(".zz-txt");

    // Set initial hidden state
    [imgCol, txtCol].forEach((node) => {
      if (!node) return;
      node.style.opacity = "0";
      node.style.willChange = "opacity, transform";
    });
    if (imgCol) imgCol.style.transform = isImageLeft ? "translateX(-48px) translateY(16px)" : "translateX(48px) translateY(16px)";
    if (txtCol) txtCol.style.transform = isImageLeft ? "translateX(40px) translateY(16px)" : "translateX(-40px) translateY(16px)";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const staggerBase = index * 200; // 200ms stagger per section

        const animate = (node: HTMLElement | null, extraDelay: number) => {
          if (!node) return;
          const total = staggerBase + extraDelay;
          node.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${total}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${total}ms`;
          node.style.opacity = "1";
          node.style.transform = "translateX(0) translateY(0)";
        };

        animate(imgCol, 0);
        animate(txtCol, 150);
        obs.disconnect();
      },
      // generous rootMargin so rows near top fire on page load without scrolling
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [index, isImageLeft]);

  return rowRef;
};

/* Single story row — balanced 50/50 layout */
const StoryRow = ({ phase, index }: { phase: typeof storyPhases[0]; index: number }) => {
  const rowRef = useRowAnimation(index);
  const isImageLeft = index % 2 === 0;

  return (
    <div
      ref={rowRef}
      className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center"
    >
      {/* ── Image ── */}
      <div className={`zz-img ${isImageLeft ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
        <div
          className="group overflow-hidden rounded-2xl w-full"
          style={{
            maxWidth: "500px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.05)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 8px rgba(0,0,0,0.05), 0 20px 48px rgba(0,0,0,0.11), 0 40px 64px rgba(0,0,0,0.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 2px 4px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.05)";
          }}
        >
          <div className="aspect-[4/3]">
            <img
              src={phase.image}
              alt={phase.title}
              className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── Text ── */}
      <div className={`zz-txt ${isImageLeft ? "lg:order-2" : "lg:order-1"} flex flex-col gap-4 sm:gap-5`}>
        {/* Vertical accent line */}
        <div className="w-6 sm:w-8 h-[2px] rounded-full" style={{ backgroundColor: phase.accent }} />

        {/* Heading */}
        <h3
          className="text-xl sm:text-2xl lg:text-[2rem] font-bold text-gray-900 leading-[1.2]"
          style={{ letterSpacing: "-0.025em" }}
        >
          {phase.title}
        </h3>

        {/* Body */}
        <p className="text-sm sm:text-[15px] text-gray-500 leading-[1.7] sm:leading-[1.8]">{phase.para1}</p>
        <p className="text-sm sm:text-[15px] text-gray-400 leading-[1.7] sm:leading-[1.8]">{phase.para2}</p>
      </div>
    </div>
  );
};

const StorySection = () => (
  <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

    {/* Single very subtle background wash — no noise */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #F0F5FF 0%, transparent 70%)" }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <div className="mb-12 sm:mb-16 lg:mb-20 max-w-xl">
        <h2
          className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-2"
          style={{ letterSpacing: "-0.025em" }}
        >
          Our Story
        </h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 xl:gap-32">
        {storyPhases.map((phase, i) => (
          <StoryRow key={phase.id} phase={phase} index={i} />
        ))}
      </div>
    </div>

    <style>{`
      @media (prefers-reduced-motion: reduce) {
        .zz-img, .zz-txt {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
      }
    `}</style>
  </section>
);

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const About = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-[72px]">

      {/* ══════════════════════════════════════
          ABOUT US — Clean Professional Layout
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-6">
              {/* Section Label */}
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                About Us
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforming Education for a Digital Future
              </h1>

              {/* Description */}
              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Since 2018, we've been on a mission to bridge the gap between traditional learning and modern technology. 
                  We empower over 50,000+ learners with accessible, engaging, and industry-relevant education that transforms careers and lives.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600 mt-1">Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/about/about-hero-learning.svg"
                  alt="About Edutainer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          VISION & MISSION — Zig-zag layout
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Vision — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/about/about-vision-future.svg"
                    alt="Our Vision"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-blue-600 opacity-10 -z-10" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-blue-100">
                  <Target className="w-3.5 h-3.5" />
                  Our Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
                  A Transformative Educational Ecosystem
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8">
                 To build a transformative and future-ready educational ecosystem where innovation meets
                 opportunity, empowering learners from all backgrounds to unlock their full potential. 
                 We envision education as a catalyst for creativity, critical thinking, and real-world 
                 problem-solving in a rapidly evolving global landscape.
                </p>
                <ul className="space-y-3">
                  {[
                    "Future-ready curriculum aligned with industry",
                    "Inclusive access regardless of background",
                    "Catalyst for creativity and critical thinking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-violet-100">
                  <Rocket className="w-3.5 h-3.5" />
                  Our Mission
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
                  Bridging Learning and Modern Technology
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8">
                 To bridge the gap between conventional learning and modern technology by transforming traditional education into a more accessible, engaging, 
                 and future-focused experience. We are committed to delivering simplified, interactive, and industry-relevant educational solutions that equip 
                 learners with practical skills and real-world knowledge.
                </p>
                <ul className="space-y-3">
                  {[
                    "Practical, project-based skill development",
                    "Industry partnerships for real-world exposure",
                    "Mentoring and personalized career support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/about/about-misson.svg"
                    alt="Our Mission"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-violet-600 opacity-10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR IMPACT — After Mission
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
              Our Impact
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <StatCard
              value="50K+"
              label="Learners Empowered"
              description="Empowering over 50,000 learners with accessible, technology-driven education that builds confidence and real-world skills."
            />
            <StatCard
              value="1,000+"
              label="Virtual Internships"
              description="Delivering 1,000+ virtual internships that connect academic learning with meaningful industry experience."
              color="violet"
            />
            <StatCard
              value="90%"
              label="Completion Rate"
              description="Maintaining a 90% completion rate through engaging, simplified, and learner-focused educational experiences."
              color="emerald"
            />
            <StatCard
              value="20+"
              label="Partner Organizations"
              description="Partnering with 20+ organizations to expand opportunities and enhance the impact of quality education."
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY — Z-Pattern Layout
      ══════════════════════════════════════ */}
      <StorySection />

      {/* ══════════════════════════════════════
          CORE VALUES — 4-column icon cards
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
           
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4">
              Our  Values
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
              The principles that guide every decision, every product, every partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`group bg-white rounded-2xl p-7 border ${value.borderColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden`}
                >
                  {/* Decorative gradient blob */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${value.gradient} opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className={`w-12 h-12 ${value.bgLight} rounded-xl flex items-center justify-center mb-6 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${value.textColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <Footer />

      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
