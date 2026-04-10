import { motion } from "framer-motion";
import { Star } from "lucide-react";

import courseIelts from "@/assets/course-ielts.jpg";
import courseAi from "@/assets/course-ai.jpg";
import courseReact from "@/assets/course-react.jpg";
import courseInterior from "@/assets/course-interior.jpg";
import courseMidjourney from "@/assets/course-midjourney.jpg";
import courseDiversity from "@/assets/course-diversity.jpg";
import courseCoaching from "@/assets/course-coaching.jpg";
import courseContent from "@/assets/course-content.jpg";

const courses = [
  { img: courseIelts, title: "English (IELTS Readiness) Course", rating: 0, desc: "Elevate your English with our IELTS English course online. Join our IEL..." },
  { img: courseAi, title: "Artificial Intelligence Course Online", rating: 5, desc: "Explore AI concepts like data handling, preprocessing, model..." },
  { img: courseReact, title: "React JS Course", rating: 5, desc: "Master React JS with our online React courses! Gain practical skills..." },
  { img: courseInterior, title: "Interior Design Course", rating: 0, desc: "Enroll in our online interior design course to earn your interior desig..." },
  { img: courseMidjourney, title: "Midjourney Mastery", rating: 0, desc: "Master AI art generation with Midjourney. Learn prompting techniques..." },
  { img: courseDiversity, title: "Diversity & Inclusion at Work", rating: 0, desc: "Build inclusive workplaces. Learn strategies for diversity management..." },
  { img: courseCoaching, title: "Online Coaching for Leaders", rating: 0, desc: "Develop world-class leadership and coaching skills for any area..." },
  { img: courseContent, title: "AI-Driven Content Mastery", rating: 0, desc: "Master AI tools for content creation. Learn to leverage AI effectively..." },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Popular Courses
          </motion.h2>
          <a href="#" className="text-primary font-medium text-sm hover:underline">
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[5/4]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={640}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-foreground/60 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-primary-foreground font-medium">{c.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-primary-foreground/80">Edutainer</span>
                  <h3 className="text-sm font-bold text-primary-foreground leading-tight">
                    {c.title}
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <p className="text-xs text-muted-foreground line-clamp-2">{c.desc}</p>
                <span className="text-xs font-semibold text-primary whitespace-nowrap">Free</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
