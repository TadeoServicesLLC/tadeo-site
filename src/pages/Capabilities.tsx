import { motion } from "framer-motion";
import {
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
      "Develop and maintain project scope, engineering technical requirements, budgets, actuals, forecasts, and schedules using MS Project and MS Project Online, while managing Agile workflows through Jira Kanban, Sprint, and REA Boards to track tasks, dependencies, deliverables, and milestone targets.",
      "Perform resource loading and forecasting using Anaplan, manage project risks and issues, facilitate weekly and monthly Program Management Reviews (PMRs), and prepare financial forecasts, status updates, performance metrics, and mitigation strategies for leadership.",
    ],
  },
  {
    category: "Training & Workflow Development",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    items: [
      "Develop and maintain Technical Manuals, Quick Start Guides, Student Guides, lesson plans, PowerPoint training materials, and Operator/Maintainer Tasks supporting equipment operation, troubleshooting, maintenance, and instructional requirements.",
      "Integrate Technical Manual and training data to ensure consistency, effective knowledge transfer, and optimum knowledge retention; deliver technical training to end users, students, coworkers, and T2/T3 trainers while adapting complex technical information for effective instruction.",
    ],
  },
  {
    category: "Integrated Logistic Support",
    icon: <Truck className="h-6 w-6 text-white" />,
    items: [
      "Perform Integrated Logistics Support (ILS) analyses, including Reliability Analysis, Troubleshooting Procedures, Maintenance Task Analysis, FMECA, and Maintenance Concepts, to support Level of Repair Analysis (LORA) and CDRL deliverables.",
      "Integrate logistics analysis data into LORA, Technical Manuals, Maintenance Manuals, Field Service Support, and Training products; develop, review, and update LORA deliverables including feeder data, technical revisions, change logs, configuration management, and revision control.",
    ],
  },
  {
    category: "DoD Platform Integration",
    icon: <Shield className="h-6 w-6 text-white" />,
    items: [
      "Light Weight Vehicle Surveillance System (LVSS)",
      "Fixed Surveillance System and Counter-UAS (C-UAS) Capabilities (Argus XL ADA C-UAS)",
      "Long-range Counter Unmanned Aerial Systems (Cerberus XL C-UAS)",
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
            programs, from program management and training to logistics and DoD
            platform integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </div>

        <section aria-labelledby="credentials-heading" className="mb-20">
          <h2 id="credentials-heading" className="text-3xl font-bold text-white mb-8">
            Certifications &amp; Contracting Information
          </h2>
          <GlassSurface width="100%" height="auto" borderRadius={16} className="shadow-lg shadow-black/20">
            <div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-200">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minority Business Enterprise</li>
                  <li>Woman-Owned Small Business Enterprise</li>
                  <li>Veteran-Owned Business Enterprise</li>
                </ul>
              </div>
              <dl className="space-y-3">
                <div><dt className="font-semibold text-white">CAGE Code</dt><dd>978Q1</dd></div>
                <div><dt className="font-semibold text-white">UEI</dt><dd>G4M6VS26RL73</dd></div>
                <div><dt className="font-semibold text-white">NAICS Codes</dt><dd>541611 | 541614 | 541618 | 541430 | 541613 | 541690 | 561410 | 611430 | 611699</dd></div>
              </dl>
            </div>
          </GlassSurface>
        </section>

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
                  Capabilities Statement
                </h2>
              </div>
              <p className="text-zinc-200">Preview or download our updated capabilities statement.</p>
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
                title="Tadeo Services Capabilities Statement"
                className="h-[560px] w-full rounded-xl bg-white"
              >
                <a href={capabilitiesPdf} className="text-zinc-900 underline">Open the capabilities statement.</a>
              </iframe>
            </div>
          </GlassSurface>
        </motion.section>
      </div>
    </div>
  );
};

export default Capabilities;
