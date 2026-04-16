import { ArrowRight, BookOpen, Clock, Play, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items: [React.RefObject<HTMLDivElement>, string, number][] = [
      [leftRef,  "translateX(-32px) translateY(10px)", 0],
      [rightRef, "translateX(32px)  translateY(10px)", 130],
    ];
    items.forEach(([ref, from, delayMs]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity   = "0";
      el.style.transform = from;
      setTimeout(() => {
        el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
        el.style.opacity    = "1";
        el.style.transform  = "translateX(0) translateY(0)";
      }, delayMs);
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5faff 0%, #e6f2ff 40%, #d6ebff 100%)",
        paddingTop:    "clamp(3rem, 7vw, 6.5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5.5rem)",
      }}
    >
      {/* Layered radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 50%, rgba(4,140,228,0.25), transparent 40%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 30%, rgba(4,140,228,0.15), transparent 40%)" }} />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(4,140,228,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div ref={leftRef} className="flex flex-col gap-5 sm:gap-6 lg:gap-7">

            {/* Heading */}
            <h1
              className="font-bold"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "#0B2545" }}
            >
              Learn Skills That
              <br />
              <span style={{ display: "inline-block" }}>
                <span
                  style={{
                    display: "inline",
                    background: "linear-gradient(135deg, #048CE4 0%, #0270C0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    paddingBottom: "4px",
                  }}
                >
                  Actually Matter
                </span>
              </span>
              <br />
              in Today's World
            </h1>

            {/* Accent underline */}
            <div
              className="w-12 sm:w-16 h-[2.5px] sm:h-[3px] rounded-full -mt-2 sm:-mt-3"
              style={{
                background: "linear-gradient(90deg, #048CE4, #0270C0)",
                animation: "growLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both",
              }}
            />

            {/* Subtext */}
            <p className="leading-[1.7] sm:leading-[1.8] max-w-[430px]" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#3D6B8E" }}>
              Industry-aligned courses, virtual internships, and expert mentorship built to launch real careers, not just certificates.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
              <a
                href="/#courses"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                style={{
                  fontSize: "clamp(13px, 1.5vw, 14px)",
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #048CE4 0%, #0270C0 100%)",
                  boxShadow: "0 4px 20px rgba(4,140,228,0.38)",
                }}
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                style={{
                  fontSize: "clamp(13px, 1.5vw, 14px)",
                  padding: "11px 18px",
                  color: "#0B2545",
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(4,140,228,0.25)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(4,140,228,0.6)"; (e.currentTarget as HTMLElement).style.color = "#048CE4"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(4,140,228,0.25)"; (e.currentTarget as HTMLElement).style.color = "#0B2545"; }}
              >
                <span
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #048CE4, #0270C0)" }}
                >
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ color: "#0B2545" }}>4.9</span>
                <span className="text-xs font-medium" style={{ color: "#6B9AB8" }}>(2.4k reviews)</span>
              </div>

              <div className="w-px h-3 sm:h-4 hidden sm:block" style={{ backgroundColor: "rgba(4,140,228,0.2)" }} />

              {[
                { icon: Users,    label: "50K+ Learners" },
                { icon: BookOpen, label: "15+ Courses"   },
                { icon: Clock,    label: "24/7 Access"   },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1 sm:gap-1.5">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: "#048CE4" }} />
                  <span className="text-xs font-medium" style={{ color: "#3D6B8E" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div ref={rightRef} className="relative flex justify-center lg:justify-end">

            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none -z-10"
              style={{
                inset: -60,
                background: "radial-gradient(ellipse at 55% 50%, rgba(4,140,228,0.18) 0%, rgba(4,140,228,0.08) 50%, transparent 72%)",
                filter: "blur(32px)",
              }}
            />

            {/* Tilt card */}
            <div
              className="group relative w-full"
              style={{
                maxWidth: 560,
                transform: "perspective(1400px) rotateY(-4deg) rotateX(2deg)",
                transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "perspective(1400px) rotateY(0deg) rotateX(0deg) translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "perspective(1400px) rotateY(-4deg) rotateX(2deg)";
              }}
            >
              {/* Gradient border */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: -1.5,
                  borderRadius: "31px 81px 31px 81px",
                  background: "linear-gradient(135deg, rgba(4,140,228,0.5), rgba(4,140,228,0.25), rgba(4,140,228,0.15))",
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <div
                className="relative z-10"
                style={{
                  borderRadius: "30px 80px 30px 80px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.07), 0 28px 60px rgba(4,140,228,0.14), 0 56px 96px rgba(0,0,0,0.07)",
                }}
              >
                {/* Sheen */}
                <div
                  className="absolute top-0 left-0 w-3/5 h-1/4 pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
                    borderRadius: "30px 0 0 0",
                  }}
                />
                <div className="aspect-[4/3]">
                  <img
                    src="/images/home.png"
                    alt="Students learning online with Edutainer"
                    className="transition-transform duration-700 group-hover:scale-[1.025]"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              {/* Ground shadow */}
              <div
                className="absolute pointer-events-none -z-10"
                style={{
                  bottom: -18, left: "8%", right: "8%", height: 36,
                  background: "linear-gradient(90deg, rgba(4,140,228,0.15), rgba(4,140,228,0.22), rgba(4,140,228,0.15))",
                  filter: "blur(18px)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes growLine {
          from { width: 0; }
          to   { width: 4rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
