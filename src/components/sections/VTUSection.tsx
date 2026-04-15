import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const vtuCollab = "/images/about/collaboration-vtu.png";

const highlights = [
  "Skill-based learning curriculum",
  "Virtual internship programs",
  "Direct industry mentorship",
  "Certification on completion",
];

const VTUSection = () => {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={vtuCollab}
                alt="Edutainer and VTU collaboration"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <div>
              <span 
                className="inline-block px-4 py-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold rounded-full mb-5"
                style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                University Partnership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
                Our Collaboration with VTU
              </h2>
              <p className="text-base text-[#64748B] leading-[1.7] max-w-xl">
                In partnership with VTU, a prestigious technological university, we're preparing students for future careers by offering skill-based learning and virtual internships. This collaboration empowers young minds with real-world skills and practical experience, bridging academia with industry.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm text-[#0F172A] font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-semibold transition-all duration-200 group"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-lg border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFF] hover:text-[#2563EB] hover:border-[#2563EB] font-semibold transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VTUSection;
