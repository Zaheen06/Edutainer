import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Courses", href: "#courses" },
      { name: "About Us", href: "#about" },
      { name: "Contact Us", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const footerStats = [
    { val: "10k+", label: "Students" },
    { val: "50+", label: "Courses" },
    { val: "95%", label: "Success Rate" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom py-14">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/edu_logo.svg"
                  alt="Edutainer Logo"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold tracking-tight">Edutainer</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Reshaping Learning for the Modern World, where Education Meets Accessibility and Inclusivity.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div className="text-gray-500 text-sm">
              © {currentYear} Edutainer. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              {footerStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-base font-bold text-white">{s.val}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
