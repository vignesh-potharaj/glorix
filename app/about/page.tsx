"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Eye, Lightbulb, TrendingUp } from "lucide-react";

const founders = [
  {
    name: "Vignesh",
    role: "Co-Founder & Technical Lead",
    bio: "Vignesh brings years of experience architecting scalable systems and leading technical teams. He ensures every product we build is robust, secure, and ready for exponential growth.",
    image: "linear-gradient(135deg, #2563FF 0%, #132b4b 100%)", // Placeholder
  },
  {
    name: "Karthikeyan",
    role: "Co-Founder & Growth Lead",
    bio: "With a deep background in digital strategy and growth marketing, Karthikeyan focuses on aligning our technical solutions with your business objectives to maximize ROI.",
    image: "linear-gradient(135deg, #1e50cc 0%, #0a1628 100%)", // Placeholder
  },
];

const values = [
  {
    title: "Speed",
    icon: Zap,
    description: "In the digital world, speed is a feature. We deliver high-quality products rapidly without compromising on excellence.",
  },
  {
    title: "Transparency",
    icon: Eye,
    description: "No hidden fees, no technical jargon meant to confuse. We believe in clear, honest communication at every step.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We don't just follow trends; we leverage the latest technologies like AI and modern frameworks to give you an edge.",
  },
  {
    title: "Results",
    icon: TrendingUp,
    description: "Beautiful code and design mean nothing if they don't move the needle. We are relentlessly focused on your business outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      
      {/* Hero */}
      <section className="py-20 text-center px-6 border-b border-white/5 bg-navy-800/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-electric-blue font-semibold uppercase tracking-wider text-sm mb-4">
            Based in Hyderabad • Building for the World
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Two founders. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">
              One mission.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We started Glorx because we saw a gap between what agencies promised and what businesses actually needed: founders who care about the product as much as you do.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left md:text-center">
              <p>
                Glorx wasn&apos;t born in a boardroom. It was built by two engineers and strategists who were tired of seeing companies overpay for mediocre digital products that failed to convert.
              </p>
              <p>
                We realized that the best products are built when the creators have skin in the game. That&apos;s why at Glorx, you don&apos;t talk to account managers or junior associates. You work directly with the founders. 
              </p>
              <p>
                Today, we partner with startups, SMBs, and mid-market companies internationally, delivering world-class websites, software, and AI solutions from our headquarters in Hyderabad, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-navy-800/30 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl font-bold mb-16 text-center">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div 
                  className="w-48 h-48 rounded-full mb-8 border-4 border-white/10"
                  style={{ background: founder.image }}
                ></div>
                <h3 className="font-display text-3xl font-bold mb-2">{founder.name}</h3>
                <div className="text-electric-blue font-medium mb-6">{founder.role}</div>
                <p className="text-gray-400 leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-900 border border-white/5 p-8 rounded-2xl hover:border-electric-blue/30 transition-colors"
              >
                <value.icon className="w-10 h-10 text-electric-blue mb-6" />
                <h3 className="font-display text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-navy-800/50 to-transparent">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to build together?</h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-white text-navy-900 font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>

    </div>
  );
}
