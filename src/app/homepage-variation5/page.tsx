"use client";

import React from "react";
import Link from "next/link";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function HomepageVariation5() {
  return (
    <main className={`min-h-screen bg-[#F0F2F5] text-[#111] ${manrope.className} flex flex-col lg:flex-row overflow-hidden`}>
      
      {/* Left Panel: Fixed Content */}
      <div className="w-full lg:w-[45%] lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-white px-8 md:px-16 py-12 flex flex-col justify-between z-20 border-r border-gray-100">
         
         <nav className="flex items-center gap-2">
            <div className="h-6 w-6 bg-[#0A4CFF] rounded-full" />
            <span className="font-bold tracking-tight text-lg">Cydenti.</span>
         </nav>

         <div className="my-auto py-12">
            <h1 className={`${serif.className} text-5xl md:text-7xl leading-[1.1] mb-8`}>
               The future of <br/>
               <span className="text-[#0A4CFF] italic">identity</span> is automated.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
               We provide the intelligence layer for modern security teams to manage human and machine access at scale.
            </p>

            <div className="flex flex-col items-start gap-6">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0A4CFF] group-hover:border-[#0A4CFF] transition-all duration-300">
                     <ArrowUpRight className="h-6 w-6 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                     <span className="block font-bold text-lg">Start Free Trial</span>
                     <span className="text-sm text-gray-400">No credit card required</span>
                  </div>
               </div>
               
               <div className="h-[1px] w-full bg-gray-100 max-w-sm" />
               
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0CB7B8] group-hover:border-[#0CB7B8] transition-all duration-300">
                     <PlayCircle className="h-6 w-6 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                     <span className="block font-bold text-lg">Watch Demo</span>
                     <span className="text-sm text-gray-400">2 min walkthrough</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span>(01) Platform</span>
            <span>(02) Research</span>
            <span>(03) Login</span>
         </div>
      </div>

      {/* Right Panel: Scrollable Visuals */}
      <div className="w-full lg:w-[55%] lg:ml-[45%] min-h-screen bg-[#F0F2F5] relative">
         {/* Abstract Shapes */}
         <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-bl from-[#0A4CFF]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#0CB7B8]/10 to-transparent rounded-full blur-3xl" />
         </div>

         <div className="p-8 md:p-16 lg:pt-32 space-y-24">
            
            {/* Visual Block 1 */}
            <div className="group">
               <div className="aspect-[4/3] bg-white rounded-t-[2rem] rounded-br-[2rem] overflow-hidden shadow-2xl mb-8 relative transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
                  {/* Mock Interface */}
                  <div className="absolute inset-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                     <div className="flex justify-between mb-8">
                        <div className="w-24 h-6 bg-gray-100 rounded" />
                        <div className="w-8 h-8 bg-blue-100 rounded-full" />
                     </div>
                     <div className="space-y-4">
                        <div className="w-full h-32 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-center">
                           <span className="text-blue-600 font-bold">Identity Graph Visualization</span>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-1/2 h-24 bg-gray-50 rounded-lg" />
                           <div className="w-1/2 h-24 bg-gray-50 rounded-lg" />
                        </div>
                     </div>
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-2">Total Visibility</h3>
               <p className="text-gray-500 max-w-sm">See every user, service account, and bot across your cloud infrastructure.</p>
            </div>

            {/* Visual Block 2 */}
            <div className="group">
               <div className="aspect-[4/3] bg-[#0A4CFF] rounded-t-[2rem] rounded-bl-[2rem] overflow-hidden shadow-2xl mb-8 relative transform group-hover:scale-[1.02] transition-transform duration-500 text-white p-12 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold mb-6">99.9%</h4>
                  <p className="text-xl opacity-90 mb-8">Reduction in false positives using our proprietary AI models.</p>
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                     <div className="bg-white h-full w-[80%] animate-[width_2s_ease-in-out_infinite]" />
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-2">AI-Driven Detection</h3>
               <p className="text-gray-500 max-w-sm">Automated risk analysis that learns from your environment.</p>
            </div>

            {/* Footer */}
            <div className="pt-20 border-t border-gray-200">
               <div className="flex justify-between items-end">
                  <div>
                     <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Cydenti Inc.</p>
                     <p className="text-gray-500 text-sm">© 2024 All rights reserved.</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-8 h-8 bg-gray-200 rounded-full" />
                     <div className="w-8 h-8 bg-gray-200 rounded-full" />
                     <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  </div>
               </div>
            </div>

         </div>
      </div>

    </main>
  );
}
