"use client";

import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowRight, Box, Layers, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function HomepageVariation9() {
  return (
    <main className={`min-h-screen bg-[#F8FAFC] text-slate-900 ${poppins.className} overflow-hidden`}>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
         <div className="font-bold text-2xl tracking-tight text-[#0f172a] flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg transform rotate-3 shadow-lg"></div>
            Cydenti
         </div>
         <div className="hidden md:flex gap-8 font-semibold text-slate-500 text-sm">
            <Link href="#" className="hover:text-blue-600">Platform</Link>
            <Link href="#" className="hover:text-blue-600">Solutions</Link>
            <Link href="#" className="hover:text-blue-600">Pricing</Link>
         </div>
         <Button className="rounded-xl bg-slate-900 text-white shadow-xl hover:bg-slate-800">
            Get Started
         </Button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-12 pb-24 lg:pt-20">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Text */}
            <div className="lg:w-1/2 z-10">
               <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 mb-6 transform -rotate-2">
                  <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                     ✨ Reimagining Identity Security
                  </span>
               </div>
               
               <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
                  Secure your <br/>
                  <span className="relative inline-block">
                     <span className="relative z-10">digital blocks</span>
                     <span className="absolute bottom-2 left-0 w-full h-4 bg-cyan-200/50 -z-0 transform -rotate-1 rounded-full"></span>
                  </span>
               </h1>
               
               <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                  Build a fortress around your cloud infrastructure with modular, AI-powered identity protection.
               </p>
               
               <div className="flex gap-4">
                  <Button size="lg" className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#0A4CFF] to-[#0CB7B8] text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1">
                     Start Building Safety
                  </Button>
                  <Button size="lg" variant="ghost" className="h-14 px-8 rounded-2xl text-slate-600 hover:bg-slate-100 font-bold">
                     View Demo
                  </Button>
               </div>
               
               <div className="mt-12 flex items-center gap-4 text-sm font-semibold text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> SOC2 Type II Certified
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <Lock className="w-5 h-5 text-blue-500" /> GDPR Compliant
               </div>
            </div>

            {/* Right Isometric Visuals */}
            <div className="lg:w-1/2 relative h-[600px] w-full flex items-center justify-center perspective-1000">
               
               {/* Isometric Base Grid (CSS) */}
               <div className="relative w-[500px] h-[500px] transform rotate-x-60 rotate-z-45 scale-75">
                  
                  {/* Layer 1: Base Platform */}
                  <div className="absolute inset-0 bg-white rounded-[40px] shadow-[20px_20px_60px_#d1d5db,-20px_-20px_60px_#ffffff] flex items-center justify-center">
                     <div className="w-[90%] h-[90%] border-4 border-dashed border-slate-100 rounded-[30px]"></div>
                  </div>

                  {/* Floating Block 1: User Identity */}
                  <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-3xl shadow-xl transform translate-z-20 hover:translate-z-40 transition-transform duration-500 cursor-pointer group">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 rounded-3xl"></div>
                     <div className="absolute -top-10 -left-10 w-full h-full bg-[#0A4CFF] rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                     <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center transform -rotate-z-45 -rotate-x-60 scale-125">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2 text-blue-600">
                           <Layers className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">User Graph</span>
                     </div>
                  </div>

                  {/* Floating Block 2: AI Security (Elevated) */}
                  <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#0CB7B8] to-[#0A4CFF] rounded-3xl shadow-2xl transform translate-z-60 hover:translate-z-80 transition-transform duration-500 cursor-pointer flex items-center justify-center group">
                     <div className="relative z-10 transform -rotate-z-45 -rotate-x-60 scale-125 text-white text-center">
                        <Box className="w-16 h-16 mx-auto mb-2 opacity-90" />
                        <span className="font-bold text-lg">AI Shield</span>
                        <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs backdrop-blur-sm">Active</div>
                     </div>
                  </div>

                  {/* Floating Block 3: Cloud (Background) */}
                  <div className="absolute bottom-10 left-20 w-32 h-32 bg-slate-100 rounded-3xl shadow-lg transform translate-z-10 flex items-center justify-center">
                     <div className="transform -rotate-z-45 -rotate-x-60 scale-125 text-slate-400">
                        <span className="font-bold text-xs">Cloud Infra</span>
                     </div>
                  </div>

                  {/* Connecting Lines (SVG Overlay) */}
                  <svg className="absolute inset-0 pointer-events-none overflow-visible" style={{ transform: 'translateZ(0px)' }}>
                     <path d="M100,100 L350,350" stroke="#0A4CFF" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                     <circle cx="100" cy="100" r="4" fill="#0A4CFF" />
                     <circle cx="350" cy="350" r="4" fill="#0CB7B8" />
                  </svg>

               </div>

            </div>
         </div>
      </div>
    </main>
  );
}
