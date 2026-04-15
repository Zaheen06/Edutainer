import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0334511092256!2d77.60034657584461!3d12.905570587403718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef6f6a196b%3A0xe51df8654f6bff1f!2sEdutainer!5e0!3m2!1sen!2sin!4v1772610709359!5m2!1sen!2sin";

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = pageRef.current?.querySelectorAll<HTMLElement>(".fade-in");
    nodes?.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
      setTimeout(() => {
        n.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        n.style.opacity = "1";
        n.style.transform = "translateY(0)";
      }, i * 100);
    });
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg,#f0f7ff 0%,#ffffff 55%,#f5f0ff 100%)" }}
    >
      <Navbar />

      {/* ══════════════════════════════════════
          MAIN — Map (60%) + Info cards (40%)
      ══════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">

          {/* ── LEFT: Map ── */}
          <div
            className="fade-in group rounded-[20px] overflow-hidden"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(4,140,228,0.1)",
              border: "1px solid rgba(4,140,228,0.12)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 12px rgba(0,0,0,0.06), 0 32px 80px rgba(4,140,228,0.18), 0 0 0 2px rgba(4,140,228,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(4,140,228,0.1)";
            }}
          >
            {/* Map header */}
            <div
              className="px-6 py-5 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg,#f0f7ff,#ffffff)", borderBottom: "1px solid #EEF2FF" }}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#048CE4] mb-0.5">Our Office</p>
                <p className="text-sm font-semibold text-gray-900">Edutainer, BTM Layout 2nd Stage</p>
                <p className="text-xs text-gray-400 mt-0.5">110, 7th Cross Rd, Dollar Layout, Bengaluru 560076</p>
              </div>
              <a
                href="https://maps.google.com/?q=Edutainer,BTM+Layout,Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#048CE4] hover:underline flex-shrink-0 ml-4"
              >
                Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map iframe */}
            <div className="overflow-hidden" style={{ transition: "transform 0.4s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.01)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edutainer Office Location"
              />
            </div>

            {/* Map footer */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "#fff", borderTop: "1px solid #EEF2FF" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-500">Open today · 9:00 am – 6:00 pm IST</span>
              </div>
              <span className="text-xs text-gray-400">Karnataka 560076</span>
            </div>
          </div>

          {/* ── RIGHT: Contact info cards ── */}
          <div className="flex flex-col gap-4">

            {/* Section label */}
            <div className="fade-in mb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#048CE4] mb-1">Get In Touch</p>
              <h2 className="text-xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                We're Here to Help
              </h2>
              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                Reach out through any of the channels below.
              </p>
            </div>

            {/* Chat with Us */}
            <div
              className="fade-in group p-6 rounded-2xl cursor-default transition-all duration-250"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(4,140,228,0.1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(4,140,228,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px) scale(1.02)";
                el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(4,140,228,0.14)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(4,140,228,0.06)";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#EFF8FF" }}>
                <MessageCircle className="w-5 h-5 text-[#048CE4]" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Chat with Us</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Our dedicated team is always ready to assist you.
              </p>
              <a href="mailto:info@edutainer.in" className="text-xs font-semibold text-[#048CE4] hover:underline block">
                info@edutainer.in
              </a>
              <a href="mailto:support@edutainer.in" className="text-xs font-semibold text-[#048CE4] hover:underline block mt-0.5">
                support@edutainer.in
              </a>
            </div>

            {/* Phone Support */}
            <div
              className="fade-in group p-6 rounded-2xl cursor-default transition-all duration-250"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(22,163,74,0.1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(22,163,74,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px) scale(1.02)";
                el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(22,163,74,0.14)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(22,163,74,0.06)";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#F0FDF4" }}>
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Phone Support</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                We're available Monday – Friday, 9:00 AM – 6:00 PM.
              </p>
              <a href="tel:+919901532101" className="text-xs font-semibold text-emerald-600 hover:underline block">
                +91 99015 32101
              </a>
            </div>

            {/* Visit Our Office */}
            <div
              className="fade-in group p-6 rounded-2xl cursor-default transition-all duration-250"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(217,119,6,0.1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(217,119,6,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px) scale(1.02)";
                el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(217,119,6,0.14)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(217,119,6,0.06)";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#FFFBEB" }}>
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Visit Our Office</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                No – 110, 7th Cross Rd, Dollar Layout,
                <br />BTM 2nd Stage, Bengaluru, Karnataka 560076.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
