import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useEffect } from "react";
import {
  Target,
  Rocket,
  Users,
  Award,
  Lightbulb,
  Globe,
  Heart,
  Handshake,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

// Import images
import heroImage from "@/assets/images/about/about-hero-learning.png";
import visionImage from "@/assets/images/about/about-vision-future.png";
import missionImage from "@/assets/images/about/about-innovation-ai.png";
import vtuCollabImage from "/collaboration-vtu.png";
import journeyImage from "@/assets/images/about/about-journey-growth.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const impactStats = [
  { number: "50K+", label: "Learners Empowered", icon: Users, color: "blue" },
  { number: "1,000+", label: "Virtual Internships", icon: Rocket, color: "violet" },
  { number: "90%", label: "Completion Rate", icon: Award, color: "emerald" },
  { number: "20+", label: "Partner Organizations", icon: Handshake, color: "amber" },
];



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

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; number: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    number: "text-blue-700",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    number: "text-violet-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    number: "text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    number: "text-amber-700",
  },
};

/* ─────────────────────────────────────────────
   OUR STORY — Premium Zig-Zag with Scroll Animations
───────────────────────────────────────────── */
const storyPhases = [
  {
    id: "founded",
    number: "01",
    tag: "Founded",
    title: "Our Journey of Innovation Began",
    para1: "In 2018, Edutainer was established with a singular mission — to innovate the future of education. We committed from day one to transforming learning into a more engaging, practical, and future-ready experience.",
    para2: "Since inception, our journey reflects continuous growth, innovation, and a strong dedication to empowering learners for real-world success — serving over 50,000 students through skill enhancement and career-focused programs.",
    image: journeyImage,
    imgScale: "scale-100",
    imgPosition: "object-center",
    stats: [
      { value: "50K+", label: "Students" },
      { value: "10+", label: "Programs" },
      { value: "90%", label: "Success Rate" },
    ],
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentMid: "#BFDBFE",
    accentDark: "#1D4ED8",
  },
  {
    id: "collaboration",
    number: "02",
    tag: "Collaboration",
    title: "Strengthening Industry-Academic Bonds",
    para1: "Our landmark partnership with VTU focuses on upskilling students through job-ready courses and virtual internships, preparing them with practical skills needed for the fast-paced tech industry.",
    para2: "Through this collaboration, we bridge the gap between academia and industry by providing hands-on learning experiences that enhance employability and career readiness at massive scale.",
    image: vtuCollabImage,
    imgScale: "scale-100",
    imgPosition: "object-center",
    stats: [
      { value: "1", label: "Premier Partner" },
      { value: "1K+", label: "Internships" },
      { value: "Real", label: "World Exposure" },
    ],
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentMid: "#DDD6FE",
    accentDark: "#6D28D9",
  },
  {
    id: "growth",
    number: "03",
    tag: "Growth",
    title: "Expanding Opportunities at Scale",
    para1: "We launched 15+ successful programs designed to upskill engineering students and professionals in high-demand fields, driving their career growth and job readiness at an unprecedented scale.",
    para2: "Proudly partnered with a prestigious technological university to support 400,000+ engineering students across Karnataka, delivering industry-aligned learning experiences that forge future-focused career paths.",
    image: heroImage,
    imgScale: "scale-100",
    imgPosition: "object-center",
    stats: [
      { value: "15+", label: "Programs" },
      { value: "400K+", label: "Reached" },
      { value: "100%", label: "Industry-aligned" },
    ],
    accent: "#059669",
    accentLight: "#ECFDF5",
    accentMid: "#A7F3D0",
    accentDark: "#047857",
  },
  {
    id: "impact",
    number: "04",
    tag: "Impact",
    title: "Transforming the Education Ecosystem",
    para1: "From individual learners to university-wide implementations, our focus remains on providing accessible, engaging, and highly effective learning experiences that create lasting impact.",
    para2: "We continue to innovate and scale our reach, ensuring that every learner — regardless of background or geography — has access to quality education that prepares them for the challenges and opportunities of tomorrow.",
    image: visionImage,
    imgScale: "scale-100",
    imgPosition: "object-center",
    stats: [
      { value: "∞", label: "Innovation" },
      { value: "Global", label: "Scale" },
      { value: "Future", label: "Ready" },
    ],
    accent: "#D97706",
    accentLight: "#FFFBEB",
    accentMid: "#FDE68A",
    accentDark: "#B45309",
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
      className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
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
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── Text ── */}
      <div className={`zz-txt ${isImageLeft ? "lg:order-2" : "lg:order-1"} flex flex-col gap-5`}>
        {/* Vertical accent line */}
        <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: phase.accent }} />

        {/* Heading */}
        <h3
          className="text-[1.75rem] lg:text-[2rem] font-bold text-gray-900 leading-[1.2]"
          style={{ letterSpacing: "-0.025em" }}
        >
          {phase.title}
        </h3>

        {/* Body */}
        <p className="text-[15px] text-gray-500 leading-[1.8]">{phase.para1}</p>
        <p className="text-[15px] text-gray-400 leading-[1.8]">{phase.para2}</p>
      </div>
    </div>
  );
};

