"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = ["All", "Website", "Software", "AI", "Marketing"];

const projects = [
  {
    slug: "techflow-saas-frontend",
    title: "TechFlow SaaS Frontend",
    clientType: "B2B SaaS",
    category: "Website",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    description: "A complete redesign and re-platforming of TechFlow's main marketing site and dashboard frontend, resulting in a 40% increase in conversion rate.",
    image: "linear-gradient(135deg, #2563FF 0%, #0a1628 100%)",
  },
  {
    slug: "fintech-dashboard-pro",
    title: "Fintech Dashboard Pro",
    clientType: "Enterprise Finance",
    category: "Software",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "A robust internal dashboard for financial analysts to process complex datasets and generate real-time reports securely.",
    image: "linear-gradient(135deg, #132b4b 0%, #2563FF 100%)",
  },
  {
    slug: "nexus-ai-support",
    title: "Nexus AI Support Agent",
    clientType: "E-Commerce",
    category: "AI",
    tags: ["OpenAI", "Python", "LangChain"],
    description: "An intelligent customer support agent capable of resolving 70% of tier 1 tickets automatically using company knowledge bases.",
    image: "linear-gradient(135deg, #0d1e36 0%, #2563FF 100%)",
  },
  {
    url: "#",
    title: "Global Reach Campaign",
    clientType: "Consumer Brand",
    category: "Marketing",
    tags: ["SEO", "Google Ads", "CRO"],
    description: "A holistic digital marketing campaign that expanded a D2C brand into 5 new international markets within 6 months.",
    image: "linear-gradient(135deg, #2563FF 0%, #132b4b 100%)",
  },
  {
    slug: "healthcare-booking-app",
    title: "CareConnect Web App",
    clientType: "Healthcare Provider",
    category: "Software",
    tags: ["Next.js", "tRPC", "Prisma"],
    description: "A HIPAA-compliant patient portal and booking system that reduced administrative overhead by 30%.",
    image: "linear-gradient(135deg, #1e50cc 0%, #0a1628 100%)",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => 
    activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="pt-24 pb-20 flex flex-col w-full">
      {/* Header */}
      <section className="py-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-400">
            Explore the digital products and campaigns we&apos;ve built for forward-thinking companies.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "bg-electric-blue text-white shadow-[0_0_15px_rgba(37,99,255,0.4)]"
                    : "bg-navy-800 text-gray-400 hover:text-white hover:bg-navy-700"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="glass-card group flex flex-col overflow-hidden h-full"
                >
                  <div 
                    className="aspect-video w-full relative overflow-hidden"
                    style={{ background: project.image }}
                  >
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                        {project.category}
                      </div>
                      <div className="text-sm text-gray-500">{project.clientType}</div>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-300 bg-navy-900/50 px-2 py-1 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={project.slug ? `/portfolio/${project.slug}` : "#"} 
                      className="mt-auto inline-flex items-center font-medium text-white hover:text-electric-blue transition-colors group/link"
                    >
                      View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
