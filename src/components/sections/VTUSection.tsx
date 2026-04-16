import { ArrowRight, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const VTUSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Layered Radial Gradients Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(4, 140, 228, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(4, 84, 172, 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(4, 128, 232, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge & Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Strategic Partnership
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Our Collaboration with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              VTU
            </span>
          </h2>
        </div>

        {/* Asymmetric Floating Layout */}
        <div className="relative grid lg:grid-cols-12 gap-12 items-center">
          
          {/* ═══════════════════════════════════
              LEFT SIDE — Floating Collaboration Image
          ═══════════════════════════════════ */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
            {/* Radial Glow Behind */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: "radial-gradient(circle at center, rgba(4, 140, 228, 0.3) 0%, transparent 70%)",
              }}
            />

            {/* Floating Image Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, #048CE4 0%, #0454AC 100%)",
                  transform: "scale(1.1)",
                }}
              />
              
              {/* Image with Glassmorphism */}
              <div
                className="relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(239, 246, 255, 0.8) 100%)",
                  boxShadow: "0 20px 60px rgba(4, 140, 228, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                }}
              >
                <img
                  src="/images/about/collaboration-vtu.png"
                  alt="Edutainer and VTU Collaboration"
                  className="w-full h-auto max-w-md mx-auto"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(4, 140, 228, 0.2))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════
              RIGHT SIDE — Content (Overlapping)
          ═══════════════════════════════════ */}
          <div className="lg:col-span-7 relative z-10 space-y-8">
            {/* Glassmorphism Content Card */}
            <div
              className="rounded-3xl p-8 lg:p-10 backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(239, 246, 255, 0.6) 100%)",
                boxShadow: "0 20px 60px rgba(4, 140, 228, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              {/* Heading with Gradient Keywords */}
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Building{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Future-Ready Skills
                </span>{" "}
                Together
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
                In partnership with Visvesvaraya Technological University, we're transforming education by bridging the gap between academia and industry through innovative programs and hands-on learning experiences.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary Button */}
                <a
                  href="/#courses"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #048CE4 0%, #0454AC 100%)",
                    boxShadow: "0 10px 30px rgba(4, 140, 228, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(4, 140, 228, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(4, 140, 228, 0.4)";
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Courses
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>

                {/* Secondary Button */}
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    color: "#048CE4",
                    border: "2px solid #048CE4",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(4, 140, 228, 0.1)";
                    e.currentTarget.style.backdropFilter = "blur(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.backdropFilter = "blur(10px)";
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VTUSection;
