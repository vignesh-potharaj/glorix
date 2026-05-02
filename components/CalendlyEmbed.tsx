"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed({ url }: { url: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[600px] bg-navy-800/30 rounded-xl flex items-center justify-center animate-pulse border border-white/5">
        <span className="text-gray-400">Loading Calendar...</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-white">
      <InlineWidget 
        url={url} 
        styles={{ height: "600px", width: "100%" }}
        prefill={{
          customAnswers: {
            a1: "From Glorx Website"
          }
        }}
      />
    </div>
  );
}
