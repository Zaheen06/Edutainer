import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import vtuCollab from "@/assets/vtu-collab.jpg";

const VTUSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12"
          >
            <img
              src={vtuCollab}
              alt="Edutainer and VTU collaboration"
              className="rounded-2xl w-full max-w-sm mx-auto"
              loading="lazy"
              width={512}
              height={512}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-7/12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Collaboration with VTU
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In partnership with VTU, a prestigious technological university, we're preparing students for future careers by offering skill-based learning and virtual internships. This collaboration empowers young minds with real-world skills and practical experience, bridging academia with industry.
            </p>
            <Button variant="outline" className="gap-2">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VTUSection;
