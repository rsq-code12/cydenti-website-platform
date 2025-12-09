import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Server, 
  AlertTriangle,
  CheckCircle2,
  MoreHorizontal,
  Fingerprint
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-24 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-3xl opacity-20" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* 1. Centered Header Content */}
        <div className="max-w-5xl text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 shadow-sm mb-10 transition-all hover:border-gray-300 hover:shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-cydenti-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">The Future of Identity Security</span>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6 leading-[1.1] md:leading-[1.05]">
            The Sovereign Intelligence Layer for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cydenti-primary to-cydenti-secondary">Your SaaS and Identity Blind Spots</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl lg:text-2xl mb-6 leading-relaxed font-normal">
            Instantly reveal risky permissions, non-human identities, and Shadow AI agents across Microsoft 365, Salesforce, and the rest of your SaaS stack.
          </p>

          <p className="text-base md:text-lg text-gray-500 font-medium mb-10">
            Start with a comprehensive, privacy-preserving audit — deployed in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button 
              asChild
              size="lg" 
              className="rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold px-8 h-14 text-lg shadow-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/demo">
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
