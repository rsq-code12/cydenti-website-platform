"use client";

import React from "react";
import { Bot, User, Globe } from "lucide-react";

export function RiskScoringVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 p-8 rounded-2xl border border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
      
      <div className="relative z-10 w-full max-w-sm space-y-4">
        {/* Card 1: Critical */}
        <div className="bg-slate-800 p-5 rounded-xl border border-red-500/50 shadow-lg shadow-red-900/20 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                 <Bot className="w-6 h-6" />
               </div>
               <div>
                 <div className="font-bold text-white">CI/CD Deploy Bot</div>
                 <div className="text-xs text-red-400">Critical Risk • Score 98</div>
               </div>
            </div>
            <div className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold">CRITICAL</div>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-red-500 h-full w-[98%]" />
          </div>
          <p className="text-xs text-slate-400 mt-3">Admin access to production + Anomalous API usage detected</p>
        </div>

        {/* Card 2: High */}
        <div className="bg-slate-800 p-5 rounded-xl border border-yellow-500/30 shadow-lg transform -translate-x-4 hover:translate-x-0 opacity-90 transition-transform duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                 <User className="w-6 h-6" />
               </div>
               <div>
                 <div className="font-bold text-white">Sarah (Marketing)</div>
                 <div className="text-xs text-yellow-400">High Risk • Score 75</div>
               </div>
            </div>
            <div className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-bold">HIGH</div>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-yellow-500 h-full w-[75%]" />
          </div>
        </div>

        {/* Card 3: Medium */}
        <div className="bg-slate-800 p-5 rounded-xl border border-blue-500/30 shadow-lg transform translate-x-2 hover:translate-x-0 opacity-70 transition-transform duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                 <Globe className="w-6 h-6" />
               </div>
               <div>
                 <div className="font-bold text-white">Zoom Integration</div>
                 <div className="text-xs text-blue-400">Medium Risk • Score 45</div>
               </div>
            </div>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-blue-500 h-full w-[45%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
