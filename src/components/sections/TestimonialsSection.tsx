import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/common";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    img: "/images/testimonials/testimonial-aarav.jpg",
    rating: 5,
    text: "Before joining this platform, my learning was mostly theoretical and I often struggled to understand how concepts translated into real-world applications. The hands-on projects, structured curriculum, and especially the virtual internships completely changed that for me. I was able to build actual full-stack applications, work with APIs, manage databases, and deploy projects just like in a real job environment.",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer",
    img: "/images/testimonials/testimonial-priya.jpg",
    rating: 5,
    text: "What stood out to me the most was the personalized mentorship and the way complex topics were broken down into practical, easy-to-understand modules. The UI/UX and frontend learning path was extremely well designed, helping me understand not only how to design interfaces but also why certain design decisions matter. This platform didn't just teach me tools — it taught me how to think like a designer.",
  },
  {
    name: "Rohan Mehta",
    role: "DevOps Engineer",
    img: "/images/testimonials/testimonial-rohan.jpg",
    rating: 5,
    text: "I always wanted to understand how modern infrastructure, DevOps practices, and cloud deployments worked, but most resources online felt overwhelming or disconnected. Here, the learning journey was structured, practical, and directly linked with internships where I could apply everything in real scenarios. This platform bridges the gap between learning and real industry expectations in the best possible way.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F8FAFF' }}>
      <div className="container-custom">
        <SectionHeader
          badge="Student Success Stories"
          title="What Our Edutainees Say"
          description="Real stories from students who transformed their careers with our programs"
          className="mb-14"
        />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 flex flex-col gap-5 cursor-default"
              style={{ 
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(37,99,235,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)';
              }}
            >
              {/* Quote icon + Stars */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#64748B] leading-relaxed line-clamp-5 flex-1">
                "{t.text}"
              </p>
              <a href="#" className="text-sm text-[#2563EB] font-medium hover:underline">Read more</a>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: '2px solid #EFF6FF' }}
                />
                <div>
                  <div className="text-sm font-semibold text-[#0F172A]">{t.name}</div>
                  <div className="text-xs text-[#64748B]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
