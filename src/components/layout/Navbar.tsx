import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [dark, setDark]             = useState(() => {
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
    { label: "Courses",    href: "/#courses" },
    { label: "About Us",   href: "/about"    },
    { label: "Contact Us", href: "/contact"  },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        dark ? 'navbar-dark' : 'navbar-light'
      }`}
      style={{
        background: dark 
          ? "rgba(15, 23, 42, 0.98)" 
          : "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: dark 
          ? "1px solid rgba(51, 65, 85, 0.9)" 
          : "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: scrolled 
          ? (dark ? "0 2px 32px rgba(0,0,0,0.5)" : "0 1px 24px rgba(0,0,0,0.06)")
          : (dark ? "0 1px 16px rgba(0,0,0,0.3)" : "0 1px 8px rgba(0,0,0,0.03)"),
        padding: scrolled ? "10px 0" : "14px 0",
        paddingTop: `max(${scrolled ? '10px' : '14px'}, env(safe-area-inset-top))`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/edu_logo.svg"
              alt="Edutainer"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{
                filter: dark ? "brightness(1.2) contrast(1.1)" : "none",
              }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
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
          <div className="hidden md:flex items-center gap-3">
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
            className="md:hidden p-2 rounded-lg transition-all duration-200 relative z-[101]"
            style={{
              color: dark ? "#F1F5F9" : "#4B5563",
              backgroundColor: dark ? "rgba(51, 65, 85, 0.3)" : "transparent",
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.color = "#048CE4";
              e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.6)" : "rgba(239, 246, 255, 0.8)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.color = dark ? "#F1F5F9" : "#4B5563";
              e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.3)" : "transparent";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#048CE4";
              e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.6)" : "rgba(239, 246, 255, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = dark ? "#F1F5F9" : "#4B5563";
              e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.3)" : "transparent";
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 backdrop-blur-sm z-[90]"
          style={{ 
            top: 0,
            backgroundColor: dark ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.4)",
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-72 shadow-2xl transition-transform duration-300 ease-in-out z-[95] ${
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
                onTouchStart={(e) => {
                  e.currentTarget.style.color = "#048CE4";
                  e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.5)" : "rgba(239, 246, 255, 0.8)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.color = dark ? "#F1F5F9" : "#374151";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#048CE4";
                  e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.5)" : "rgba(239, 246, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = dark ? "#F1F5F9" : "#374151";
                  e.currentTarget.style.backgroundColor = "transparent";
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
                onTouchStart={(e) => {
                  e.currentTarget.style.color = "#048CE4";
                  e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.5)" : "rgba(239, 246, 255, 0.8)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.color = dark ? "#F1F5F9" : "#374151";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#048CE4";
                  e.currentTarget.style.backgroundColor = dark ? "rgba(51, 65, 85, 0.5)" : "rgba(239, 246, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = dark ? "#F1F5F9" : "#374151";
                  e.currentTarget.style.backgroundColor = "transparent";
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
    </nav>
  );
};

export default Navbar;
