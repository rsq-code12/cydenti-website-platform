"use client";

import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { ArrowRight, Shield, Globe, Users, Play, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function HomepageVariation1() {
  return (
    // Overriding the default layout with a fixed overlay
    <main className={`fixed inset-0 z-[100] overflow-y-auto bg-[#e8e6e1] text-[#1a1a1a] ${inter.className}`}>
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {/* Using a high-quality landscape/architecture placeholder */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")' // Abstract tech/globe landscape
            }}
        />
        {/* Overlay to ensure text readability and match the "Ranty" muted aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8e6e1]/90 via-[#e8e6e1]/60 to-transparent" />
      </div>

      {/* Navbar - Transparent & Minimal */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 md:px-12">
        <div className="flex items-center gap-2">
           <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1a1a1a] text-white font-serif font-bold text-xl">
             C
           </div>
           <span className="text-lg font-bold tracking-widest uppercase text-[#1a1a1a]">Cydenti</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-[#1a1a1a]/80">
          <Link href="#" className="hover:text-black transition-colors">Platform</Link>
          <Link href="#" className="hover:text-black transition-colors">Solutions</Link>
          <Link href="#" className="hover:text-black transition-colors">Resources</Link>
          <Link href="#" className="hover:text-black transition-colors">Company</Link>
        </div>

        <div className="flex items-center gap-6">
           <span className="text-sm font-bold text-[#1a1a1a]/60">ENG</span>
           <Link href="/demo" className="text-sm font-bold uppercase tracking-wider underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors">
              Get Started
           </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-12 md:pt-20 lg:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography */}
          <div className="max-w-2xl">
            <h1 className={`${playfair.className} text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-normal text-[#1a1a1a] mb-8`}>
              THE<br />
              PERFECT<br />
              <span className="italic font-light">IDENTITY</span><sup className="text-4xl">®</sup>
            </h1>

            <div className="flex items-center gap-4 text-[#1a1a1a]/70 text-lg mb-12">
               <span className="hidden md:inline-block h-[1px] w-12 bg-black/20"></span>
               <p className="font-medium tracking-wide">/ We secure the digital future /</p>
               <span className="hidden md:inline-block h-[1px] w-12 bg-black/20"></span>
            </div>

            <Button 
              className="h-14 px-10 rounded-full bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 shadow-xl"
            >
              Start Audit
            </Button>
          </div>

          {/* Right Column: Floating 3D Card */}
          <div className="relative mt-12 lg:mt-0">
             {/* The Card */}
             <div className="relative z-10 bg-white rounded-[3rem] p-8 shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                {/* Top Tags */}
                <div className="flex gap-2 mb-8">
                   <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">Detection</span>
                   <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">Response</span>
                   <span className="h-8 w-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-bold">3D</span>
                </div>

                <h3 className={`${playfair.className} text-4xl font-normal leading-tight mb-4`}>
                   Unique vision &<br />control.
                </h3>
                <p className="text-gray-500 mb-8 text-sm">From shadow IT to secured identities.</p>

                {/* Inner Image/Visual */}
                <div className="relative rounded-[2rem] overflow-hidden bg-gray-100 aspect-[4/3] group cursor-pointer">
                   {/* Placeholder visual for dashboard */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
                      <Shield className="w-24 h-24 text-cydenti-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="relative z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 w-full max-w-[200px]">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                               <CheckCircle2 className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                         </div>
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                            <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
                         </div>
                      </div>
                   </div>
                   
                   {/* Play Button Overlay */}
                   <div className="absolute top-4 right-4 h-12 w-12 bg-[#be9f79] hover:bg-[#a88b68] rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                   </div>

                   {/* Connecting Lines (Decor) */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-dashed border-gray-300 rounded-full pointer-events-none"></div>
                </div>
             </div>

             {/* Background Blob behind card */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-3xl rounded-full -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* Bottom Section Overlay */}
      <div className="relative z-20 mt-auto">
         <div className="bg-[#a48e78] text-white rounded-tr-[3rem] p-8 md:p-12 lg:px-20 lg:py-16 max-w-[90%] md:max-w-[40%] mt-[-4rem] md:mt-[-8rem] relative shadow-2xl">
            <h3 className={`${playfair.className} text-3xl mb-6`}>We use best models!</h3>
            
            <div className="flex gap-4">
               <div className="h-32 w-24 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm p-2 flex flex-col justify-end">
                  <span className="text-xs font-medium text-white/80">Zero Trust</span>
               </div>
               <div className="h-32 w-24 bg-white/20 rounded-lg border border-white/30 backdrop-blur-sm p-2 flex flex-col justify-end shadow-lg transform -translate-y-4">
                  <span className="text-xs font-bold">AI Agents</span>
               </div>
               <div className="flex flex-col justify-center gap-1">
                   <p className="text-xs text-white/70 max-w-[100px] leading-relaxed">
                      Working with verified providers.
                   </p>
               </div>
            </div>
         </div>

         {/* Bottom Right Content (Absolute position relative to viewport or main container) */}
         <div className="md:absolute md:bottom-12 md:right-12 lg:right-20 flex flex-col md:items-end gap-8 px-6 pb-12 md:pb-0">
             {/* Social Proof */}
             <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                   {[1,2].map(i => (
                      <div key={i} className="h-12 w-12 rounded-full border-2 border-white/50 bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="h-full w-full object-cover" />
                      </div>
                   ))}
                </div>
                <div>
                   <div className={`${playfair.className} text-3xl font-italic`}>12m+</div>
                   <div className="text-xs font-bold uppercase tracking-wider opacity-60">Identities Secured</div>
                </div>
             </div>

             {/* Tagline */}
             <div className="text-[#1a1a1a] md:text-right max-w-md">
                <h4 className="text-2xl md:text-3xl font-light uppercase tracking-wide leading-tight mb-4">
                   We can combine<br />
                   <span className="font-bold">Security & Speed</span>
                </h4>
                <Link href="/demo" className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity">
                   Learn More
                </Link>
             </div>
         </div>
      </div>

    </main>
  );
}
