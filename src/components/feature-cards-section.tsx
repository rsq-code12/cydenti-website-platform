import React from "react";
import { Shield, Bot, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeatureCardsSection() {
  return (
    <section className="py-32 bg-transparent relative overflow-visible z-0">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Total Visibility. <br/>
            <span className="text-blue-600">Intelligent Defense.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Secure your entire identity fabric—human, machine, and AI—with one unified platform.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 mt-10">
          
          {/* LEFT CARD: AI/LLM & RAG */}
          <div className="w-full max-w-sm lg:w-[380px] z-10 lg:transform lg:-rotate-6 lg:translate-x-12 lg:translate-y-8 transition-all duration-500 hover:z-30 hover:rotate-0 hover:scale-105">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full min-h-[420px] flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sovereign AI & RAG</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Privacy-first intelligence that reasons over your identity graph. Summarize risks and automate remediation without customer data ever leaving your boundary.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    In-house privacy-focused LLMs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Automated context & reasoning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Data sovereignty guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: AI Agents (Rendered before center in DOM for stacking, but visually right) 
              Actually, in flex row, order matters. Let's place it third in DOM. 
          */}

          {/* MIDDLE CARD: ITDR (Centerpiece) */}
          <div className="w-full max-w-md lg:w-[440px] z-20 transform hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800 h-full min-h-[480px] flex flex-col relative overflow-hidden">
              {/* Abstract Background Graphic */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-blue-500/20">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">ITDR</h3>
              <p className="text-blue-100/80 text-lg mb-8 flex-grow">
                Identity Threat Detection & Response. Stop identity threats before they become incidents by detecting suspicious privileges and abnormal behaviors in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Real-time anomaly detection</span>
                </div>
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Unified Identity Graph analysis</span>
                </div>
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Automated threat response</span>
                </div>
              </div>

              <Link href="/platform" className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
                Explore Platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD: AI Agents */}
          <div className="w-full max-w-sm lg:w-[380px] z-10 lg:transform lg:rotate-6 lg:-translate-x-12 lg:translate-y-8 transition-all duration-500 hover:z-30 hover:rotate-0 hover:scale-105">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full min-h-[420px] flex flex-col">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Agent Security</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Secure your non-human workforce. Monitor agent-initiated actions, prevent unintended automations, and gain visibility into shadow AI workflows.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Agent behavior monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Shadow AI detection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Cross-app workflow oversight
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
