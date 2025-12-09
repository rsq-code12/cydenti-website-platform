"use client";

import React from "react";
import Link from "next/link";
import { Oswald, Roboto_Mono } from "next/font/google";
import { ArrowDownRight } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"] });
const mono = Roboto_Mono({ subsets: ["latin"] });

export default function HomepageVariation6() {
  return (
    <main className={`min-h-screen bg-white text-black overflow-hidden relative selection:bg-[#0A4CFF] selection:text-white`}>
      
      {/* Grid Background */}
      <div 
         className="fixed inset-0 pointer-events-none opacity-[0.05]"
         style={{
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '100px 100px'
         }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-start p-6 mix-blend-difference text-white">
         <div className={`${mono.className} text-xs`}>
            [CYDENTI_V1.0]
         </div>
         <div className={`${mono.className} text-xs text-right hidden md:block`}>
            LOC: 34.0522° N, 118.2437° W<br/>
            STATUS: ONLINE
         </div>
         <button className={`${mono.className} text-xs border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors uppercase`}>
            Menu
         </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 md:px-12">
         
         {/* Huge Typography */}
         <div className="relative">
            <h1 className={`${oswald.className} text-[18vw] leading-[0.8] font-bold tracking-tighter text-black mix-blend-multiply`}>
               CYDENTI
            </h1>
            <h1 className={`${oswald.className} text-[18vw] leading-[0.8] font-bold tracking-tighter text-transparent stroke-text absolute top-0 left-0 pointer-events-none translate-x-1 translate-y-1 opacity-50`} style={{ WebkitTextStroke: '1px #0A4CFF' }}>
               CYDENTI
            </h1>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-end mt-8 md:mt-0 relative">
            
            {/* Left Info Block */}
            <div className="max-w-sm mb-12 md:mb-0">
               <div className="w-12 h-1 bg-[#0A4CFF] mb-6" />
               <p className={`${mono.className} text-sm md:text-base leading-relaxed mb-8`}>
                  // THE IDENTITY SECURITY PLATFORM<br/>
                  We secure the modern stack. Human, machine, and AI identities unified in one graph.
               </p>
               <Link href="/demo" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest hover:text-[#0A4CFF] transition-colors group">
                  Start Audit <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
               </Link>
            </div>

            {/* Right Interactive/Visual Block */}
            <div className="relative w-full md:w-1/3 aspect-square border border-black p-4 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 group cursor-none">
               <div className="flex justify-between items-start">
                  <span className={`${mono.className} text-xs`}>RISK_ANALYSIS</span>
                  <div className="w-2 h-2 bg-[#0CB7B8] rounded-full animate-pulse" />
               </div>

               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-32 h-32 rounded-full border border-white/20 animate-[spin_4s_linear_infinite]" />
                  <div className="w-48 h-48 rounded-full border border-white/10 absolute animate-[spin_6s_linear_infinite_reverse]" />
               </div>

               <div className="text-right">
                  <h3 className={`${oswald.className} text-6xl font-bold`}>0%</h3>
                  <p className={`${mono.className} text-xs`}>TRUST ASSUMED</p>
               </div>
            </div>

         </div>

      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-12 left-12 hidden lg:block">
         <div className="w-64 h-32 bg-[#0A4CFF] text-white p-4 font-mono text-xs flex flex-col justify-between hover:scale-105 transition-transform">
            <div className="flex justify-between">
               <span>LATEST_BREACH</span>
               <span>[DETECTED]</span>
            </div>
            <div>
               API Key leakage detected in repo<br/>
               cydenti/core-v2
            </div>
            <div className="w-full bg-white/20 h-1 mt-2">
               <div className="bg-white h-full w-[60%]" />
            </div>
         </div>
      </div>

    </main>
  );
}
