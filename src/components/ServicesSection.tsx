import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Users, Briefcase, Layers, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SLIDE_DURATION = 5500; // ms per slide

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
    accentColor: "#2563EB",
    lightBg: "#EFF6FF",
    lightAccent: "#BFDBFE",
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
    accentColor: "#059669",
    lightBg: "#F0FDF4",
    lightAccent: "#A7F3D0",
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
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0); // Force animation restart
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const active = tabs[activeIndex];
  const ActiveIcon = active.icon;

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const transitionTo = useCallback((nextIndex: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setVisible(true);
      setAnimationKey(prev => prev + 1); // Reset animation
      startTimeRef.current = Date.now();
    }, 320);
  }, []);

  const startCycle = useCallback(() => {
    clearTimers();
    startTimeRef.current = Date.now();
    
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % tabs.length;
        transitionTo(next);
        return prev;
      });
    }, SLIDE_DURATION);
  }, [transitionTo]);

  useEffect(() => {
    startCycle();
    return clearTimers;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    clearTimers();
    transitionTo(index);
    setTimeout(() => startCycle(), 350);
  };

  const handleMouseEnter = () => {
    setPaused(true);
    pauseTimeRef.current = Date.now();
  };

  const handleMouseLeave = () => {
    setPaused(false);
    const pauseDuration = Date.now() - pauseTimeRef.current;
    startTimeRef.current += pauseDuration;
  };

  return (
    <section
      id="features"
      className="py-16 lg:py-24 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-custom">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-full mb-4 uppercase tracking-[0.1em]">
            What We Offer
          </span>
          <h2
            className="text-3xl md:text-[2.6rem] font-bold text-gray-900 mb-4 leading-[1.1]"
            style={{ letterSpacing: "-0.025em" }}
          >
            Everything You Need to Succeed
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed text-gray-500">
            Four pillars that make Edutainer the platform learners trust to
            launch and grow their careers.
          </p>
        </div>

        {/* ── Tab Row ── */}
        <div className="relative overflow-x-auto">
          <div
            className="flex items-end min-w-max md:min-w-0 md:justify-center border-b border-[var(--border-color)]"
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
                  className="relative flex items-center gap-2.5 px-6 py-4 text-base font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none"
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-gray-500)',
                    backgroundColor: 'transparent'
                  }}
                >
                  <Icon
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: isActive ? 'var(--color-primary)' : 'var(--color-gray-400)'
                    }}
                  />
                  <span className="ml-1">{tab.label}</span>

                  {/* Animated underline background */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full"
                      style={{
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                        height: '3px'
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
            <div className="p-10 lg:p-14 flex flex-col justify-center">
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

              <p className="text-base text-[#475569] leading-relaxed mb-8 max-w-md">
                {active.description}
              </p>

              <a
                href="#courses"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: active.accentColor }}
              >
                Explore this area
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: stats */}
            <div
              className="p-10 lg:p-14 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l"
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

        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .progress-bar {
          animation: progressFill ${SLIDE_DURATION}ms linear forwards;
          background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
