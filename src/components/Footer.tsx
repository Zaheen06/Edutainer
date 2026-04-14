import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Courses",    href: "/#courses" },
      { name: "About Us",   href: "/about"    },
      { name: "Contact Us", href: "/contact"  },
    ],
    legal: [
      { name: "Privacy Policy",    href: "#" },
      { name: "Refund Policy",     href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0  },
  };

  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #F8FAFC, #EEF2FF)",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="inline-flex items-center group">
              <img
                src="/edu_logo.svg"
                alt="Edutainer"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Reshaping Learning for the Modern World, where Education Meets Accessibility and Inclusivity.
            </p>
          </motion.div>

          {/* Platform */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-[11px] font-bold text-gray-400 uppercase mb-5 tracking-widest"
            >
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-[11px] font-bold text-gray-400 uppercase mb-5 tracking-widest"
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-gray-400">
            © {currentYear} Edutainer. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built to empower learners worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
