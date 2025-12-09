"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight, BarChart2, Shield, Users, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function HomepageVariation7() {
  return (
    <main className={`min-h-screen bg-slate-50 text-slate-900 ${inter.className}`}>
      
      {/* Top Bar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="bg-[#0A4CFF] text-white p-1 rounded font-bold text-lg">Cy</div>
            <span className="font-semibold text-lg tracking-tight">Cydenti</span>
         </div>
         <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A4CFF]">Products <ChevronDown className="w-3 h-3" /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A4CFF]">Solutions <ChevronDown className="w-3 h-3" /></div>
            <Link href="#" className="hover:text-[#0A4CFF]">Enterprise</Link>
            <Link href="#" className="hover:text-[#0A4CFF]">Pricing</Link>
         </div>
         <div className="flex gap-4">
            <Button variant="ghost" className="text-slate-600">Sign in</Button>
            <Button className="bg-[#0A4CFF] hover:bg-blue-700">Get Started</Button>
         </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-cyan-50 to-transparent" />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Left Content */}
               <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0A4CFF] px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
                     <span className="w-2 h-2 rounded-full bg-[#0A4CFF] animate-pulse" />
                     New: Identity Threat Detection & Response
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                     The Operating System for <span className="text-[#0A4CFF]">Identity Security</span>
                  </h1>
                  
                  <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                     Unified visibility and control for every human and non-human identity. Secure your cloud infrastructure with AI-driven intelligence.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button size="lg" className="bg-[#0A4CFF] hover:bg-blue-700 h-12 px-8 text-base shadow-lg shadow-blue-900/10">
                        Start Free Trial
                     </Button>
                     <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white border-slate-300 hover:bg-slate-50 text-slate-700">
                        Talk to Sales
                     </Button>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                     <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Trusted by security teams at</p>
                     <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        <div className="h-8 w-24 bg-slate-300 rounded" />
                        <div className="h-8 w-24 bg-slate-300 rounded" />
                        <div className="h-8 w-24 bg-slate-300 rounded" />
                        <div className="h-8 w-24 bg-slate-300 rounded" />
                     </div>
                  </div>
               </div>

               {/* Right Visual - Dashboard Cards */}
               <div className="lg:w-1/2 relative perspective-1000">
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                     {/* Dashboard Header */}
                     <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-4">
                           <h3 className="text-xl font-bold text-slate-800">Identity Overview</h3>
                           <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Live</span>
                        </div>
                        <div className="flex gap-2">
                           <Button size="sm" variant="outline" className="h-8 text-xs">Filter</Button>
                           <Button size="sm" variant="outline" className="h-8 text-xs">Export</Button>
                        </div>
                     </div>

                     {/* Metrics Grid */}
                     <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                           <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                              <Users className="w-4 h-4" /> Total Identities
                           </div>
                           <div className="text-2xl font-bold text-slate-900">12,405</div>
                           <div className="text-xs text-green-600 font-medium flex items-center mt-1">
                              ↑ 12% from last week
                           </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                           <div className="flex items-center gap-2 text-red-600 text-sm mb-2">
                              <Shield className="w-4 h-4" /> At Risk
                           </div>
                           <div className="text-2xl font-bold text-red-900">3</div>
                           <div className="text-xs text-red-700 font-medium flex items-center mt-1">
                              Critical alerts active
                           </div>
                        </div>
                     </div>

                     {/* List Item */}
                     <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer group">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">JD</div>
                              <div>
                                 <div className="text-sm font-semibold text-slate-900">John Doe</div>
                                 <div className="text-xs text-slate-500">Engineering • AWS Prod Access</div>
                              </div>
                           </div>
                           <div className="text-xs text-slate-400 group-hover:text-[#0A4CFF]">View details →</div>
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer group">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">AI</div>
                              <div>
                                 <div className="text-sm font-semibold text-slate-900">Copilot-Bot</div>
                                 <div className="text-xs text-slate-500">Service Account • Read/Write</div>
                              </div>
                           </div>
                           <div className="text-xs text-slate-400 group-hover:text-[#0A4CFF]">View details →</div>
                        </div>
                     </div>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-200 w-64 animate-bounce delay-1000 duration-[3000ms]">
                     <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                           <BarChart2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-slate-900">Optimization Complete</div>
                           <div className="text-xs text-slate-500 mt-1">Reduced excessive permissions by 45% automatically.</div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  );
}
