"use client";

import React from "react";
import { Clock, Search, Zap, CheckCircle2 } from "lucide-react";

export function ComplianceVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
      <div className="absolute left-12 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-slate-200" />
      
      <div className="space-y-8 relative z-10 py-6 pr-6 md:py-8 md:pr-8">
        {[
          {
            title: "Select Timeframe",
            desc: "Instant lookback capability.",
            icon: Clock
          },
          {
            title: "Focus Scope",
            desc: "Filter by user or resource.",
            icon: Search
          },
          {
            title: "Reconstruct",
            desc: "Full history auto-generated.",
            icon: Zap
          }
        ].map((item, i) => (
          <div key={i} className="relative pl-24 group">
            <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <item.icon className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="relative pl-24">
          <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white shadow-lg flex items-center gap-4">
             <div className="bg-white/20 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
             </div>
             <div>
                <h4 className="font-bold text-sm">Audit Ready</h4>
                <p className="text-xs text-blue-100">Evidence generated.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
