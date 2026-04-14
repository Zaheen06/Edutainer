import { useState } from "react";
import { Star, Clock, Users, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import courseIelts from "@/assets/course-ielts.jpg";
import courseAi from "@/assets/course-ai.jpg";
import courseReact from "@/assets/course-react.jpg";
import courseInterior from "@/assets/course-interior.jpg";
import courseMidjourney from "@/assets/course-midjourney.jpg";
import courseDiversity from "@/assets/course-diversity.jpg";
import courseCoaching from "@/assets/course-coaching.jpg";
import courseContent from "@/assets/course-content.jpg";

type Category = "All" | "Development" | "Design" | "AI & Data" | "Business";

const courses: {
  img: string;
  title: string;
  rating: number;
  desc: string;
  price: string;
  duration: string;
  students: string;
  category: Category;
}[] = [
  {
    img: courseIelts,
    title: "English (IELTS Readiness) Course",
    rating: 5,
    desc: "Elevate your English with our IELTS English course online. Join our IELTS classes online for effective online training IELTS and sound like a native speaker!",
    price: "Free",
    duration: "8 weeks",
    students: "2.5k",
    category: "Business",
  },
  {
    img: courseAi,
    title: "Artificial Intelligence Course Online",
    rating: 5,
    desc: "Explore AI concepts like data handling, preprocessing, model selection, and evaluation. Enhance your skills with our comprehensive AI upskilling online courses in AI technology.",
    price: "Free",
    duration: "12 weeks",
    students: "3.2k",
    category: "AI & Data",
  },
  {
    img: courseReact,
    title: "React JS Course",
    rating: 0,
    desc: "Master React JS with our online React courses! Gain practical skills, earn your React JS certification, and excel as a web developer. Join our React JS training online today!",
    price: "Free",
    duration: "10 weeks",
    students: "4.1k",
    category: "Development",
  },
  {
    img: courseInterior,
    title: "Interior Design Course",
    rating: 0,
    desc: "Enroll in our online interior design course to earn your interior design course certificate. Explore free interior design courses with certificates and become the best interior decorator online.",
    price: "Free",
    duration: "6 weeks",
    students: "1.8k",
    category: "Design",
  },
  {
    img: courseMidjourney,
    title: "Midjourney Mastery",
    rating: 0,
    desc: "The Midjourney Mastery course empowers you to transform ideas into stunning visuals using Midjourney's innovative tools.",
    price: "Free",
    duration: "4 weeks",
    students: "2.1k",
    category: "Design",
  },
  {
    img: courseDiversity,
    title: "Diversity & Inclusion at Work Certificate Course",
    rating: 0,
    desc: "Creating inclusive, welcoming workplaces that embrace diversity and have smart ideas and strategies on how best to appreciate that diversity.",
    price: "Free",
    duration: "3 weeks",
    students: "1.5k",
    category: "Business",
  },
  {
    img: courseCoaching,
    title: "Online Coaching for Leaders Course",
    rating: 0,
    desc: "This course is specifically designed for managers/leaders who believe in creating success through others.",
    price: "Free",
    duration: "5 weeks",
    students: "1.9k",
    category: "Business",
  },
  {
    img: courseContent,
    title: "AI-Driven Content Mastery for Marketers",
    rating: 0,
    desc: "Unlock AI Tools for Powerful Content Strategies. Elevate your content game with AI-driven ideation, SEO, visuals, and video creation for a competitive edge.",
    price: "Free",
    duration: "7 weeks",
    students: "2.7k",
    category: "AI & Data",
  },
];

const CATEGORIES: Category[] = ["All", "Development", "Design", "AI & Data", "Business"];
const CARDS_PER_PAGE = 4;

const categoryColors: Record<Category, string> = {
  All: "bg-gray-100 text-gray-500",
  Development: "bg-blue-50 text-blue-600",
  Design: "bg-purple-50 text-purple-600",
  "AI & Data": "bg-emerald-50 text-emerald-600",
  Business: "bg-amber-50 text-amber-600",
};

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const [displayPage, setDisplayPage] = useState(0);

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const visible = filtered.slice(displayPage * CARDS_PER_PAGE, displayPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setPage(0);
    setDisplayPage(0);
  };

  const navigate = (dir: "left" | "right") => {
    if (isAnimating) return;
    const next = dir === "right"
      ? Math.min(totalPages - 1, page + 1)
      : Math.max(0, page - 1);
    if (next === page) return;

    setSlideDir(dir);
    setIsAnimating(true);
    setPage(next);

    // After slide-out (half of 2s), swap content, then slide in
    setTimeout(() => {
      setDisplayPage(next);
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handlePrev = () => navigate("left");
  const handleNext = () => navigate("right");

  return (
    <section id="courses" className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
            Transform Your Career with Expert-Led Courses
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Discover industry-leading courses designed by experts to help you master in-demand skills
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#2563EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards + Arrows */}
        <div className="flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={page === 0 || isAnimating}
            aria-label="Previous courses"
            className={`hidden md:flex w-11 h-11 items-center justify-center rounded-full border bg-white transition-all duration-200 flex-shrink-0 ${
              page === 0 || isAnimating
                ? "opacity-30 cursor-not-allowed border-[#E2E8F0]"
                : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] shadow-sm hover:shadow-md"
            }`}
            style={{ boxShadow: page === 0 ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Course Cards Grid */}
          <div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible"
            style={{
              transition: isAnimating ? 'opacity 0.3s ease, transform 0.3s ease' : 'opacity 0.4s ease, transform 0.4s ease',
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? `translateX(${slideDir === "right" ? "-40px" : "40px"})`
                : "translateX(0)",
            }}
          >
            {visible.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden group cursor-pointer flex flex-col hover:-translate-y-1 transition-all duration-250 ease-out snap-center md:snap-align-none min-w-full md:min-w-0"
                style={{ 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(37,99,235,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)';
                }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                    style={{ transition: 'transform 0.3s ease' }}
                  />
                  {/* Category badge top-left */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[course.category]}`}>
                      {course.category}
                    </span>
                  </div>
                  {/* Free badge top-right */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1.5 bg-[#22C55E] text-white rounded-full text-xs font-semibold">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Provider */}
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs text-[#2563EB] font-semibold">Edutainer</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0F172A] leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2 flex-1">
                    {course.desc}
                  </p>

                  {/* Star Rating */}
                  {course.rating > 0 && (
                    <div className="flex items-center gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                      ))}
                      <span className="text-sm text-[#64748B] ml-1 font-medium">{course.rating}.0</span>
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-[#64748B] pt-3 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{course.students} enrolled</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    size="sm" 
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium mt-2 rounded-lg transition-all duration-200"
                    style={{ 
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}

            {/* Ghost cards to preserve grid layout */}
            {visible.length < CARDS_PER_PAGE &&
              Array.from({ length: CARDS_PER_PAGE - visible.length }).map((_, i) => (
                <div key={`empty-${i}`} className="hidden lg:block" />
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={page >= totalPages - 1 || isAnimating}
            aria-label="Next courses"
            className={`hidden md:flex w-11 h-11 items-center justify-center rounded-full border bg-white transition-all duration-200 flex-shrink-0 ${
              page >= totalPages - 1 || isAnimating
                ? "opacity-30 cursor-not-allowed border-[#E2E8F0]"
                : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] shadow-sm hover:shadow-md"
            }`}
            style={{ boxShadow: page >= totalPages - 1 ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={page === 0 || isAnimating}
            aria-label="Previous courses"
            className={`w-11 h-11 flex items-center justify-center rounded-full border bg-white transition-all duration-200 ${
              page === 0 || isAnimating
                ? "opacity-30 cursor-not-allowed border-[#E2E8F0]"
                : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
            }`}
            style={{ boxShadow: page === 0 ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={page >= totalPages - 1 || isAnimating}
            aria-label="Next courses"
            className={`w-11 h-11 flex items-center justify-center rounded-full border bg-white transition-all duration-200 ${
              page >= totalPages - 1 || isAnimating
                ? "opacity-30 cursor-not-allowed border-[#E2E8F0]"
                : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
            }`}
            style={{ boxShadow: page >= totalPages - 1 ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === page ? "w-6 h-2 bg-[#2563EB]" : "w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
              />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#E2E8F0] text-[#2563EB] hover:bg-[#EFF6FF] hover:border-[#2563EB] font-medium transition-all duration-200"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