const StorySection = () => (
  <section className="relative py-24 bg-white overflow-hidden">

    {/* Single very subtle background wash — no noise */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #F0F5FF 0%, transparent 70%)" }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <div className="mb-20 max-w-xl">
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-600 mb-4">Our Story</p>
        <h2
          className="text-4xl lg:text-[3rem] font-bold text-gray-900 leading-[1.1]"
          style={{ letterSpacing: "-0.025em" }}
        >
          A Journey of Innovation
        </h2>
        <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-md">
          Four defining phases that shaped our mission to transform education for the modern world.
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-24 lg:gap-32">
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

      {/* ══════════════════════════════════════
          HERO — Split layout, clean and bold
      ══════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        {/* Subtle background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-60 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="max-w-xl animate-fade-up">
              <h1 className="text-5xl lg:text-[3.75rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Building the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Future</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100 -z-0 rounded" />
                </span>{" "}
                of Education
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                A future-ready educational ecosystem where innovation meets
                opportunity — empowering learners to unlock their full potential
                and shape the world.
              </p>


            </div>

            {/* Right: hero image with decorative frame */}
            <div className="relative animate-fade-in">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-100 pointer-events-none z-0" />
                <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Edutainer — Building the Future of Education"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISION & MISSION — Zig-zag layout
      ══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-xl mb-20">
            <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
              Driven by Purpose,<br />Guided by Vision
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every decision we take is rooted in a clear purpose — to make
              education transformative, accessible, and aligned with the real world.
            </p>
          </div>

          <div className="space-y-24">
            {/* Vision — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={visionImage}
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
                <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                  A Transformative Educational Ecosystem
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  To build a transformative and future-ready educational ecosystem
                  where innovation meets opportunity, empowering learners from all
                  backgrounds to unlock their full potential. We envision education
                  as a catalyst for creativity, critical thinking, and real-world
                  problem-solving.
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
                <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                  Bridging Learning and Modern Technology
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  To bridge the gap between conventional learning and modern
                  technology by transforming traditional education into a more
                  accessible, engaging, and future-focused experience — equipping
                  learners with practical skills and real-world knowledge for
                  careers that matter.
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
                    src={missionImage}
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-blue-600 mb-3 block">
              Our Impact
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Numbers That Tell Our Story
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                value: "50K+",
                label: "Learners Empowered",
                desc: "Empowering over 50,000 learners with accessible, technology-driven education that builds confidence and career readiness.",
                color: "blue",
              },
              {
                value: "1,000+",
                label: "Virtual Internships",
                desc: "Delivering 1,000+ virtual internships that connect academic learning with meaningful industry experience.",
                color: "violet",
              },
              {
                value: "90%",
                label: "Completion Rate",
                desc: "Maintaining a 90% completion rate through engaging, simplified, and learner-focused educational experiences.",
                color: "emerald",
              },
              {
                value: "20+",
                label: "Partner Organizations",
                desc: "Partnering with 20+ organizations to expand opportunities and enhance the impact of quality education.",
                color: "amber",
              },
            ].map((item, i) => {
              const palette: Record<string, { bar: string; num: string; bg: string; border: string }> = {
                blue:    { bar: "bg-blue-500",    num: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100" },
                violet:  { bar: "bg-violet-500",  num: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
                emerald: { bar: "bg-emerald-500", num: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
                amber:   { bar: "bg-amber-500",   num: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
              };
              const p = palette[item.color];
              return (
                <div
                  key={item.label}
                  className={`relative bg-white rounded-2xl p-7 border ${p.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${p.bar} rounded-t-2xl`} />

                  <div className={`text-4xl font-bold tracking-tight mb-2 ${p.num}`}>
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-3">{item.label}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
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
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              The principles that guide every decision, every product, every partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

                  <div className={`mt-6 pt-5 border-t ${value.borderColor}`}>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${value.textColor}`}>
                      <Zap className="w-3 h-3" />
                      Core Principle
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VTU PARTNERSHIP — Full highlight band
      ══════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
                Strategic Partnership
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
                Empowering 400,000+ Engineers with VTU
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our partnership with Visvesvaraya Technological University (VTU)
                is our most impactful collaboration to date — delivering
                job-ready programs and virtual internships to over 400,000
                engineering students across Karnataka.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "400K+", label: "Students Reached" },
                  { value: "1,000+", label: "Internships" },
                  { value: "15+", label: "Programs" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 tracking-tight">{s.value}</div>
                    <div className="text-xs font-medium text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-sm shadow-md shadow-blue-200"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={vtuCollabImage}
                  alt="VTU Partnership"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-blue-600 opacity-10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-14 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
                <BookOpen className="w-3.5 h-3.5" />
                Start Today
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join over 50,000 learners who are already building their future
                with Edutainer's world-class programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#courses"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-md text-sm"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
