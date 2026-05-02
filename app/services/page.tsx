"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, LineChart, Cpu, Bot, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: Code,
    description: "We build blazing-fast, high-converting websites that serve as the foundation for your digital presence. Whether you need a sleek landing page, a complex SaaS frontend, or an e-commerce platform, we deliver pixel-perfect experiences.",
    included: [
      "Custom UI/UX Design",
      "Responsive Frontend Development (React/Next.js)",
      "Performance & SEO Optimization",
      "CMS Integration",
    ],
    forWhom: "Startups needing a professional launchpad or established businesses looking to rebrand and increase conversions.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: LineChart,
    description: "Drive traffic and convert visitors with data-driven growth strategies. We don't just run ads; we build holistic marketing engines that scale your customer acquisition while optimizing your return on ad spend (ROAS).",
    included: [
      "Search Engine Optimization (SEO)",
      "Paid Advertising (Google, Meta, LinkedIn)",
      "Conversion Rate Optimization (CRO)",
      "Analytics & Growth Tracking",
    ],
    forWhom: "Founders looking to scale their user base predictably and companies wanting to dominate their niche in search.",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: Cpu,
    description: "Turn complex business logic into intuitive, scalable web applications. We build custom software solutions tailored to your unique workflows, from internal dashboards to fully-fledged SaaS platforms.",
    included: [
      "Full-stack Web Application Development",
      "API Design & Integration",
      "Database Architecture",
      "Scalable Cloud Deployment",
    ],
    forWhom: "Businesses outgrowing off-the-shelf tools, or entrepreneurs building the next big SaaS product.",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    icon: Bot,
    description: "Automate workflows and supercharge your product with artificial intelligence. We integrate LLMs and build custom AI agents that can handle customer support, internal data processing, and complex reasoning tasks.",
    included: [
      "Custom Chatbot Development",
      "LLM Integration (OpenAI, Anthropic)",
      "Workflow Automation",
      "AI-Powered Feature Implementation",
    ],
    forWhom: "Innovative companies looking to reduce operational costs or add cutting-edge AI capabilities to their offerings.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">What We Build</h1>
          <p className="text-xl text-gray-400">
            Comprehensive digital solutions designed to help ambitious companies scale faster.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Visual side */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl glass-card border border-white/5 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-electric-blue/5 group-hover:bg-electric-blue/10 transition-colors duration-500"></div>
                    <service.icon className="w-32 h-32 text-electric-blue/50 group-hover:scale-110 group-hover:text-electric-blue transition-all duration-500 relative z-10" />
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-white mb-4 text-lg">What&apos;s Included:</h3>
                    <ul className="space-y-3">
                      {service.included.map((item, i) => (
                         <li key={i} className="flex items-start text-gray-300">
                           <CheckCircle2 className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0 mt-0.5" />
                           {item}
                         </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-10 bg-navy-800/50 p-6 rounded-xl border border-white/5">
                    <h3 className="font-semibold text-white mb-2">Who it&apos;s for:</h3>
                    <p className="text-gray-400 italic">{service.forWhom}</p>
                  </div>
                  
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center px-8 py-3 rounded-full bg-white text-navy-900 font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 mt-12 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Book a free discovery call with our founders. We&apos;ll analyze your business and recommend the best path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-electric-blue text-white font-semibold text-lg hover:bg-electric-hover transition-colors shadow-[0_0_20px_rgba(37,99,255,0.3)]"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
