import { motion } from "framer-motion";
import GlassSurface from "../components/GlassSurface";

const About = () => {
  return (
    <div className="py-[170px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left md:order-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              className="shadow-lg shadow-black/20"
            >
              <div className="w-full p-6">
                <p className="text-xl text-white leading-relaxed">
                  Tadeo Services LLC is a Women Veteran-Owned Small Business
                  (WVOSB) based in Columbia, Maryland, specializing in workflow
                  development, training solutions, DoD platform integration, and
                  creative communications support for government, defense, and
                  commercial organizations.
                </p>
              </div>
            </GlassSurface>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:order-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-zinc-800 rounded-full flex items-center justify-center border-4 border-zinc-700 overflow-hidden shadow-xl mb-4">
                <img
                  src="/jennifer-medillin.jpg"
                  alt="Jennifer Medillin, Owner &amp; Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-zinc-400 font-medium">
                Jennifer Medillin, Owner &amp; Founder
              </span>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassSurface
              width="100%"
              height={384}
              borderRadius={16}
              className="shadow-lg shadow-black/20 overflow-hidden"
            >
              <img
                src="/dinner-picture.webp"
                alt="Tadeo Company Dinner 2025"
                className="w-full h-full object-cover"
              />
            </GlassSurface>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              className="shadow-lg shadow-black/20"
            >
              <div className="w-full p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Company Overview
                </h3>
                <p className="text-zinc-200 mb-4">
                  We provide integrated Program Management, Training &amp;
                  Workflow Development, Integrated Logistics Support (ILS),
                  and DoD Platform Integration capabilities supporting complex
                  defense and surveillance programs.
                </p>
                <p className="text-zinc-200">
                  We deliver practical solutions that improve operational
                  readiness, streamline knowledge transfer, and enhance
                  organizational effectiveness.
                </p>
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
