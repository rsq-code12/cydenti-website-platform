"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight, ChevronRight, Command, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function HomepageVariation10() {
  return (
    <main className={`min-h-screen bg-[#08090A] text-white ${inter.className} overflow-hidden selection:bg-[#0A4CFF]/30`}>
      
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A4CFF]/20 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#08090A]/80 backdrop-blur-xl">
         <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="font-medium tracking-tight text-sm flex items-center gap-2">
               <div className="w-4 h-4 bg-gradient-to-br from-[#0A4CFF] to-cyan-400 rounded-sm" />
               Cydenti
            </div>
            <div className="flex items-center gap-6 text-xs font-medium text-gray-400">
               <Link href="#" className="hover:text-white transition-colors">Features</Link>
               <Link href="#" className="hover:text-white transition-colors">Method</Link>
               <Link href="#" className="hover:text-white transition-colors">Customers</Link>
               <Link href="#" className="hover:text-white transition-colors">Changelog</Link>
            </div>
            <div className="flex items-center gap-3">
               <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Log in</Link>
               <Button size="sm" className="h-7 text-xs bg-white/10 hover:bg-white/20 text-white border border-white/5 rounded-full px-4">Sign Up</Button>
            </div>
         </div>
      </nav>

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center relative z-10">
         
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-[#0CB7B8]">New</span> Identity Graph 2.0 is available <ChevronRight className="w-3 h-3 text-gray-500" />
         </div>

         <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Identity security,<br />
            simplified.
         </h1>
         
         <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Manage access, detect anomalies, and automate response. <br className="hidden md:block"/>
            Built for high-velocity engineering teams.
         </p>
         
         <div className="flex items-center justify-center gap-4 mb-20">
            <Button size="lg" className="h-12 rounded-full px-8 bg-[#0A4CFF] hover:bg-[#0A4CFF]/90 text-white font-medium shadow-[0_0_40px_-10px_rgba(10,76,255,0.5)]">
               Start for free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
               <Command className="w-3 h-3" /> K to search
            </div>
         </div>

         {/* Product Visualization - Linear Style */}
         <div className="relative rounded-xl border border-white/10 bg-[#0C0D0E] shadow-2xl overflow-hidden group">
            {/* Glossy top border */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
               </div>
            </div>
            
            <div className="p-1 grid grid-cols-1 md:grid-cols-3 h-[500px]">
               {/* Sidebar */}
               <div className="hidden md:block border-r border-white/5 p-4 space-y-1">
                  <div className="text-xs font-medium text-gray-500 px-2 mb-2">Workspace</div>
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-white/5 rounded text-sm text-gray-200">
                     <Zap className="w-3 h-3 text-yellow-500" /> Active Alerts
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                     Identity Graph
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                     Settings
                  </div>
               </div>
               
               {/* Main List */}
               <div className="col-span-2 p-4 md:p-8">
                  <div className="text-sm text-gray-400 mb-4">Today</div>
                  <div className="space-y-1">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors group/item">
                           <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded border flex items-center justify-center ${i === 1 ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-800'}`}>
                                 {i === 1 && <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />}
                              </div>
                              <span className="text-sm text-gray-300">
                                 {i === 1 ? 'Critical: Unusual AWS Console Login' : 'Routine Access Check'}
                              </span>
                           </div>
                           <span className="text-xs text-gray-600 font-mono group-hover/item:text-gray-400">
                              US-EAST-1
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08090A] to-transparent pointer-events-none" />
         </div>

         {/* Partner Logos */}
         <div className="mt-24 pt-10 border-t border-white/5">
            <p className="text-sm text-gray-600 mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex justify-center gap-12 opacity-30 grayscale mix-blend-screen">
               {/* Simple text placeholders for logos */}
               <span className="font-bold text-xl">ACME Corp</span>
               <span className="font-bold text-xl">Stark Ind</span>
               <span className="font-bold text-xl">Wayne Ent</span>
               <span className="font-bold text-xl">Cyberdyne</span>
            </div>
         </div>

      </div>
    </main>
  );
}
