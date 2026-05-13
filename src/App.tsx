import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Star, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "./images/logo.png";
import heroImg from "./images/hero.png";
import domeRect from "./images/dome_rect.png";
import wafLogo from "./images/waf_logo.png";
import waffleImg from "./images/waffle.png";
import greySuit from "./images/grey_suit.jpeg";

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5 pt-3 pl-13 pr-13 pb-1">
      {/* Left: logo + brand */}
      <div className="flex items-center gap-3">
  <img src={logo} alt="Glorix logo" className="w-8 h-8 sm:w-12 sm:h-12 md:w-22 md:h-22 rounded-none object-contain shadow-sm" />
      </div>

      {/* Center: nav links (centered) */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="flex items-center gap-10 text-base md:text-lg font-semibold opacity-90">
          <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
          <a href="#case-studies" className="hover:opacity-100 transition-opacity">Case Study</a>
          <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#reviews" className="hover:opacity-100 transition-opacity">Reviews</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </div>

      {/* Right: socials + CTA + mobile menu */}
      <div className="flex items-center gap-6">
        {/* socials removed */}

        <a href="#contact" className="hidden md:inline-block px-6 py-3 rounded-full bg-linear-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-base font-semibold hover:from-purple-600/40 transition-all">
          Get in Touch
        </a>

        <button className="md:hidden p-3 rounded-lg bg-white/5" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#case-studies" onClick={() => setIsOpen(false)}>Case Study</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-green-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Booking 3 new clients - Q1 2026
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-sans leading-[1.1] tracking-tight text-white">
          If your marketing isn't <span className="text-gradient font-serif italic font-light">printing money</span>, we should talk.
        </h1>
        
        <p className="text-xl text-white/60 leading-relaxed max-w-lg font-light">
          I'm <span className="text-white font-semibold">Karthikeyan</span>, founder of <span className="text-white font-semibold">Glorix</span> — I build Meta Ads, WhatsApp funnels, and short-form content systems that turn attention into actual bookings & revenue.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Let's Chat <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="#case-studies" className="btn-secondary">
            See Case Studies
          </a>
        </div>
        
        <div className="flex gap-12 pt-8">
          <div>
            <div className="text-4xl font-extrabold text-white">4+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">Brands worked with</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white">150+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">Bookings driven</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-gradient">Multi</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">Industries served</div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-square"
        >
          <img
            src={heroImg}
            alt="Karthikeyan Portrait"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Badges */}
          <div className="absolute top-10 left-6 bg-glass p-3 rounded-2xl flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <img src="https://picsum.photos/seed/cafe/100/100" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-[10px] opacity-60">Dome Café</div>
              <div className="text-sm font-bold">150+ <span className="text-blue-700 font-normal">Bookings</span></div>
            </div>
          </div>
          
          <div className="absolute top-20 right-6 bg-glass p-3 rounded-2xl flex items-center gap-3 animation-delay-1000 animate-bounce">
            <div>
              <div className="text-[10px] opacity-60 text-right">Avg. Order Value</div>
              <div className="text-sm font-bold italic">7<span className="text-blue-700 font-normal"> Figure Revenue</span></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <ArrowUpRight className="text-green-700 w-5 h-5" />
            </div>
          </div>

          <div className="absolute bottom-10 left-6 bg-glass px-4 py-2 rounded-xl backdrop-blur-2xl">
            <div className="text-[10px] uppercase tracking-tighter opacity-70">Funnel</div>
            <div className="text-lg font-bold">Meta + WhatsApp</div>
          </div>

          <div className="absolute bottom-1/4 right-6 bg-glass p-3 rounded-xl backdrop-blur-2xl">
            <div className="text-[10px] uppercase tracking-tighter opacity-70">Content</div>
            <div className="text-lg font-bold flex items-center gap-1">Retention <ArrowUpRight className="text-purple-400" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BrandMarquee = () => {
  const brands = [
    { name: "DOME CAFE", src: "https://picsum.photos/seed/dome/200/100" },
  { name: "WAFFLICIOUS", src: wafLogo },
    { name: "MEDHA MASTERMIND", src: "https://picsum.photos/seed/medha/200/100" },
    { name: "DOME CAFE", src: "https://picsum.photos/seed/dome2/200/100" },
  { name: "WAFFLICIOUS", src: wafLogo },
    { name: "MEDHA MASTERMIND", src: "https://picsum.photos/seed/medha2/200/100" },
  ];
  
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <div className="max-w-max mx-auto text-center mb-12 text-sm uppercase tracking-[0.35em] text-white/40 font-bold">Brands I've helped grow</div>
      <div className="flex gap-16 whitespace-nowrap marquee-container">
         <motion.div 
          animate={{ x: [0, -1600] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-16 md:gap-32 items-center"
         >
           {brands.concat(brands).map((brand, i) => (
             <div key={i} className="flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
               <img src={brand.src} alt={brand.name} className="h-10 md:h-12 lg:h-16 w-auto object-contain invert" referrerPolicy="no-referrer" />
               <span className="font-bold text-2xl md:text-3xl tracking-tighter text-white">{brand.name}</span>
             </div>
           ))}
         </motion.div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Meta Ads Management",
      desc: "From cold audiences to retargeting funnels — campaigns engineered to scale profitably on Facebook & Instagram.",
      points: ["Creative testing frameworks", "Advantage+ scaling", "CBO/ABO structures"],
      icon: <div className="p-2 rounded-lg bg-red-400/10 text-red-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">M</div></div>
    },
    {
      title: "Google Ads & PMax",
      desc: "Capture high-intent buyers with search, shopping, and Performance Max campaigns dialed for ROAS.",
      points: ["Shopping feed optimization", "PMax asset groups", "Brand defense"],
      icon: <div className="p-2 rounded-lg bg-blue-400/10 text-blue-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">G</div></div>
    },
    {
      title: "Conversion Tracking",
      desc: "GA4, CAPI, server-side tracking — so every rupee spent is measurable and attributable.",
      points: ["Meta CAPI", "GA4 + GTM", "Attribution modeling"],
      icon: <div className="p-2 rounded-lg bg-green-400/10 text-green-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">C</div></div>
    },
    {
      title: "Landing Page Strategy",
      desc: "Pages that convert. Wireframes, copy, and CRO experiments designed around the buyer's journey.",
      points: ["Wireframing", "A/B test design", "Funnel mapping"],
      icon: <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">L</div></div>
    },
    {
      title: "Email & Retention",
      desc: "Klaviyo flows that print money in the background. Welcome, abandoned cart, post-purchase, win-back.",
      points: ["Flow builds", "Segmentation", "Campaign calendars"],
      icon: <div className="p-2 rounded-lg bg-pink-400/10 text-pink-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">E</div></div>
    },
    {
      title: "Creative Strategy",
      desc: "Briefs, hooks, and concepts your editors can run with. Built around insight, not guesses.",
      points: ["Hook frameworks", "UGC briefs", "Ad concept boards"],
      icon: <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400"><div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">S</div></div>
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-end mb-20">
        <div className="space-y-4">
          <div className="uppercase tracking-[0.2em] text-[10px] text-purple-400 font-bold">Services</div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white">
            Growth systems, <span className="font-serif italic font-light text-white/40">not just ads.</span>
          </h2>
        </div>
        <p className="text-white/40 text-xl max-w-md ml-auto text-right font-light leading-relaxed">
          I build the entire revenue machine — paid traffic, tracking, creative pipeline, and email — so your brand grows without you holding it together.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group"
          >
            <div className="mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
            <p className="text-white/40 text-sm mb-6 leading-relaxed font-light">{s.desc}</p>
            <ul className="space-y-3">
              {s.points.map((p, j) => (
                <li key={j} className="flex items-center gap-3 text-[11px] text-white/50 font-medium tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Dome Café",
      subtitle: "META ADS + WHATSAPP FUNNEL",
      tag: "Hospitality • Experiences",
      metric: "150+ bookings",
      desc: "Dome Café needed a consistent booking flow for high-ticket experiences and events, but existing campaigns lacked clear funnel structure and conversion tracking. Built a Meta Ads system with emotion-driven creatives, WhatsApp as the primary conversion channel, and CTA-based attribution.",
      insight: "For hospitality brands, creative positioning often matters more than targeting complexity.",
      stat: "~₹4.9K spend • ~₹6.5K AOV",
      tags: ["Meta Ads", "WhatsApp Funnel", "Tracking"],
      img: domeRect
    },
    {
      title: "Medha Mastermind",
      subtitle: "LEAD GENERATION FUNNEL",
      tag: "Education • Coaching",
      metric: "Lower CPL",
      desc: "Needed a cleaner lead acquisition system for educational offers and less dependency on inconsistent organic reach. Built Meta lead campaigns with sharper hooks, pain-point driven copy, a simplified funnel journey, and a reusable creative testing framework.",
      insight: "Educational brands convert better when ads focus on transformation rather than features.",
      stat: "~₹20K campaign spend",
      tags: ["Meta Lead Ads", "Copywriting", "CRO"],
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Wafflicious",
      subtitle: "CONTENT PRODUCTION & BRAND POSITIONING",
      tag: "F&B • Short-form Content",
      metric: "Retention ↑",
      desc: "The brand had visually decent content but lacked identity and consistency across short-form platforms. Built a content direction around appetite-trigger visuals, faster hooks, retention-focused edits, and platform-native storytelling.",
      insight: "Food content fails when it looks aesthetic but lacks sensory triggers and pacing.",
      stat: "Stronger brand recall",
      tags: ["Content Strategy", "Short-form", "Brand"],
      img: waffleImg
    }
  ];

  return (
    <section id="case-studies" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="grid md:grid-cols-2 gap-8 items-end mb-20">
        <div className="space-y-4 relative z-10">
          <div className="uppercase tracking-[0.2em] text-[10px] text-purple-400 font-bold">Case studies</div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white">
            Receipts, <span className="font-serif italic font-light text-white/40">not promises.</span>
          </h2>
        </div>
        <p className="text-white/40 text-xl max-w-md ml-auto text-right font-light leading-relaxed">
          Three brands I've worked with — strategy, execution, and actual results pulled from verifyable ad accounts.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {cases.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/[0.03] border border-white/5 overflow-hidden flex flex-col h-full hover:border-white/20 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
               <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" referrerPolicy="no-referrer" />
               <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase border border-white/10">{c.tag}</div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-purple-400 mt-1">{c.subtitle}</div>
                </div>
                <div className="px-2 py-1 rounded bg-green-400/10 text-[10px] text-green-400 font-bold uppercase flex items-center gap-1 border border-green-400/20">
                  <ArrowUpRight className="w-3 h-3" /> {c.metric}
                </div>
              </div>
              
              <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1 font-light">{c.desc}</p>
              
              <div className="p-4 rounded-xl bg-white/5 mb-8 border border-white/5">
                <span className="text-[10px] font-bold text-white/40 uppercase block mb-1 tracking-widest">Key insight:</span>
                <p className="text-xs font-medium text-white/80 italic">"{c.insight}"</p>
              </div>

              <div className="flex justify-between items-center mt-auto border-t border-white/5 pt-6">
                <div className="text-xs font-bold text-white">{c.stat}</div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all cursor-pointer">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden aspect-[4/5] relative group border border-white/5"
          >
            <img
              src={greySuit}
              alt="About Karth"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 p-6 bg-glass rounded-3xl max-w-[280px]">
               <div className="uppercase text-[10px] tracking-widest text-purple-400 font-bold mb-2">Currently</div>
               <div className="text-sm font-bold leading-relaxed text-white">Building Glorix: Performance marketing & content strategy for brands across India</div>
            </div>
          </motion.div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight">
            I treat your ad account <span className="font-serif italic font-light text-white/40">like my own.</span>
          </h2>
          
          <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
            <p>I'm Karthikeyan — the founder of <span className="text-white font-bold">Glorix</span>. I help brands move from "running ads" to building actual funnels — Meta Ads, WhatsApp flows, short-form content, and the strategy that ties it all together.</p>
            <p>I don't hand projects off to junior buyers. When you work with me, you work with me — strategy, ad ops, creative direction, and reporting, all in one room.</p>
          </div>
          
          <ul className="space-y-6 pt-4">
            {[
              "Profit > Vanity metrics. ROAS, CAC, and contribution margin are the only scoreboards I trust.",
              "Creative is the new targeting. I build creative pipelines, not just ad sets.",
              "Tracking before scaling. If you can't measure it clearly, you're flying blind.",
              "Weekly transparent reporting. You always know where every rupee is going."
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-white/80 font-bold text-sm tracking-tight">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Aanya Sharma",
      role: "Founder, Luma Activewear",
      text: "Karthik rebuilt our entire ads setup in 2 weeks. We went from struggling to break even at ₹3L/day to consistently doing 6x ROAS. He genuinely understands D2C economics.",
      img: "https://i.pravatar.cc/150?u=aanya"
    },
    {
      name: "Rohan Iyer",
      role: "Co-founder, Brewhaus Coffee",
      text: "The reporting alone is worth it. Every Monday we get a clear picture of where revenue is coming from. No fluff, no vanity metrics. Just decisions to make.",
      img: "https://i.pravatar.cc/150?u=rohan"
    },
    {
      name: "Priya Menon",
      role: "Head of Growth, Northwind",
      text: "We tried three agencies before Karthik. He's the only one who actually moved the CAC needle. Now he runs our entire paid stack and we've never looked back.",
      img: "https://i.pravatar.cc/150?u=priya"
    },
    {
      name: "Vikram Desai",
      role: "Founder, Lumen Home",
      text: "Treats our money like his own. That's rare. We've scaled spend 4x in a year and stayed profit-positive every single month.",
      img: "https://i.pravatar.cc/150?u=vikram"
    }
  ];

  return (
    <section id="reviews" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
         <div className="uppercase tracking-[0.2em] text-[10px] text-purple-400 font-bold">Testimonials</div>
         <h2 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white">
           Founders who <span className="font-serif italic font-light text-white/40">slept better</span> after we started.
         </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/5 shadow-2xl flex flex-col relative"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-5">
                <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-white text-lg leading-tight">{r.name}</div>
                  <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mt-1">{r.role}</div>
                </div>
              </div>
              <div className="w-10 h-8 flex items-center justify-center bg-white/5 rounded-lg text-purple-400 text-2xl font-serif">“</div>
            </div>
            
            <p className="text-white/60 mb-8 italic leading-relaxed flex-1 text-lg font-light">"{r.text}"</p>
            
            <div className="flex gap-1 border-t border-white/5 pt-6">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-purple-400 text-purple-400" />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div className="uppercase tracking-widest text-[10px] opacity-40 font-medium">Contact</div>
        <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tight">
          Let’s make your <span className="font-serif italic font-light opacity-60">next quarter</span> the best one yet.
        </h2>
        
        <p className="text-white/40 text-lg">Tell me a little about your brand and where you’re stuck. I read every message personally and reply within 24 hours.</p>
        
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase opacity-40">Email</div>
              <div className="font-medium">karthikeyan.consult@gmail.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase opacity-40">Direct DM</div>
              <div className="font-medium">Reach me on Instagram / LinkedIn</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase opacity-40">Based In</div>
              <div className="font-medium">India • Working with brands globally</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/5">
        {status === "success" ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-white/60">Thank you for reaching out. I'll get back to you personally within the next 24 hours.</p>
            <button onClick={() => setStatus("idle")} className="text-purple-400 text-sm font-medium hover:underline">Send another message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-1">Your Name</label>
                <input required name="name" type="text" placeholder="Karthik Subramaniam" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-1">Email</label>
                <input required name="email" type="email" placeholder="you@brand.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-1">Company / Brand</label>
                <input name="brand" type="text" placeholder="Brand name (optional)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-1">Monthly AD Budget</label>
                <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors appearance-none">
                  <option className="bg-black">Select range</option>
                  <option className="bg-black">₹50K - ₹2L</option>
                  <option className="bg-black">₹2L - ₹5L</option>
                  <option className="bg-black">₹5L+</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-40 ml-1">What's going on?</label>
              <textarea name="message" required rows={4} placeholder="Tell me about your brand, current spend, and what you want to fix or grow..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none lg:h-32" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
               <span className="text-[10px] opacity-30 italic">Replies within 24 hours • No spam, ever.</span>
               <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full md:w-auto btn-primary disabled:opacity-50"
               >
                {status === "loading" ? "Sending..." : "Send Message"} <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="grid md:grid-cols-4 gap-16 relative z-10">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Glorix logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-none object-contain shadow-lg shadow-purple-500/20" />
          </div>
          <p className="text-white/40 text-base leading-relaxed max-w-xs font-light">Building Glorix: Performance marketing & content strategy for ambitious brands. Technical precision meets creative excellence.</p>
          <div className="text-sm font-bold text-white bg-white/5 px-4 py-2 rounded-lg inline-block">karthikeyan.consult@gmail.com</div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Sitemap</h4>
          <ul className="space-y-4 text-sm font-medium text-white/60">
            <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
            <li><a href="#case-studies" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Follow</h4>
          <div className="flex gap-4">
            {/* Instagram & LinkedIn removed */}
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-20 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40 gap-6 border-t border-white/5 mt-20">
        <div>© 2026 Karthikeyan. All rights reserved.</div>
        <div className="flex gap-10 items-center">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            Built with discipline • Hyderabad
          </span>
        </div>
      </div>
    </footer>
  );
};

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple-600 selection:text-white bg-black">
      <Header />
      <Hero />
      <BrandMarquee />
      <Services />
      <CaseStudies />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
