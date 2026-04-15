import { useState } from "react";
import { Star, Clock, Users, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/common";

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
    img: "/images/courses/course-ielts.jpg",
    title: "English (IELTS Readiness) Course",
    rating: 5,
    desc: "Elevate your English with our IELTS English course online. Join our IELTS classes online for effective online training IELTS and sound like a native speaker!",
    price: "Free",
    duration: "8 weeks",
    students: "2.5k",
    category: "Business",
  },
  {
    img: "/images/courses/course-ai.jpg",
    title: "Artificial Intelligence Course Online",
    rating: 5,
    desc: "Explore AI concepts like data handling, preprocessing, model selection, and evaluation. Enhance your skills with our comprehensive AI upskilling online courses in AI technology.",
    price: "Free",
    duration: "12 weeks",
    students: "3.2k",
    category: "AI & Data",
  },
  {
    img: "/images/courses/course-react.jpg",
    title: "React JS Course",
    rating: 0,
    desc: "Master React JS with our online React courses! Gain practical skills, earn your React JS certification, and excel as a web developer. Join our React JS training online today!",
    price: "Free",
    duration: "10 weeks",
    students: "4.1k",
    category: "Development",
  },
  {
    img: "/images/courses/course-interior.jpg",
    title: "Interior Design Course",
    rating: 0,
    desc: "Enroll in our online interior design course to earn your interior design course certificate. Explore free interior design courses with certificates and become the best interior decorator online.",
    price: "Free",
    duration: "6 weeks",
    students: "1.8k",
    category: "Design",
  },
  {
    img: "/images/courses/course-midjourney.jpg",
    title: "Midjourney Mastery",
    rating: 0,
    desc: "The Midjourney Mastery course empowers you to transform ideas into stunning visuals using Midjourney's innovative tools.",
    price: "Free",
    duration: "4 weeks",
    students: "2.1k",
    category: "Design",
  },
  {
    img: "/images/courses/course-diversity.jpg",
    title: "Diversity & Inclusion at Work Certificate Course",
    rating: 0,
    desc: "Creating inclusive, welcoming workplaces that embrace diversity and have smart ideas and strategies on how best to appreciate that diversity.",
    price: "Free",
    duration: "3 weeks",
    students: "1.5k",
    category: "Business",
  },
  {
    img: "/images/courses/course-coaching.jpg",
    title: "Online Coaching for Leaders Course",
    rating: 0,
    desc: "This course is specifically designed for managers/leaders who believe in creating success through others.",
    price: "Free",
    duration: "5 weeks",
    students: "1.9k",
    category: "Business",
  },
  {
    img: "/images/courses/course-content.jpg",
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
        <SectionHeader
          badge="Popular Courses"
          title="Transform Your Career with Expert-Led Courses"
          description="Discover industry-leading courses designed by experts to help you master in-demand skills"
          className="mb-12"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E0F2FE] hover:text-[#048CE4]"
              }`}
              style={activeCategory === cat ? { background: "linear-gradient(135deg, #048CE4, #0454AC)" } : {}}
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
                className="bg-white rounded-xl border border-[#E8EFF6] overflow-hidden group cursor-pointer flex flex-col"
                style={{
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(4,140,228,0.06)",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.005)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(4,140,228,0.14), 0 2px 6px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(4,140,228,0.06)";
                }}
              >
                {/* Image — compact landscape */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/12" }}>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Badges */}
                  <div className="absolute top-2 left-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryColors[course.category]}`}>
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500 text-white rounded-full">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3">
                  {/* Provider row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-[#048CE4]" />
                      <span className="text-[10px] font-bold text-[#048CE4] uppercase tracking-wide">Edutainer</span>
                    </div>
                    {course.rating > 0 && (
                      <div className="flex items-center gap-0.5">
                        {[...Array(course.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                        ))}
                        <span className="text-[10px] text-gray-500 ml-0.5 font-medium">{course.rating}.0</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] font-semibold text-gray-900 leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11.5px] text-gray-400 leading-relaxed line-clamp-2">
                    {course.desc}
                  </p>

                  {/* Meta + CTA row */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-0.5">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />{course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />{course.students}
                      </span>
                    </div>
                    <button
                      className="text-[11px] font-semibold text-white px-3 py-1 rounded-lg transition-all duration-200 hover:brightness-110"
                      style={{ background: "linear-gradient(135deg, #048CE4, #0454AC)" }}
                    >
                      Enroll
                    </button>
                  </div>
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
          <a
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full border border-[#048CE4] text-[#048CE4] hover:bg-[#E0F2FE] transition-all duration-200"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
