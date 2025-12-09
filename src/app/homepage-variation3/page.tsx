"use client";

import React from "react";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Search, Command, ArrowRight, ShieldCheck, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const geist = Geist({ subsets: ["latin"] });

export default function HomepageVariation3() {
  return (
    <main className={`min-h-screen bg-[#F5F5F7] text-[#1D1D1F] ${geist.className} overflow-hidden`}>
      
      {/* Navbar - Centered/Apple Style */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 h-12">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-6 text-xs font-medium">
           <Link href="/" className="text-lg font-bold tracking-tight">Cydenti</Link>
           <div className="hidden md:flex items-center gap-8 text-gray-600">
              <Link href="#" className="hover:text-black transition-colors">Platform</Link>
              <Link href="#" className="hover:text-black transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-black transition-colors">Resources</Link>
           </div>
           <div className="flex items-center gap-4">
              <Search className="w-4 h-4 text-gray-500 cursor-pointer hover:text-black" />
              <Button size="sm" className="h-7 text-xs rounded-full bg-black text-white hover:bg-gray-800 px-4">
                 Sign In
              </Button>
           </div>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        
        {/* Hero Text */}
        <div className="max-w-4xl mx-auto z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <h2 className="text-[#0A4CFF] font-semibold text-lg md:text-xl mb-4 tracking-wide">
              Identity Intelligence
           </h2>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-[#1D1D1F]">
              Secure the invisible.
           </h1>
           <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              Complete visibility and control for every human and machine identity in your cloud ecosystem.
           </p>
           
           <div className="flex items-center justify-center gap-4 mb-20">
              <Button className="rounded-full h-12 px-8 text-base bg-[#0A4CFF] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                 Get Started
              </Button>
              <Button variant="link" className="text-[#0A4CFF] text-base hover:text-blue-700">
                 Watch the film <span className="ml-1 text-xs border border-blue-200 rounded px-1">2:14</span>
              </Button>
           </div>
        </div>

        {/* Hero Visual - Dashboard Glow */}
        <div className="relative w-full max-w-6xl mx-auto perspective-1000">
           {/* Glow Effect Behind */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#0CB7B8] rounded-full blur-[120px] opacity-20 animate-pulse" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[#0A4CFF] rounded-full blur-[100px] opacity-20 mix-blend-multiply" />

           {/* Dashboard Mockup */}
           <div className="relative bg-white rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden transform rotate-x-12 scale-95 hover:scale-100 transition-all duration-700 ease-out group">
              {/* Fake UI Header */}
              <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="flex bg-gray-200/50 rounded-md px-3 py-1 items-center gap-2 w-64">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] text-gray-500">cydenti.platform/dashboard</span>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-gray-200" />
              </div>

              {/* Fake UI Body */}
              <div className="p-8 bg-white min-h-[500px] text-left">
                 <div className="flex justify-between items-end mb-10">
                    <div>
                       <h3 className="text-2xl font-bold text-gray-900">Security Overview</h3>
                       <p className="text-gray-400 text-sm">Last updated: Just now</p>
                    </div>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100">98% Secure</span>
                    </div>
                 </div>

                 {/* Grid of Widgets */}
                 <div className="grid grid-cols-3 gap-6">
                    {/* Widget 1 */}
                    <div className="col-span-2 bg-gray-50 rounded-2xl p-6 border border-gray-100 h-64 flex flex-col justify-between group-hover:bg-blue-50/30 transition-colors">
                       <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Identity Graph</span>
                          <Globe className="w-5 h-5 text-gray-400" />
                       </div>
                       {/* Abstract lines */}
                       <div className="flex-1 w-full relative overflow-hidden my-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-full h-[1px] bg-gray-200 rotate-45" />
                             <div className="w-full h-[1px] bg-gray-200 -rotate-45" />
                             <div className="w-32 h-32 border border-blue-200 rounded-full absolute" />
                             <div className="w-20 h-20 bg-blue-500 rounded-full absolute shadow-lg shadow-blue-500/30 animate-pulse" />
                          </div>
                       </div>
                    </div>
                    {/* Widget 2 */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-64 flex flex-col items-center justify-center text-center group-hover:bg-teal-50/30 transition-colors">
                       <ShieldCheck className="w-12 h-12 text-[#0CB7B8] mb-4" />
                       <h4 className="text-3xl font-bold text-gray-900">0</h4>
                       <p className="text-sm text-gray-500">Active Breaches</p>
                    </div>
                 </div>
                 
                 {/* Bottom Row */}
                 <div className="mt-6 grid grid-cols-4 gap-6">
                    {[1,2,3,4].map((i) => (
                       <div key={i} className="h-24 bg-gray-50 rounded-xl border border-gray-100 p-4">
                          <div className="w-8 h-8 rounded-lg bg-gray-200 mb-2" />
                          <div className="w-16 h-2 bg-gray-200 rounded-full" />
                       </div>
                    ))}
                 </div>
              </div>
              
              {/* Overlay Gradient on bottom of dashboard to fade it slightly */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
           </div>
        </div>

      </div>
    </main>
  );
}
