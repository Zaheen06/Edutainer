import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const features = [
  "Industry-aligned skill-based learning curriculum",
  "Real-world virtual internship opportunities",
  "Expert mentorship from industry professionals",
  "Recognized certification upon completion",
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const VTUSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Decorative Blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(4, 140, 228, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(4, 84, 172, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Container Card */}
        <div
          className="rounded-3xl p-10 md:p-14 backdrop-blur-xl"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(4, 140, 228, 0.1)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Our Collaboration 
              
            </h2>
          </div>

          {/* Inner Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* ═══════════════════════════════════
                LEFT SIDE — Logo Card
            ═══════════════════════════════════ */}
            <div className="flex justify-center">
              <div
                className="group relative w-full max-w-lg rounded-2xl p-10 lg:p-12 backdrop-blur-lg transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  boxShadow: "0 10px 40px rgba(4, 140, 228, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)",
                }}
              >
                {/* Radial Glow Behind */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: "radial-gradient(circle at center, rgba(4, 140, 228, 0.3) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                {/* Blurred Background Circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-20 blur-2xl"
                  style={{
                    background: "radial-gradient(circle, #048CE4 0%, transparent 70%)",
                  }}
                />

                {/* Collaboration Image */}
                <div className="relative flex items-center justify-center">
                  <img
                    src="/images/about/collaboration-vtu.png"
                    alt="Edutainer and VTU Collaboration"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    style={{ filter: "drop-shadow(0 8px 24px rgba(4, 140, 228, 0.2))" }}
                  />
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════
                RIGHT SIDE — Content Card
            ═══════════════════════════════════ */}
            <div
              className="rounded-2xl p-8 lg:p-10 backdrop-blur-lg"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="space-y-6">
                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Building Future-Ready Skills Together
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  In partnership with Visvesvaraya Technological University, we're transforming education by bridging the gap between academia and industry through innovative programs.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Primary Button */}
                  <a
                    href="/#courses"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105"
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
                      background: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#048CE4";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "#048CE4";
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VTUSection;
