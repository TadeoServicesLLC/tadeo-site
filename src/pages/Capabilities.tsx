import { motion } from "framer-motion";
import {
  Palette,
  BookOpen,
  CheckCircle,
  Download,
  FileText,
  Shield,
  TrendingUp,
  Truck,
} from "lucide-react";
import GlassSurface from "../components/GlassSurface";

const capabilitiesPdf = "/capabilities.pdf";

const services = [
  {
    category: "Program Management",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    items: [
      "Scope and Engineering Requirements",
      "Budgets and Schedules",
      "Resource Forecasting",
      "Risk Management and Reporting",
      "MS Project, MS Project Online, Anaplan, and Jira",
    ],
  },
  {
    category: "Training & Workflow Development",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    items: [
      "Technical Manuals and Quick Start Guides",
      "Student Guides and Lesson Plans",
      "Operator/Maintainer Tasks",
      "Training and Knowledge Transfer",
    ],
  },
  {
    category: "Integrated Logistics Support (ILS)",
    icon: <Truck className="h-6 w-6 text-white" />,
    items: [
      "Reliability Analysis",
      "Maintenance Task Analysis",
      "FMECA",
      "Maintenance Concepts",
      "LORA Development",
      "Maintenance and Sustainment Support",
    ],
  },
  {
    category: "Graphic Design & Visual Communications",
    icon: <Palette className="h-6 w-6 text-white" />,
    items: [
      "Capability Statements",
      "Technical Illustrations and Infographics",
      "Presentation and Briefing Materials",
      "Training Graphics and Visual Learning Aids",
      "Branding, Marketing Collateral, and Digital Content",
    ],
  },
  {
    category: "DoD Platform Integration",
    icon: <Shield className="h-6 w-6 text-white" />,
    items: [
      "Light Weight Vehicle Surveillance System (LVSS)",
      "Argus XL ADA C-UAS",
      "Cerberus XL C-UAS",
      "Integration of Program Management, Training, Logistics, Technical Documentation, and Visual Communications Across Complex DoD Systems",
    ],
  },
];

const Capabilities = () => {
  return (
    <div className="py-[170px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Capabilities</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
            Integrated capabilities supporting complex defense and surveillance
            programs, from program management and training to logistics, visual
            communications, and DoD platform integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <GlassSurface
                width="100%"
                height="100%"
                borderRadius={16}
                className="h-full shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="w-full p-6 h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-zinc-700/70 rounded-lg mr-4">{service.icon}</div>
                    <h2 className="text-xl font-bold text-white">{service.category}</h2>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start text-zinc-200">
                        <CheckCircle className="h-5 w-5 text-zinc-300 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-labelledby="capabilities-document-heading"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-7 w-7 text-white" />
                <h2 id="capabilities-document-heading" className="text-3xl font-bold text-white">
                  Company Profile
                </h2>
              </div>
              <p className="text-zinc-200">Preview or download our September 23, 2026 company profile.</p>
            </div>
            <a
              href={capabilitiesPdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A2633]"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
          </div>

          <GlassSurface width="100%" height="auto" borderRadius={16} className="shadow-lg shadow-black/20">
            <div className="w-full p-3 sm:p-5">
              <iframe
                src={`${capabilitiesPdf}#view=FitH`}
                title="Tadeo Services Company Profile"
                className="h-[560px] w-full rounded-xl bg-white"
              >
                <a href={capabilitiesPdf} className="text-zinc-900 underline">Open the company profile.</a>
              </iframe>
            </div>
          </GlassSurface>
        </motion.section>
      </div>
    </div>
  );
};

export default Capabilities;
