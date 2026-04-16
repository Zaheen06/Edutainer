import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Target,
  Rocket,
  Lightbulb,
  Globe,
  Award,
  Heart,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const values = [
  {
    title: "Innovation",
    description: "Constantly adapting to bring the latest advancements in technology to education.",
  },
  {
    title: "Accessibility",
    description: "Making education accessible and inclusive for learners, regardless of limitations.",
  },
  {
    title: "Excellence",
    description: "Striving to deliver quality in every course, partnership, and support system.",
  },
  {
    title: "Collaboration",
    description: "Building strong relationships with universities, partners, and communities.",
  },
];

const storyPhases = [
  {
    id: "founded",
    title: "Our Journey of Innovation Began",
    para1: "In 2018, Edutainer was established with a mission to innovate education. Successfully served over 50,000 students through skill enhancement and career-focused programs.",
    para2: "Since its inception, Edutainer has been committed to transforming learning into a more engaging, practical, and future-ready experience. Our journey reflects continuous growth, innovation, and a strong dedication to empowering learners for real-world success.",
    image: "/images/about/about-journey-growth.svg",
  },
  {
    id: "collaboration",
    title: "Strengthening Industry-Academic Bonds",
    para1: "Our partnership with VTU focuses on upskilling students through job-ready courses and virtual internships, preparing them with practical skills needed for the tech industry.",
    para2: "Through this collaboration, we bridge the gap between academics and industry by providing hands-on learning experiences that enhance employability and career readiness.",
    image: "/images/about/collaboration-vtu.png",
  },
  {
    id: "growth",
    title: "Expanding Opportunities Through Innovation",
    para1: "Launched 15+ successful programs designed to upskill engineering students and professionals in high-demand fields. Proudly partnered with a prestigious technological university to support 400,000 engineering students, helping to drive their career growth and job readiness.",
    para2: "Through these initiatives, we continue to strengthen our impact by delivering industry-aligned learning experiences that empower learners with practical skills and future-focused career opportunities.",
    image: "/images/about/about-hero-learning.svg",
  },
  {
    id: "impact",
    title: "Transforming the Education Ecosystem",
    para1: "From individual learners to university-wide implementations, our focus remains on providing accessible, engaging, and highly effective learning experiences that create lasting impact.",
    para2: "We continue to innovate and scale our reach, ensuring that every learner — regardless of background or geography — has access to quality education that prepares them for the challenges and opportunities of tomorrow.",
    image: "/images/about/about-journey-growth.svg",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT - Premium SaaS Design
───────────────────────────────────────────── */
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-[72px]">

        {/* ═════════════════════════════════════
            VISION - Split Layout (Image Left, Text Right)
        ═══════════════════════════════════════ */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Image Left */}
              <div>
                <img
                  src="/images/about/about-vision-future.svg"
                  alt="Our Vision"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Text Right */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <Target className="w-4 h-4" />
                  Our Vision
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  A Transformative Educational Ecosystem
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To build a transformative and future-ready educational ecosystem where innovation meets opportunity, empowering learners from all backgrounds to unlock their full potential. We envision education as a catalyst for creativity, critical thinking, and real-world problem-solving in a rapidly evolving global landscape.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════
            MISSION - Split Layout (Text Left, Image Right)
        ═══════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Left */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <Rocket className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Bridging Learning and Modern Technology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To bridge the gap between conventional learning and modern technology by transforming traditional education into a more accessible, engaging, and future-focused experience. We are committed to delivering simplified, interactive, and industry-relevant educational solutions that equip learners with practical skills and real-world knowledge.
                </p>
              </div>

              {/* Image Right */}
              <div>
                <img
                  src="/images/about/about-misson.svg"
                  alt="Our Mission"
                  className="w-full rounded-lg"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════
            OUR IMPACT - Horizontal Stats (No Heavy Cards)
        ═══════════════════════════════════════ */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to educational excellence and accessibility.
              </p>
            </div>

            {/* Horizontal Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-sm font-semibold text-gray-900 mb-2">Learners Empowered</div>
                <p className="text-sm text-gray-600">
                  Empowering over 50,000 learners with accessible, technology-driven education that builds confidence and real-world skills.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">1,000+</div>
                <div className="text-sm font-semibold text-gray-900 mb-2">Virtual Internships</div>
                <p className="text-sm text-gray-600">
                  Delivering 1,000+ virtual internships that connect academic learning with meaningful industry experience.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">90%</div>
                <div className="text-sm font-semibold text-gray-900 mb-2">Completion Rate</div>
                <p className="text-sm text-gray-600">
                  Maintaining a 90% completion rate through engaging, simplified, and learner-focused educational experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-sm font-semibold text-gray-900 mb-2">Partner Organizations</div>
                <p className="text-sm text-gray-600">
                  Partnering with 20+ organizations to expand opportunities and enhance the impact of quality education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════
            OUR STORY - Alternating Split Sections
        ═══════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From our founding principles to our continued growth and impact, here's how we've evolved to serve learners better.
              </p>
            </div>

            <div className="space-y-32">
              {storyPhases.map((phase, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={phase.id}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                  >
                    {/* Image */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full rounded-lg"
                      />
                    </div>

                    {/* Text */}
                    <div className={`max-w-xl ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                        {phase.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {phase.para1}
                      </p>
                      <p className="text-lg text-gray-500 leading-relaxed">
                        {phase.para2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════
            CORE VALUES - Minimal Grid (No Heavy Cards)
        ═══════════════════════════════════════ */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision, every product, every partnership.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm">
                    {value.title === "Innovation" && <Lightbulb className="w-8 h-8 text-amber-600" />}
                    {value.title === "Accessibility" && <Globe className="w-8 h-8 text-emerald-600" />}
                    {value.title === "Excellence" && <Award className="w-8 h-8 text-blue-600" />}
                    {value.title === "Collaboration" && <Heart className="w-8 h-8 text-rose-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
