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
const CARDS_PER_PAGE = 3;

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

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const visible = filtered.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setPage(0);
  };

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-5">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Career with Expert-Led Courses
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover industry-leading courses designed by experts to help you master in-demand skills
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards + Arrows */}
        <div className="flex items-stretch gap-3 md:gap-4">
          {/* Left Arrow */}
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              aria-label="Previous courses"
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-150 ${
                page === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-blue-400 hover:text-blue-600 hover:shadow"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Course Cards Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Course Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category badge top-left */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[course.category]}`}>
                      {course.category}
                    </span>
                  </div>
                  {/* Free badge top-right */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-green-600 text-white rounded-full text-xs font-semibold">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Provider */}
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-xs text-blue-600 font-medium">Edutainer</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {course.desc}
                  </p>

                  {/* Star Rating */}
                  {course.rating > 0 && (
                    <div className="flex items-center gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{course.rating}.0</span>
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.students} enrolled</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button size="sm" className="w-full btn-primary text-xs mt-1">
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
          <div className="flex items-center">
            <button
              onClick={handleNext}
              disabled={page >= totalPages - 1}
              aria-label="Next courses"
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-150 ${
                page >= totalPages - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-blue-400 hover:text-blue-600 hover:shadow"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-150 ${
                  i === page ? "w-5 h-2 bg-blue-600" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
