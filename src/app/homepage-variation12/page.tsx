"use client";

import React from "react";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import { ArrowRight, Box, Layers, Zap, GitBranch, GitMerge, Shield, CheckCircle2, Workflow, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export default function HomepageVariation12() {
  return (
    <main className={`min-h-screen bg-[#F8F9FB] text-slate-900 ${inter.className} selection:bg-indigo-100`}>
      
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
              <span className="font-bold text-lg tracking-tight">Cydenti</span>
           </div>
           <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <Link href="#" className="hover:text-indigo-600">Platform</Link>
              <Link href="#" className="hover:text-indigo-600">Integrations</Link>
              <Link href="#" className="hover:text-indigo-600">Resources</Link>
           </div>
           <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
              Get Started
           </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
            <h1 className={`${space.className} text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-tight`}>
               The Sovereign Intelligence Layer for <br className="hidden lg:block"/>
               <span className="text-indigo-600 relative inline-block">
                  SaaS and Identity Blind Spots
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
               </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
               Instantly reveal risky permissions, non-human identities, and Shadow AI agents across Microsoft 365, Salesforce, and the rest of your SaaS stack.
            </p>
            
            <div className="flex justify-center gap-4">
               <Button size="lg" className="h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold shadow-xl shadow-indigo-200">
                  Get a Demo <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
               <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-300 text-slate-700 text-lg font-medium hover:bg-white">
                  Read Documentation
               </Button>
            </div>
            
            <p className="mt-6 text-sm font-medium text-indigo-600 bg-indigo-50 inline-block px-4 py-1.5 rounded-full">
               ✨ Start with a comprehensive, privacy-preserving audit — deployed in minutes.
            </p>
         </div>

         {/* Flowchart Visualization */}
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 overflow-hidden relative">
               {/* Background Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                  
                  {/* Step 1: Sources */}
                  <div className="flex flex-col gap-4 w-full md:w-64">
                     <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600"><Box className="w-4 h-4" /></div>
                        <span className="font-semibold text-sm">Microsoft 365</span>
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded flex items-center justify-center text-sky-600"><Box className="w-4 h-4" /></div>
                        <span className="font-semibold text-sm">Salesforce</span>
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3 opacity-60">
                        <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-500"><Box className="w-4 h-4" /></div>
                        <span className="font-semibold text-sm">AWS IAM</span>
                     </div>
                  </div>

                  {/* Connector 1 */}
                  <div className="hidden md:flex flex-col items-center w-24 relative">
                     <div className="w-full h-[2px] bg-slate-300 absolute top-1/2 left-0" />
                     <div className="w-3 h-3 bg-indigo-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ring-4 ring-white" />
                     <div className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest bg-white px-2">Ingest</div>
                  </div>

                  {/* Step 2: Cydenti Engine (Central Node) */}
                  <div className="w-full md:w-72 bg-indigo-600 text-white rounded-2xl p-6 shadow-2xl shadow-indigo-200 flex flex-col items-center text-center relative group cursor-default">
                     <div className="absolute -top-3 bg-indigo-800 text-indigo-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        AI Analysis Core
                     </div>
                     <Zap className="w-10 h-10 mb-4 text-yellow-300" />
                     <h3 className="text-lg font-bold mb-2">Identity Intelligence</h3>
                     <p className="text-indigo-100 text-xs leading-relaxed">
                        Correlating human users, service accounts, and AI agents into a unified graph.
                     </p>
                     
                     {/* Animated Pulse Ring */}
                     <div className="absolute inset-0 border-2 border-indigo-400 rounded-2xl animate-ping opacity-20" />
                  </div>

                  {/* Connector 2 */}
                  <div className="hidden md:flex flex-col items-center w-24 relative">
                     <div className="w-full h-[2px] bg-slate-300 absolute top-1/2 left-0" />
                     <div className="w-3 h-3 bg-emerald-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ring-4 ring-white" />
                     <div className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest bg-white px-2">Resolve</div>
                  </div>

                  {/* Step 3: Outcomes */}
                  <div className="flex flex-col gap-4 w-full md:w-64">
                     <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold text-sm text-emerald-900">Risk Remediation</span>
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <Shield className="w-5 h-5 text-slate-400" />
                        <span className="font-semibold text-sm text-slate-600">Compliance Report</span>
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <Workflow className="w-5 h-5 text-slate-400" />
                        <span className="font-semibold text-sm text-slate-600">Automated Policy</span>
                     </div>
                  </div>

               </div>
            </div>
         </div>

         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-indigo-50/50 to-white" />
      </div>

      {/* 2. The Cydenti Platform */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className={`${space.className} text-3xl md:text-4xl font-bold text-slate-900 mb-4`}>The Cydenti Platform</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Built on three core pillars to secure every identity across your ecosystem.
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {/* Pillar 1 */}
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Identity Threat Detection (ITDR)</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Detect high-risk identity activity across SaaS and cloud. Stop suspicious privilege changes, abnormal logins, and token misuse before they become incidents.
                  </p>
               </div>
               {/* Pillar 2 */}
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-6">
                     <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">SaaS & Cloud Posture (SSPM)</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Continuously detect misconfigurations, risky permissions, and shadow SaaS. Minimize your identity attack surface with automated drift detection.
                  </p>
               </div>
               {/* Pillar 3 */}
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Identity Exposure Intelligence</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Score risks and prioritize fixes with AI-powered reasoning. Understand blast radius and map identity-level exposure paths.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. AI & Automation at the Core */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.2),transparent_50%)]" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                  <div className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                     In-House LLMs
                  </div>
                  <h2 className={`${space.className} text-3xl md:text-5xl font-bold mb-6`}>
                     Sovereign AI for Identity Security
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     Cydenti uses privacy-focused, in-house LLMs to reason over identity graphs, ensuring no customer data leaves your boundary.
                  </p>
                  <ul className="space-y-4">
                     {[
                        "Detects AI agent impersonation and credential abuse",
                        "Maps cross-app workflows triggered by Shadow AI",
                        "Suggests context-aware remediations automatically"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                              <CheckCircle2 className="w-4 h-4" />
                           </div>
                           <span className="text-slate-300">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="lg:w-1/2">
                  {/* AI Visualization */}
                  <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-2xl">
                     <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-6">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                           <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                           <div className="font-bold">Cydenti AI Analysis</div>
                           <div className="text-xs text-slate-400">Processing Identity Graph...</div>
                        </div>
                     </div>
                     <div className="space-y-4 font-mono text-sm">
                        <div className="bg-slate-900/50 p-3 rounded border-l-2 border-indigo-500 text-indigo-200">
                           {`> Analyzing behavioral anomaly: User "Sarah_Dev" accessing production database via unknown API agent.`}
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded border-l-2 border-red-500 text-red-200">
                           {`> ALERT: High Risk. Agent permissions exceed role scope. Shadow AI workflow detected.`}
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded border-l-2 border-emerald-500 text-emerald-200">
                           {`> ACTION: Recommendation generated. Revoke agent access token immediately.`}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. What Cydenti Delivers */}
      <section className="py-24 bg-[#F8F9FB]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className={`${space.className} text-3xl md:text-4xl font-bold text-slate-900 mb-4`}>What Cydenti Delivers</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">
                  Comprehensive coverage for the modern identity attack surface.
               </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  "Identity Threat Detection (ITDR)",
                  "SaaS Security Posture (SSPM)",
                  "Cloud IAM Exposure Analysis",
                  "Shadow AI & Agent Monitoring",
                  "OAuth & Third-Party Oversight",
                  "Compliance Evidence Automation"
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-indigo-600" />
                     <span className="font-medium text-slate-700">{item}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Why Cydenti */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-16">
               <div>
                  <h2 className={`${space.className} text-3xl md:text-4xl font-bold text-slate-900 mb-8`}>Why Cydenti is Different</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                           <Lock className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 mb-2">Sovereign AI & Data Privacy</h3>
                           <p className="text-slate-600">All AI models run in-house. No customer identity data leaves the platform boundary.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                           <GitMerge className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 mb-2">Unified Identity Graph</h3>
                           <p className="text-slate-600">Competitors cover pieces. Cydenti unifies SaaS, Cloud, and Identity into one view.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                           <Zap className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 mb-2">Deploys in Minutes</h3>
                           <p className="text-slate-600">Agentless. API-first. Connect your stack and see value immediately.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center">
                  {/* Abstract Comparison Visual */}
                  <div className="text-center">
                     <div className="inline-block bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 mb-8">
                        <span className="font-bold text-slate-900">Traditional IAM</span>
                        <div className="text-xs text-slate-500 mt-1">Siloed & Manual</div>
                     </div>
                     <div className="w-px h-12 bg-slate-300 mx-auto mb-2"></div>
                     <div className="w-px h-12 bg-indigo-300 mx-auto mb-8"></div>
                     <div className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl shadow-indigo-200">
                        <span className="font-bold text-lg">Cydenti Platform</span>
                        <div className="text-xs text-indigo-200 mt-1">Unified & Automated</div>
                     </div>
                  </div>
               </div>
             </div>
         </div>
      </section>

      {/* 6. Use Cases */}
      <section className="py-24 bg-[#F8F9FB]">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className={`${space.className} text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center`}>Built for Modern Security Teams</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: "Detect Shadow AI", desc: "Find unauthorized AI agents and workflows accessing sensitive data." },
                  { title: "Secure Service Accounts", desc: "Monitor non-human identities for abnormal behavior and drift." },
                  { title: "Automate Compliance", desc: "Generate evidence for SOC 2, GDPR, and ISO 27001 automatically." },
                  { title: "Prevent Data Exposure", desc: "Identify over-privileged users and public-facing assets." }
               ].map((uc, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors cursor-default">
                     <h3 className="font-bold text-slate-900 mb-2">{uc.title}</h3>
                     <p className="text-sm text-slate-600">{uc.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-32 bg-indigo-600 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className={`${space.className} text-4xl md:text-6xl font-bold mb-8`}>
               Ready to secure your identity blind spots?
            </h2>
            <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
               Start with a comprehensive, privacy-preserving audit — deployed in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="h-16 px-10 bg-white text-indigo-600 hover:bg-indigo-50 text-lg font-bold rounded-full">
                  Get a Demo
               </Button>
               <Button size="lg" variant="outline" className="h-16 px-10 border-indigo-400 text-white hover:bg-indigo-700 text-lg font-bold rounded-full">
                  Contact Sales
               </Button>
            </div>
         </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
                     <span className="font-bold text-white text-xl">Cydenti</span>
                  </div>
                  <p className="max-w-xs mb-6">
                     The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.
                  </p>
                  <div className="flex gap-4">
                     {/* Social icons placeholders */}
                     <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">X</div>
                     <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">Li</div>
                  </div>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-4">Platform</h4>
                  <ul className="space-y-2 text-sm">
                     <li className="hover:text-white cursor-pointer">ITDR</li>
                     <li className="hover:text-white cursor-pointer">SSPM</li>
                     <li className="hover:text-white cursor-pointer">Identity Graph</li>
                     <li className="hover:text-white cursor-pointer">Shadow AI</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                     <li className="hover:text-white cursor-pointer">About Us</li>
                     <li className="hover:text-white cursor-pointer">Careers</li>
                     <li className="hover:text-white cursor-pointer">Blog</li>
                     <li className="hover:text-white cursor-pointer">Contact</li>
                  </ul>
               </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
               <p>© 2024 Cydenti Inc. All rights reserved.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-white cursor-pointer">Terms of Service</span>
               </div>
            </div>
         </div>
      </footer>

    </main>
  );
}
