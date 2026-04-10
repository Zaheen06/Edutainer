import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, ThumbsUp } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "support@edutainer.in", href: "mailto:support@edutainer.in" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Visit Us", value: "Bangalore, Karnataka, India", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-5">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Have questions or need guidance? We're here to help you choose the right course, understand internships, or get personalised support.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Connect</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ready to transform your career? Our education experts are standing by to help you choose the perfect learning path.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">{info.label}</div>
                      <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24hrs</div>
                <div className="text-xs text-gray-500 mt-1">Response Time</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center mb-3">
                  <ThumbsUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-500 mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h3>
              <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-11 rounded-xl" />
                <Input placeholder="Last Name" className="h-11 rounded-xl" />
              </div>
              <Input type="email" placeholder="Email Address" className="h-11 rounded-xl" />
              <Input type="tel" placeholder="Phone Number" className="h-11 rounded-xl" />
              <Input placeholder="Subject" className="h-11 rounded-xl" />
              <Textarea placeholder="Your Message" rows={4} className="resize-none rounded-xl" />
              <Button className="w-full btn-primary h-11 rounded-xl text-sm font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
