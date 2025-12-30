"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionCta() {
  return (
    <section className="py-24 px-4 bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-[60px] bg-gradient-to-r from-cydenti-primary to-cydenti-secondary p-12 lg:p-24 text-center w-full">
          
          {/* Animated Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[80px] animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-black/10 blur-[80px]" />
            
            {/* Mesh Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Modern identity threats demand <br className="hidden md:block"/>
              <span className="text-white/90">modern identity security.</span>
            </h2>

            <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-medium">
              See how Cydenti strengthens SaaS and cloud environments with AI.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-blue-900/20">
                <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer">
                  Get a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                <Link href="/platform">Explore Platform</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
