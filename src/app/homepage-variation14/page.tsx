"use client";

import React from "react";
import Link from "next/link";
import { Geist_Mono, Geist } from "next/font/google";
import { ArrowRight, Terminal, Shield, Lock, Activity, Eye, Cpu, Zap, Layers, Globe, CheckCircle2, GitMerge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IdentityFlowchartSection } from "@/components/identity-flowchart-section";

const mono = Geist_Mono({ subsets: ["latin"] });
const sans = Geist({ subsets: ["latin"] });

export default function HomepageVariation14() {
  return (
    <main className={`min-h-screen bg-[#050505] text-white ${sans.className} selection:bg-purple-500/30`}>
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Top Bar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-6 h-6 bg-gradient-to-tr from-purple-600 to-blue-600 rounded flex items-center justify-center">
                  <span className="font-bold text-xs">C</span>
               </div>
               <span className="font-medium tracking-tight">Cydenti</span>
            </div>
            <div className={`hidden md:flex gap-8 text-xs ${mono.className} text-gray-400`}>
               <Link href="#" className="hover:text-white transition-colors">[PLATFORM]</Link>
               <Link href="#" className="hover:text-white transition-colors">[INTELLIGENCE]</Link>
               <Link href="#" className="hover:text-white transition-colors">[COMPANY]</Link>
            </div>
            <Button size="sm" className="bg-white text-black hover:bg-gray-200 text-xs font-bold px-4 h-8">
               Get Demo
            </Button>
         </div>
      </nav>

      <div className="pt-32 pb-24 px-6 relative z-10">
         <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs text-purple-300 mb-8 animate-in fade-in zoom-in duration-500">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
               </span>
               New: Shadow AI Detection is live
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
               The Sovereign<br />
               Intelligence Layer.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
               For your SaaS and Identity Blind Spots. Instantly reveal risky permissions, non-human identities, and AI agents.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
               <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
                  <Button size="lg" className="relative bg-black text-white border border-white/10 h-12 px-8">
                     Start Audit <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
               </div>
               <div className={`flex items-center gap-2 text-xs text-gray-500 ${mono.className}`}>
                  <Terminal className="w-3 h-3" /> curl -sL cydenti.sh | bash
               </div>
            </div>

            {/* Feature Grid / Dashboard Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
               
               {/* Card 1 */}
               <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                     <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Total Visibility</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                     See across Microsoft 365, Salesforce, and your entire SaaS stack in one unified graph.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                     <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Shadow AI Detection</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                     Identify unauthorized AI agents and LLM workflows accessing your sensitive data.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
                     <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Sovereign Control</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                     Automate least privilege policies without breaking business workflows.
                  </p>
               </div>

            </div>

         </div>

      </div>

      <IdentityFlowchartSection />
    </main>
  );
}
