import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  // Apply / remove dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Courses", href: "/#courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
          dark ? 'navbar-dark' : 'navbar-light'
        }`}
        style={{
          backgroundColor: dark ? "#0F172A" : "#FFFFFF",
          borderBottom: dark 
            ? "1px solid rgba(51, 65, 85, 0.9)" 
            : "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: scrolled 
            ? (dark ? "0 2px 32px rgba(0,0,0,0.5)" : "0 1px 24px rgba(0,0,0,0.06)")
            : (dark ? "0 1px 16px rgba(0,0,0,0.3)" : "0 1px 8px rgba(0,0,0,0.03)"),
          paddingTop: scrolled ? "10px" : "14px",
          paddingBottom: scrolled ? "10px" : "14px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div className="w-full max-w-7xl mx-auto relative flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0 min-w-fit">
            <img
              src="/edu_logo.svg"
              alt="Edutainer"
              className="h-7 sm:h-8 w-auto"
              style={{
                filter: dark ? "brightness(1.2) contrast(1.1)" : "none",
              }}
            />
          </a>

          {/* Desktop nav - Centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-200 group"
                style={{
                  color: dark ? "#CBD5E1" : "#4B5563",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#048CE4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = dark ? "#CBD5E1" : "#4B5563";
                }}
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Dark mode toggle */}
            <ThemeToggle isDark={dark} onToggle={() => setDark(!dark)} />

            <a
              href="/signin"
              className="relative px-4 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-200 group"
              style={{
                color: dark ? "#CBD5E1" : "#4B5563",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#048CE4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = dark ? "#CBD5E1" : "#4B5563";
              }}
            >
              Sign In
              <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
            <a
              href="/register"
              className="px-5 py-2 text-[13.5px] font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #048CE4 0%, #0270C0 100%)",
                boxShadow: dark 
                  ? "0 2px 10px rgba(4,140,228,0.4)" 
                  : "0 2px 10px rgba(4,140,228,0.3)",
              }}
            >
              Register
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-200 flex-shrink-0 ml-auto"
            style={{
              color: dark ? "#F1F5F9" : "#1F2937",
              backgroundColor: dark ? "rgba(51, 65, 85, 0.3)" : "rgba(243, 244, 246, 0.5)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 backdrop-blur-sm z-[9998]"
          style={{ 
            top: 0,
            backgroundColor: dark ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.4)",
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-72 shadow-2xl transition-transform duration-300 ease-in-out z-[9998] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } ${dark ? 'mobile-drawer-dark' : 'mobile-drawer-light'}`}
        style={{ 
          top: 0, 
          backgroundColor: dark ? "#1E293B" : "#FFFFFF",
          borderLeft: dark ? "1px solid #334155" : "1px solid #E2E8F0",
        }}
      >
        <div className="h-full overflow-y-auto" style={{ backgroundColor: dark ? "#1E293B" : "#FFFFFF" }}>
          <div className="p-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200"
                style={{
                  color: dark ? "#F1F5F9" : "#374151",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div 
              className="flex flex-col gap-2 pt-5 mt-4"
              style={{
                borderTop: dark ? "1px solid #334155" : "1px solid #F3F4F6",
              }}
            >
              <div className="px-4 py-2">
                <ThemeToggle isDark={dark} onToggle={() => setDark(!dark)} />
              </div>
              <a
                href="/signin"
                className="px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 text-center"
                style={{
                  color: dark ? "#F1F5F9" : "#374151",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
              <a
                href="/register"
                className="px-4 py-2.5 text-sm font-semibold text-white rounded-xl text-center transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #048CE4, #0270C0)" }}
                onClick={() => setMobileOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
