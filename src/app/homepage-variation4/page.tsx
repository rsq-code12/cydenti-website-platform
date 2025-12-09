"use client";

import React from "react";
import Link from "next/link";
import { Space_Grotesk, Inter } from "next/font/google";
import { ArrowRight, Hexagon, Circle, Triangle, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const space = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function HomepageVariation4() {
  return (
    <main className={`min-h-screen bg-[#FDFDFD] text-[#111] ${inter.className} relative overflow-hidden`}>
      
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(10,76,255,0.03),transparent_70%)]" />
         {/* Animated Lines/Grid */}
         <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
                backgroundImage: 'linear-gradient(#0A4CFF 1px, transparent 1px), linear-gradient(90deg, #0A4CFF 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
         />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
         <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Hexagon className="fill-[#0A4CFF] text-[#0A4CFF] w-6 h-6" />
            CYDENTI
         </div>
         <div className="flex gap-6 text-sm font-medium tracking-wide">
            <Link href="#" className="border-b border-transparent hover:border-black transition-all">PLATFORM</Link>
            <Link href="#" className="border-b border-transparent hover:border-black transition-all">PROTOCOL</Link>
            <Link href="#" className="border-b border-transparent hover:border-black transition-all">DEVELOPERS</Link>
         </div>
         <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none px-6 uppercase text-xs font-bold tracking-widest">
            Connect
         </Button>
      </nav>

      <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-100px)] flex flex-col justify-center">
         
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
               <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 bg-[#0CB7B8] rounded-full animate-pulse" />
                  <span className={`${space.className} text-xs uppercase tracking-widest text-gray-500`}>System Operational</span>
               </div>
               
               <h1 className={`${space.className} text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tight`}>
                  IDENTITY<br />
                  <span className="text-[#0A4CFF]">INFRA</span><br />
                  STRUCTURE
               </h1>
               
               <p className="text-gray-500 max-w-md text-lg mb-12 border-l-2 border-[#0CB7B8] pl-6 py-2">
                  The programmable layer for digital identity. Secure your humans and machines with a unified protocol.
               </p>
               
               <div className="flex items-center gap-6">
                  <button className="group relative px-8 py-4 bg-black text-white font-mono text-sm uppercase overflow-hidden">
                     <span className="relative z-10 flex items-center gap-2">
                        Start Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-[#0A4CFF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </button>
                  <Link href="#" className="font-mono text-sm uppercase underline decoration-gray-300 underline-offset-4 hover:text-[#0A4CFF] hover:decoration-[#0A4CFF]">
                     Read Documentation
                  </Link>
               </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
               {/* Abstract Tech Visual */}
               <div className="relative w-full h-full max-w-md">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0A4CFF] rounded-full blur-2xl opacity-20 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-2 border-[#0A4CFF] rounded-full flex items-center justify-center z-20 shadow-xl">
                     <Network className="w-8 h-8 text-[#0A4CFF]" />
                  </div>

                  {/* Orbiting Nodes */}
                  {[0, 1, 2, 3].map((i) => (
                     <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full z-10 shadow-sm"
                        style={{
                           animation: `orbit${i} ${8 + i * 2}s linear infinite`,
                           transformOrigin: `${100 + i * 40}px center` // This is simplified, usually requires complex CSS or framer-motion
                        }}
                     />
                  ))}

                  {/* Glass Cards Floating */}
                  <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 shadow-lg w-48 z-30 animate-bounce delay-700 duration-[3000ms]">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">New Identity</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                     </div>
                     <div className="font-mono text-xs truncate">user_8x92...verified</div>
                  </div>

                  <div className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 shadow-lg w-56 z-30 animate-bounce delay-100 duration-[4000ms]">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Anomaly Detected</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                     </div>
                     <div className="font-mono text-xs text-red-600">API Key Leak Detected</div>
                  </div>
               </div>
            </div>

         </div>
      </div>
      
      {/* Decorative Ticker */}
      <div className="absolute bottom-0 w-full bg-black text-white overflow-hidden py-3">
         <div className="flex gap-8 whitespace-nowrap animate-marquee font-mono text-xs opacity-80">
            <span>SYSTEM OPERATIONAL</span>
            <span>///</span>
            <span>2,403,129 IDENTITIES SECURED</span>
            <span>///</span>
            <span>REAL-TIME PROTECTION ACTIVE</span>
            <span>///</span>
            <span>ZERO TRUST ARCHITECTURE</span>
            <span>///</span>
            <span>SYSTEM OPERATIONAL</span>
            <span>///</span>
            <span>2,403,129 IDENTITIES SECURED</span>
         </div>
      </div>

    </main>
  );
}
