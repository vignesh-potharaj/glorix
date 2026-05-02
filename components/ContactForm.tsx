"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <h3 className="font-display text-2xl font-bold mb-6">Send an Inquiry</h3>
      
      {isSuccess ? (
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-6 rounded-xl text-center">
          <h4 className="font-semibold text-lg mb-2">Message Sent Successfully!</h4>
          <p>We&apos;ve received your inquiry and will get back to you within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={cn(
                  "w-full bg-navy-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors",
                  errors.name ? "border-red-500/50" : "border-white/10"
                )}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
              <input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                })}
                className={cn(
                  "w-full bg-navy-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors",
                  errors.email ? "border-red-500/50" : "border-white/10"
                )}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-300">Company / Project Name</label>
            <input
              id="company"
              {...register("company")}
              className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors"
              placeholder="Acme Corp"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-300">Interested In *</label>
              <select
                id="service"
                {...register("service", { required: "Please select a service" })}
                className={cn(
                  "w-full bg-navy-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors appearance-none",
                  errors.service ? "border-red-500/50" : "border-white/10"
                )}
              >
                <option value="">Select a service...</option>
                <option value="website">Website Development</option>
                <option value="software">Custom Software</option>
                <option value="marketing">Digital Marketing</option>
                <option value="ai">AI Agents</option>
                <option value="other">Other / Not Sure</option>
              </select>
              {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-gray-300">Budget Range</label>
              <select
                id="budget"
                {...register("budget")}
                className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors appearance-none"
              >
                <option value="">Select budget range...</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details *</label>
            <textarea
              id="message"
              {...register("message", { required: "Please provide some project details" })}
              rows={4}
              className={cn(
                "w-full bg-navy-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-colors resize-none",
                errors.message ? "border-red-500/50" : "border-white/10"
              )}
              placeholder="Tell us about your goals, timeline, and current challenges..."
            ></textarea>
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-electric-blue hover:bg-electric-hover text-white font-semibold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-sm text-gray-400">
        We reply within 48 hours. No spam. No pushy sales.
      </div>
    </div>
  );
}
