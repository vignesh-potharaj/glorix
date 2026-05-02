import { Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 w-full min-h-screen">
      
      {/* Hero */}
      <section className="py-12 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Let&apos;s Build Something Great</h1>
          <p className="text-xl text-gray-400">
            Book a call or send us an inquiry. We&apos;re ready to help you scale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info & Calendly */}
            <div className="lg:w-5/12 space-y-12">
              
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Contact Information</h2>
                
                <div className="flex items-start gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <a href="mailto:hello@glorx.com" className="hover:text-electric-blue transition-colors">hello@glorx.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Response SLA</div>
                    <div>Within 48 Hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div>Hyderabad, India (Serving Global Clients)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Book a Discovery Call</h2>
                <p className="text-gray-400">
                  Schedule a 30-minute call directly with our founders to discuss your project requirements.
                </p>
                {/* 
                  Using a placeholder Calendly URL since one wasn't provided yet.
                  You can replace "https://calendly.com/your-calendly-link" with your actual link.
                */}
                <CalendlyEmbed url="https://calendly.com/acmesales" />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-7/12">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
