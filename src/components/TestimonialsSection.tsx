import { motion } from "framer-motion";
import aaravImg from "@/assets/testimonial-aarav.jpg";
import priyaImg from "@/assets/testimonial-priya.jpg";
import rohanImg from "@/assets/testimonial-rohan.jpg";

const testimonials = [
  {
    name: "Aarav Sharma",
    img: aaravImg,
    bg: "bg-card",
    text: "Before joining this platform, my learning was mostly theoretical and I often struggled to understand how concepts translated into real-world applications. The hands-on projects, structured curriculum, and especially the virtual internships completely changed that for me. I was able to build actual full-stack applications, work with APIs, manage databases, and deploy projects just like in a real job environment. By the time placement season arrived, I wasn't just confident — I had a portfolio that spoke for itself.",
  },
  {
    name: "Priya Nair",
    img: priyaImg,
    bg: "bg-card",
    text: "What stood out to me the most was the personalized mentorship and the way complex topics were broken down into practical, easy-to-understand modules. The UI/UX and frontend learning path was extremely well designed, helping me understand not only how to design interfaces but also why certain design decisions matter. I could immediately apply what I learned to freelance projects while still pursuing my degree. The feedback from mentors was invaluable.",
  },
  {
    name: "Rohan Mehta",
    img: rohanImg,
    bg: "bg-secondary",
    text: "I always wanted to understand how modern infrastructure, DevOps practices, and cloud deployments worked, but most resources online felt overwhelming or disconnected. Here, the learning journey was structured, practical, and directly linked with internships where I could apply everything in real scenarios. I learned how to containerize apps, automate deployments, and manage cloud services in a way that felt natural and intuitive.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Edutainee Testimonials
        </motion.h2>

        <div className="space-y-12">
          {testimonials.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className={`${t.bg} rounded-2xl p-8 md:flex-1`}>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.name}</h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-5">{t.text}</p>
                </div>
                <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
