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
      className="sticky top-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.82)"
          : "rgba(255,255,255,0.96)",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        padding: scrolled ? "10px 0" : "14px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/edu_logo.svg"
              alt="Edutainer"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[13.5px] font-medium text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <ThemeToggle isDark={dark} onToggle={() => setDark(!dark)} />

            <a
              href="/signin"
              className="relative px-4 py-2 text-[13.5px] font-medium text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200 group"
            >
              Sign In
              <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
            <a
              href="/register"
              className="px-5 py-2 text-[13.5px] font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #048CE4 0%, #0270C0 100%)",
                boxShadow: "0 2px 10px rgba(4,140,228,0.3)",
              }}
            >
              Register
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: scrolled ? "49px" : "57px", zIndex: 90, borderLeft: "1px solid #F1F5F9" }}
      >
        <div className="p-6 space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-5 border-t border-gray-100 mt-4">
            <div className="px-4 py-2">
              <ThemeToggle isDark={dark} onToggle={() => setDark(!dark)} />
            </div>
            <a
              href="/signin"
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 text-center"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="px-4 py-2.5 text-sm font-semibold text-white rounded-xl text-center transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #048CE4, #0270C0)" }}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
          style={{ top: scrolled ? "49px" : "57px", zIndex: 80 }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
