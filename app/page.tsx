"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, LineChart, Cpu, Bot, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Countries" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "48hr", label: "Response SLA" },
];

const services = [
  {
    title: "Website Development",
    description: "High-converting landing pages, SaaS frontends, and e-commerce platforms.",
    icon: Code,
    href: "/services",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven SEO, paid ads, and growth strategies that scale.",
    icon: LineChart,
    href: "/services",
  },
  {
    title: "Custom Software",
    description: "Robust web apps, APIs, and scalable SaaS MVPs.",
    icon: Cpu,
    href: "/services",
  },
  {
    title: "AI Agents",
    description: "Intelligent automation, LLM integrations, and custom chatbots.",
    icon: Bot,
    href: "/services",
  },
];

const portfolio = [
  {
    title: "Fintech Dashboard",
    category: "Custom Software",
    image: "linear-gradient(135deg, #2563FF 0%, #0a1628 100%)",
  },
  {
    title: "E-Commerce Growth",
    category: "Digital Marketing",
    image: "linear-gradient(135deg, #132b4b 0%, #2563FF 100%)",
  },
  {
    title: "AI Support Bot",
    category: "AI Agents",
    image: "linear-gradient(135deg, #0d1e36 0%, #2563FF 100%)",
  },
];

const pillars = [
  "Direct Founder Communication",
  "Transparent Pricing",
  "Proven ROI",
  "Fast Turnaround",
];

const testimonials = [
  {
    quote: "Glorx transformed our online presence. The new SaaS frontend is incredibly fast and converts much better.",
    author: "Sarah J.",
    role: "CEO, TechFlow",
  },
  {
    quote: "Working directly with the founders made a huge difference. They understood our vision and delivered perfectly.",
    author: "Michael T.",
    role: "Founder, GrowthX",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[128px]"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              We Build Digital Products <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">
                That Scale.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Websites. Software. AI Agents. Marketing — built by founders, for founders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-navy-900 font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                See Our Work
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-electric-blue text-white font-semibold text-lg hover:bg-electric-hover transition-colors shadow-[0_0_20px_rgba(37,99,255,0.4)]"
              >
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-navy-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-gray-400 text-lg">We deliver end-to-end digital solutions designed to drive growth and efficiency for your business.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-card p-8 group hover:bg-navy-700/50 transition-all duration-300">
                <service.icon className="w-12 h-12 text-electric-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center text-electric-blue font-medium hover:text-white transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Glorx */}
      <section className="py-24 bg-navy-800/20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Choose Glorx?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We are not just another agency. We are founders who have built and scaled products. We know what it takes to succeed in the modern digital landscape.
              </p>
              <ul className="space-y-4">
                {pillars.map((pillar, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-lg text-gray-200"
                  >
                    <CheckCircle2 className="w-6 h-6 text-electric-blue mr-4 flex-shrink-0" />
                    {pillar}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10 flex items-center justify-center p-12">
                 {/* Abstract visual representation */}
                 <div className="w-full h-full relative">
                   <div className="absolute inset-0 bg-electric-blue/20 blur-3xl rounded-full"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-electric-blue/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-4xl font-bold text-white tracking-widest">
                     GLORX
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400 text-lg">A glimpse into products we&apos;ve scaled.</p>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center text-white hover:text-electric-blue transition-colors font-medium">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div 
                  className="aspect-video w-full rounded-2xl mb-6 overflow-hidden relative"
                  style={{ background: item.image }}
                >
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-electric-blue transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-blue transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-800/30 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl font-bold mb-16">What Founders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <div key={i} className="glass-card p-8 md:p-10 text-left relative">
                <div className="text-6xl text-electric-blue/20 absolute top-4 left-6 font-display">&quot;</div>
                <p className="text-lg md:text-xl text-gray-200 mb-8 relative z-10 leading-relaxed">
                  {test.quote}
                </p>
                <div>
                  <div className="font-semibold text-white">{test.author}</div>
                  <div className="text-sm text-gray-400">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-electric-blue opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Glorx can help you scale your business with world-class digital products.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-electric-blue text-white font-semibold text-xl hover:bg-electric-hover transition-colors shadow-[0_0_30px_rgba(37,99,255,0.5)]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
