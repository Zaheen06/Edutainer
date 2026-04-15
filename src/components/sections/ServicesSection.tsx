import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Users, Briefcase, Layers } from "lucide-react";
import { SectionHeader } from "@/components/common";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SLIDE_DURATION = 5000; // ms — progress bar + auto-advance

const tabs = [
  {
    id: "flexible-learning",
    label: "Flexible Learning",
    icon: Clock,
    heading: "Learn on Your\nOwn Schedule",
    description:
      "Our platform adapts to your lifestyle, not the other way around. Study from anywhere, revisit any lesson, and pace yourself through a curriculum that's always available — whether it's 6 AM or midnight.",
    stats: [
      { value: "24/7", label: "Platform Access" },
      { value: "100%", label: "Self-paced Modules" },
      { value: "50+", label: "Learning Tracks" },
    ],
    accentColor: "#048CE4",
    lightBg: "#EFF6FF",
    lightAccent: "#BFDBFE",
    progressGradient: "linear-gradient(90deg, #048CE4, #0270C0)",
  },
  {
    id: "expert-instructors",
    label: "Expert Instructors",
    icon: Users,
    heading: "Guided by the\nBest in the Field",
    description:
      "Learn directly from seasoned educators and active industry leaders who combine academic depth with real-world execution. Every course is crafted and reviewed by professionals with proven track records.",
    stats: [
      { value: "400+", label: "Expert Instructors" },
      { value: "15+", label: "Industries Covered" },
      { value: "4.8★", label: "Average Rating" },
    ],
    accentColor: "#7C3AED",
    lightBg: "#F5F3FF",
    lightAccent: "#DDD6FE",
    progressGradient: "linear-gradient(90deg, #7C3AED, #6D28D9)",
  },
  {
    id: "industry-internship",
    label: "Industry Driven Internship",
    icon: Briefcase,
    heading: "Real Work.\nReal Experience.",
    description:
      "Bridge the gap between theory and practice through fully structured virtual internships with top organizations. Build a portfolio, earn references, and step into the workforce with confidence.",
    stats: [
      { value: "1,000+", label: "Internships Awarded" },
      { value: "100%", label: "Placement Support" },
      { value: "400K+", label: "Students Empowered" },
    ],
    accentColor: "#16a34a",
    lightBg: "#F0FDF4",
    lightAccent: "#A7F3D0",
    progressGradient: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
  {
    id: "cutting-edge-courses",
    label: "Cutting-Edge Courses",
    icon: Layers,
    heading: "Curriculum Built\nfor Tomorrow",
    description:
      "Stay ahead of the curve with courses continuously updated to reflect the latest in technology, AI, cloud, data science, and more. Our content evolves so your skills never go stale.",
    stats: [
      { value: "50+", label: "New Courses/Year" },
      { value: "10+", label: "Tech Domains" },
      { value: "90%", label: "Completion Rate" },
    ],
    accentColor: "#D97706",
    lightBg: "#FFFBEB",
    lightAccent: "#FDE68A",
    progressGradient: "linear-gradient(90deg, #D97706, #F59E0B)",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // bump to restart CSS animation
  const [visible, setVisible] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const goTo = useCallback((next: number) => {
    // Fade content out
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(next);
      setProgressKey(k => k + 1); // restart progress animation
      setVisible(true);
    }, 280);
  }, []);

  const scheduleNext = useCallback((fromIndex: number) => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      const next = (fromIndex + 1) % tabs.length;
      goTo(next);
    }, SLIDE_DURATION);
  }, [goTo]);

  // Start timer whenever activeIndex changes
  useEffect(() => {
    scheduleNext(activeIndex);
    return clearTimer;
  }, [activeIndex, scheduleNext]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    clearTimer();
    goTo(index);
  };

  const active = tabs[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="What We Offer"
          title="Everything You Need to Succeed"
          description="Four pillars that make Edutainer the platform learners trust to launch and grow their careers."
          className="mb-16"
        />

        {/* ── Tab Row ── */}
        <div className="relative overflow-x-auto">
          <div
            className="flex items-end min-w-max md:min-w-0 md:justify-center border-b border-gray-200"
            role="tablist"
          >
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(index)}
                  className="relative flex items-center gap-2.5 px-6 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none"
                  style={{ color: isActive ? tab.accentColor : "#6B7280" }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: isActive ? tab.accentColor : "#9CA3AF" }} />
                  <span>{tab.label}</span>

                  {/* Track line — always visible, gray */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-gray-100"
                  />

                  {/* Progress fill — only on active tab, keyed to restart */}
                  {isActive && (
                    <span
                      key={progressKey}
                      className="absolute bottom-0 left-0 h-[3px] rounded-t-full"
                      style={{
                        background: tab.progressGradient,
                        animation: `tabProgress ${SLIDE_DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider fade */}
        <div
          className="h-px mb-10"
          style={{
            background:
              "linear-gradient(to right, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)",
          }}
        />

        {/* ── Content Panel ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: active.lightBg,
            boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
            transition: "background-color 0.35s ease",
          }}
        >
          <div
            className="grid md:grid-cols-2 gap-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {/* Left: text */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div
                className="flex items-center gap-2 mb-5"
                style={{ color: active.accentColor }}
              >
                <ActiveIcon className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {active.label}
                </span>
              </div>

              <h3
                className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-5 leading-tight"
                style={{ letterSpacing: "-0.02em", whiteSpace: "pre-line" }}
              >
                {active.heading}
              </h3>

              <p className="text-base text-[#475569] leading-relaxed max-w-md">
                {active.description}
              </p>
            </div>

            {/* Right: stats */}
            <div
              className="p-10 lg:p-16 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l"
              style={{ borderColor: active.lightAccent }}
            >
              {active.stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-5">
                  <div
                    className="w-1 h-10 rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: active.accentColor, opacity: 0.35 }}
                  />
                  <div>
                    <div
                      className="text-3xl font-bold leading-none tracking-tight mb-1"
                      style={{ color: active.accentColor, letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-[#6B7280]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        #features button[role="tab"] {
          -webkit-tap-highlight-color: transparent;
        }
        @keyframes tabProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes tabProgress { from { width: 100%; } to { width: 100%; } }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
