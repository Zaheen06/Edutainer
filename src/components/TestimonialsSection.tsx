import { Star, Quote } from "lucide-react";
import aaravImg from "@/assets/testimonial-aarav.jpg";
import priyaImg from "@/assets/testimonial-priya.jpg";
import rohanImg from "@/assets/testimonial-rohan.jpg";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    img: aaravImg,
    rating: 5,
    text: "Before joining this platform, my learning was mostly theoretical and I often struggled to understand how concepts translated into real-world applications. The hands-on projects, structured curriculum, and especially the virtual internships completely changed that for me. I was able to build actual full-stack applications, work with APIs, manage databases, and deploy projects just like in a real job environment.",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer",
    img: priyaImg,
    rating: 5,
    text: "What stood out to me the most was the personalized mentorship and the way complex topics were broken down into practical, easy-to-understand modules. The UI/UX and frontend learning path was extremely well designed, helping me understand not only how to design interfaces but also why certain design decisions matter. This platform didn't just teach me tools — it taught me how to think like a designer.",
  },
  {
    name: "Rohan Mehta",
    role: "DevOps Engineer",
    img: rohanImg,
    rating: 5,
    text: "I always wanted to understand how modern infrastructure, DevOps practices, and cloud deployments worked, but most resources online felt overwhelming or disconnected. Here, the learning journey was structured, practical, and directly linked with internships where I could apply everything in real scenarios. This platform bridges the gap between learning and real industry expectations in the best possible way.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-5">
            Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Edutainees Say
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real stories from students who transformed their careers with our programs
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Quote icon + Stars */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5 flex-1">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-50"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
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
