import { motion } from "framer-motion";
import journey1 from "@/assets/journey-1.jpg";
import journey2 from "@/assets/journey-2.jpg";
import journey3 from "@/assets/journey-3.jpg";
import journey4 from "@/assets/journey-4.jpg";

const images = [journey1, journey2, journey3, journey4];

const JourneySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          Start Your Journey with Edutainer
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={img}
                alt={`Journey ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={512}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
