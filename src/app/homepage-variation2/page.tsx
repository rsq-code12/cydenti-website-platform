"use client";

import React from "react";
import Link from "next/link";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight, Shield, Activity, Lock, Users, Zap, Globe, BarChart3, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function HomepageVariation2() {
  return (
    <main className={`min-h-screen bg-white text-slate-900 ${sans.className}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-60" />
         <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] opacity-60" />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
           <div className="h-9 w-9 bg-gradient-to-br from-[#0A4CFF] to-[#0CB7B8] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">C</div>
           <span className="text-xl font-bold tracking-tight text-slate-900">Cydenti</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
           <Link href="#" className="hover:text-blue-600 transition-colors">Product</Link>
           <Link href="#" className="hover:text-blue-600 transition-colors">Solutions</Link>
           <Link href="#" className="hover:text-blue-600 transition-colors">Enterprise</Link>
        </div>
        <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
           Request Demo
        </Button>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                New: AI Identity Protection
             </div>
             
             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Identity security for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A4CFF] to-[#0CB7B8]">AI Era.</span>
             </h1>
             
             <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                Gain total visibility over human and machine identities. Detect anomalies, prevent breaches, and automate response in milliseconds.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl bg-[#0A4CFF] hover:bg-blue-700 text-white font-semibold text-base shadow-xl shadow-blue-500/20 transition-transform hover:-translate-y-1">
                   Start Free Assessment
                   <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 hover:bg-slate-50 text-slate-900 font-semibold text-base transition-transform hover:-translate-y-1">
                   See How It Works
                </Button>
             </div>

             <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                   ))}
                </div>
                <p>Trusted by <span className="font-bold text-slate-900">500+</span> security teams</p>
             </div>
          </div>

          {/* Right: Bento Grid Visual */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Main Graph */}
                <div className="col-span-2 bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                   <div className="relative z-10 flex justify-between items-start mb-6">
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg">Identity Graph</h3>
                         <p className="text-slate-500 text-sm">Real-time visualization</p>
                      </div>
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                         <Activity className="h-5 w-5" />
                      </div>
                   </div>
                   {/* Abstract Graph Lines */}
                   <div className="h-32 w-full flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-24 h-24 rounded-full border border-blue-100 animate-[spin_10s_linear_infinite]" />
                         <div className="w-16 h-16 rounded-full border border-teal-100 absolute animate-[spin_7s_linear_infinite_reverse]" />
                      </div>
                      <div className="relative z-10 bg-white p-2 rounded-full shadow-lg border border-slate-50">
                         <Shield className="h-8 w-8 text-[#0A4CFF]" />
                      </div>
                      {/* Satellite nodes */}
                      <div className="absolute top-1/2 left-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold animate-bounce delay-100">AI</div>
                      <div className="absolute top-4 right-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold animate-bounce delay-700">usr</div>
                      <div className="absolute bottom-4 left-24 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold animate-bounce delay-300">api</div>
                   </div>
                </div>

                {/* Card 2: Risk Score */}
                <div className="bg-gradient-to-br from-[#0A4CFF] to-[#0030b3] rounded-[2rem] p-6 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                   <div className="absolute top-0 right-0 p-4 opacity-20">
                      <Fingerprint className="h-20 w-20 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                      <p className="text-blue-200 text-sm font-medium mb-1">Risk Score</p>
                      <h3 className="text-4xl font-bold mb-4">Low</h3>
                      <div className="w-full bg-blue-900/50 rounded-full h-1.5 mb-2">
                         <div className="bg-teal-400 h-1.5 rounded-full w-[15%]" />
                      </div>
                      <p className="text-xs text-blue-200">System healthy. No critical threats.</p>
                   </div>
                </div>

                {/* Card 3: Active Agents */}
                <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-slate-100 group hover:-translate-y-1 transition-transform">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                         <Zap className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-slate-900">Active Agents</span>
                   </div>
                   <div className="space-y-3">
                      {[1,2].map(i => (
                         <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 group-hover:bg-white group-hover:shadow-sm transition-all">
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500" />
                               <span className="text-xs font-medium text-slate-600">Bot-{i}0{i}</span>
                            </div>
                            <span className="text-[10px] text-slate-400">2m ago</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-3xl animate-pulse" />
             <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

        </div>
      </div>
    </main>
  );
}
