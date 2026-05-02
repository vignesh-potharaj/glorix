"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-navy-900/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded bg-electric-blue flex items-center justify-center text-white font-display font-bold text-lg">
            G
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">Glorx</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-electric-blue",
                pathname === link.href ? "text-electric-blue" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-electric-blue hover:bg-electric-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,255,0.3)] hover:shadow-[0_0_25px_rgba(37,99,255,0.5)]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-navy-900 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-display font-medium transition-colors",
                pathname === link.href ? "text-electric-blue" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-electric-blue text-white px-8 py-3 rounded-full text-lg font-medium mt-4 shadow-[0_0_15px_rgba(37,99,255,0.4)]"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
