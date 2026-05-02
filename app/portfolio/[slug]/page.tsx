import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CaseStudyPage() {
  // Mock data for the case study template
  // In a real app, you'd fetch this based on params.slug
  const project = {
    title: "TechFlow SaaS Frontend Redesign",
    client: "TechFlow Inc.",
    category: "Website Development",
    timeline: "8 Weeks",
    liveLink: "https://example.com",
    overview: "TechFlow was struggling with a legacy frontend that was slow, hard to maintain, and suffering from low conversion rates. They needed a complete overhaul of their marketing site and dashboard to reflect their enterprise-grade software.",
    challenge: "The existing application was built on an outdated tech stack, resulting in slow load times and a disjointed user experience. The primary challenge was migrating a complex dashboard with real-time data visualizations without disrupting their active user base.",
    solution: "We re-platformed the entire frontend using Next.js and Tailwind CSS. We implemented a modern, dark-themed design system, optimized data fetching with React Query, and introduced Framer Motion for subtle, engaging micro-animations.",
    results: [
      "40% increase in sign-up conversion rate",
      "65% reduction in initial page load time",
      "Significantly improved Lighthouse scores (98+ across all metrics)",
      "Reduced frontend technical debt by migrating to a typed Next.js architecture",
    ],
    techStack: ["Next.js 14", "Tailwind CSS", "TypeScript", "Framer Motion", "React Query"],
    heroImage: "linear-gradient(135deg, #2563FF 0%, #0a1628 100%)",
  };

  return (
    <div className="pt-24 pb-20 w-full">
      <div className="container mx-auto px-6 lg:px-12">
        
        <Link href="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end mb-8">
            <div>
              <div className="text-electric-blue font-semibold uppercase tracking-wider text-sm mb-3">
                {project.category}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">{project.title}</h1>
            </div>
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-navy-900 font-semibold hover:bg-gray-200 transition-colors flex-shrink-0"
            >
              Visit Live Site
            </a>
          </div>

          <div 
            className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10"
            style={{ background: project.heroImage }}
          ></div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.overview}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-6">The Results</h2>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start text-lg text-gray-200 bg-navy-800/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-electric-blue mr-4 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 sticky top-32">
              <h3 className="font-display text-xl font-bold mb-6 border-b border-white/10 pb-4">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider mb-1">Client</div>
                  <div className="text-white font-medium text-lg">{project.client}</div>
                </div>
                
                <div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-white font-medium text-lg">{project.timeline}</div>
                </div>

                <div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider mb-3">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-sm text-gray-300 bg-navy-900 px-3 py-1.5 rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
