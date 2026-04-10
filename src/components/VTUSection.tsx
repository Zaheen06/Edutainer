import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import vtuCollab from "@/assets/vtu-collab.jpg";

const highlights = [
  "Skill-based learning curriculum",
  "Virtual internship programs",
  "Direct industry mentorship",
  "Certification on completion",
];

const VTUSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Column */}
          <div className="flex justify-center">
            <div className="w-full max-w-md border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center justify-center h-[240px]">
                <img
                  src={vtuCollab}
                  alt="Edutainer and VTU collaboration"
                  className="max-h-full w-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
              {/* Mini stat strip inside image card */}
              <div className="flex justify-around pt-4 border-t border-gray-100 mt-4">
                {[
                  { val: "VTU", label: "Accredited" },
                  { val: "500+", label: "Graduates" },
                  { val: "95%", label: "Success Rate" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-base font-bold text-blue-600">{s.val}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
                University Partnership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Our Collaboration with VTU
              </h2>
              <p className="text-base text-gray-500 leading-[1.8] max-w-xl">
                In partnership with VTU, a prestigious technological university, we're preparing students for future careers by offering skill-based learning and virtual internships. This collaboration empowers young minds with real-world skills and practical experience, bridging academia with industry.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button className="btn-primary rounded-xl">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="rounded-xl">
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
