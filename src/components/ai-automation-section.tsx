"use client";

import React from "react";
import { 
  BrainCircuit, 
  Zap, 
  CheckCircle2,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AiAutomationSection() {
  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden text-white rounded-[60px] mx-4 mb-4">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center group/section">
          
          {/* Feature 1: AI & LLMs */}
          <div className="relative">
            
            <div className="relative space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase bg-blue-900/30 px-3 py-1 rounded-full border border-blue-800/50">
                <BrainCircuit className="w-3 h-3" />
                Sovereign Intelligence
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                AI & LLMs That Actually<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Understand Identity.</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Cydenti uses in-house LLMs and AI agents to read identity behavior, SaaS posture, cloud permissions, and risky integrations — <span className="text-white font-medium">privately and securely.</span>
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Spots configuration drift instantly",
                  "Flags anomalies in behavior",
                  "Reveals hidden access paths"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual 1: AI Analysis Card */}
          <div className="relative transition-all duration-500">
             {/* Hover Glow */}
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-700" />
             
             <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden transition-colors duration-500 group-hover/section:border-blue-500/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                
                {/* Mock Code / Analysis UI */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2 text-slate-500 border-b border-slate-800 pb-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <span className="ml-auto text-xs">analysis_module.py</span>
                  </div>
                  
                  <div className="text-purple-400 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300">def analyze_identity_risk(user_context):</div>
                  <div className="pl-4 text-slate-300 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300 delay-75">
                    risk_score = <span className="text-blue-400">0</span>
                  </div>
                  <div className="pl-4 text-slate-300 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300 delay-150">
                    permissions = scan_cloud_entitlements()
                  </div>
                  <div className="pl-4 text-slate-300 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300 delay-200">
                    <span className="text-purple-400">if</span> <span className="text-green-400">"Shadow Admin"</span> <span className="text-purple-400">in</span> permissions:
                  </div>
                  <div className="pl-8 text-slate-300 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300 delay-300">
                    flag_anomaly(<span className="text-green-400">"Hidden Path Discovered"</span>)
                  </div>
                  <div className="pl-8 text-slate-300 opacity-50 group-hover/section:opacity-100 transition-opacity duration-300 delay-500">
                    risk_score += <span className="text-blue-400">95</span> <span className="text-slate-500"># Critical</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-blue-500/20 flex items-center gap-2 opacity-0 translate-y-4 group-hover/section:opacity-100 group-hover/section:translate-y-0 transition-all duration-500 delay-700">
                   <Cpu className="w-3 h-3" />
                   Processing Local
                </div>
             </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-32" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center group/automation">
          
          {/* Visual 2: Automation Dashboard */}
          <div className="relative order-2 lg:order-1 transition-transform duration-500">
             <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden transition-colors duration-500 group-hover/automation:border-green-500/30">
                <div className="space-y-4">
                   {[
                      { label: "Risk Scoring", status: "Complete", color: "text-green-400" },
                      { label: "Configuration Checks", status: "Complete", color: "text-green-400" },
                      { label: "Permission Mapping", status: "Processing...", color: "text-blue-400" },
                      { label: "Alert Enrichment", status: "Queued", color: "text-slate-500" },
                      { label: "Audit Reporting", status: "Queued", color: "text-slate-500" }
                   ].map((task, i) => (
                      <div key={i} 
                           className="flex items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800/50 transition-all duration-500"
                           style={{ transitionDelay: `${i * 100}ms` }}
                      >
                         <span className="text-slate-300 font-medium text-sm group-hover/automation:text-white transition-colors">{task.label}</span>
                         <span className={cn("text-xs font-mono transition-all duration-300 origin-right", task.color)}>{task.status}</span>
                      </div>
                   ))}
                </div>
                
                {/* Overlay Success - Zero Data Egress */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px] opacity-0 group-hover/automation:opacity-100 transition-opacity duration-500 pointer-events-none">
                   {/* Card 1: Zero Data Egress */}
                   <div className="bg-[#0B1120] border border-green-500/30 text-green-400 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-8 group-hover/automation:translate-y-[-20px] transition-all duration-500 delay-100">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold">Zero Data Egress</span>
                   </div>

                   {/* Card 2: Audit Report (New) */}
                   <div className="absolute bg-[#0B1120] border border-blue-500/30 text-blue-400 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-12 group-hover/automation:translate-y-[40px] transition-all duration-500 delay-200">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold">Audit Report Ready</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Feature 2: Automation */}
          <div className="relative space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-green-400 font-bold tracking-widest text-xs uppercase bg-green-900/30 px-3 py-1 rounded-full border border-green-800/50">
                <Zap className="w-3 h-3" />
                Hyper-Automation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Automation That<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Removes Complexity.</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Risk scoring, configuration checks, permission mapping, alert enrichment, and audit reporting — <span className="text-white font-medium">all automated.</span>
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">More Accuracy</div>
                 </div>
                 <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="text-2xl font-bold text-white mb-1">0%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Noise</div>
                 </div>
              </div>
          </div>

        </div>

      </div>
    </section>
  );
}
