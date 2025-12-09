"use client";

import React from "react";
import Link from "next/link";
import { Manrope, Playfair_Display } from "next/font/google";
import { ArrowRight, Fingerprint, ScanEye, FileKey, Sparkles, Shield, Globe, Zap, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function HomepageVariation13() {
  return (
    <main className={`min-h-screen bg-[#FDFCF8] text-[#1A1A1A] ${manrope.className}`}>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-[1400px] mx-auto">
         <div className="flex items-center gap-12">
            <Link href="/" className={`${playfair.className} text-2xl font-bold tracking-tight`}>
               Cydenti.
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
               <Link href="#" className="hover:text-black transition-colors">Platform</Link>
               <Link href="#" className="hover:text-black transition-colors">Solutions</Link>
               <Link href="#" className="hover:text-black transition-colors">Company</Link>
            </div>
         </div>
         <div className="flex gap-4">
            <Button variant="ghost" className="hover:bg-transparent hover:text-black text-gray-500">Login</Button>
            <Button className="rounded-full bg-[#1A1A1A] text-[#FDFCF8] px-6 hover:bg-gray-800">
               Get Started
            </Button>
         </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-8 pt-12 pb-24 grid lg:grid-cols-2 gap-20 items-center">
         
         {/* Left: Editorial Content */}
         <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-8">
               <span className="h-px w-8 bg-gray-300"></span>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Identity Intelligence</span>
            </div>
            
            <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-medium`}>
               The Sovereign Intelligence Layer for <i className="text-gray-400 font-serif">Blind Spots.</i>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
               Instantly reveal risky permissions, non-human identities, and Shadow AI agents across your entire SaaS stack. Privacy-preserving by design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start">
               <Button className="h-14 px-8 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-gray-800 rounded-none text-base font-medium">
                  Get a Demo
               </Button>
               <div className="flex flex-col gap-1 mt-1">
                  <span className="text-sm font-bold">Start your audit</span>
                  <span className="text-xs text-gray-400">Deployed in minutes.</span>
               </div>
            </div>
         </div>

         {/* Right: Modern Abstract Visual */}
         <div className="relative h-[600px] bg-[#F2F0E9] rounded-[40px] overflow-hidden p-12 flex flex-col justify-between">
            
            {/* Top Badge */}
            <div className="flex justify-between items-start">
               <div className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live Monitoring
               </div>
               <Sparkles className="text-gray-400 w-6 h-6" />
            </div>

            {/* Central Graphic */}
            <div className="relative flex-1 flex items-center justify-center">
               <div className="relative w-64 h-64">
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border border-gray-300 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-8 border border-gray-300 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-16 border border-gray-300 rounded-full" />
                  
                  {/* Central Eye/Scanner */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white w-24 h-24 rounded-full shadow-xl flex items-center justify-center text-[#1A1A1A] z-10">
                        <ScanEye className="w-10 h-10" />
                     </div>
                  </div>

                  {/* Floating Icons Orbiting */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg">
                     <Fingerprint className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="absolute bottom-10 right-0 bg-white p-3 rounded-xl shadow-lg">
                     <FileKey className="w-5 h-5 text-gray-600" />
                  </div>
               </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl">
                  <div className="text-3xl font-serif font-bold mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Visibility</div>
               </div>
               <div className="bg-[#1A1A1A] text-white p-6 rounded-3xl">
                  <div className="text-3xl font-serif font-bold mb-1">0ms</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Latency</div>
               </div>
            </div>

         </div>

      </div>

      {/* 2. The Cydenti Platform */}
      <section className="py-32 bg-white">
         <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-20">
               <div className="lg:col-span-1">
                  <h2 className={`${playfair.className} text-4xl font-medium mb-6`}>The Platform.</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                     Built on three core pillars to secure every identity across your ecosystem. A unified approach to modern security.
                  </p>
                  <Button variant="link" className="text-[#1A1A1A] p-0 font-bold underline decoration-2 underline-offset-4">
                     Explore Platform
                  </Button>
               </div>
               <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                  <div>
                     <div className="w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center text-[#1A1A1A] mb-6">
                        <Shield className="w-5 h-5" />
                     </div>
                     <h3 className={`${playfair.className} text-2xl font-medium mb-3`}>Identity Threat Detection</h3>
                     <p className="text-gray-500 leading-relaxed font-light">
                        Detect high-risk identity activity across SaaS and cloud. Stop suspicious privilege changes and token misuse before they become incidents.
                     </p>
                  </div>
                  <div>
                     <div className="w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center text-[#1A1A1A] mb-6">
                        <Globe className="w-5 h-5" />
                     </div>
                     <h3 className={`${playfair.className} text-2xl font-medium mb-3`}>SaaS & Cloud Posture</h3>
                     <p className="text-gray-500 leading-relaxed font-light">
                        Continuously detect misconfigurations and risky permissions. Minimize your identity attack surface with automated drift detection.
                     </p>
                  </div>
                  <div>
                     <div className="w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center text-[#1A1A1A] mb-6">
                        <Zap className="w-5 h-5" />
                     </div>
                     <h3 className={`${playfair.className} text-2xl font-medium mb-3`}>Exposure Intelligence</h3>
                     <p className="text-gray-500 leading-relaxed font-light">
                        Score risks and prioritize fixes with AI-powered reasoning. Understand blast radius and map identity-level exposure paths.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. AI & Automation */}
      <section className="py-32 bg-[#F2F0E9]">
         <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="aspect-[4/5] bg-white rounded-[40px] overflow-hidden p-8 shadow-xl">
                     {/* Editorial AI Visualization */}
                     <div className="h-full border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Analysis Log</span>
                           <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <div className="space-y-6">
                           <p className="font-serif text-2xl italic text-gray-400">
                              "Detecting shadow AI workflow in Salesforce integration..."
                           </p>
                           <div className="space-y-3">
                              <div className="flex gap-4 items-center">
                                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">01</div>
                                 <p className="text-sm font-medium">Map Agent Permissions</p>
                              </div>
                              <div className="flex gap-4 items-center">
                                 <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-bold">02</div>
                                 <p className="text-sm font-bold">Identify Scope Drift</p>
                              </div>
                              <div className="flex gap-4 items-center">
                                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">03</div>
                                 <p className="text-sm font-medium">Suggest Remediation</p>
                              </div>
                           </div>
                        </div>
                        <div className="pt-8 border-t border-gray-100">
                           <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
                              <span className="text-xs font-bold uppercase tracking-wide">Cydenti Sovereign LLM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className={`${playfair.className} text-5xl md:text-6xl font-medium mb-8 leading-tight`}>
                     Sovereign AI.<br/>
                     <span className="text-gray-400 italic">Privacy First.</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-lg">
                     Cydenti uses privacy-focused, in-house LLMs to reason over identity graphs. No customer identity data ever leaves the platform boundary.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "Detect AI agent impersonation",
                        "Map cross-app workflows",
                        "Context-aware remediation"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <Check className="w-5 h-5 text-[#1A1A1A]" />
                           <span className="text-gray-800 font-medium">{item}</span>
                        </li>
                     ))}
                  </ul>
                  <Button className="h-14 px-8 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-gray-800 rounded-none text-base font-medium">
                     Learn about our AI
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Deliverables / Features */}
      <section className="py-32 bg-[#1A1A1A] text-[#FDFCF8]">
         <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-12">
               <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium`}>Capabilities.</h2>
               <p className="text-gray-400 max-w-md mt-6 md:mt-0">
                  Comprehensive coverage for the modern identity attack surface.
               </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
               {[
                  { title: "Identity Threat Detection", desc: "Real-time alerts on suspicious activities." },
                  { title: "SaaS Security Posture", desc: "Automated misconfiguration detection." },
                  { title: "Cloud IAM Exposure", desc: "Deep analysis of cloud permission risks." },
                  { title: "Shadow AI Monitoring", desc: "Visibility into unauthorized AI usage." },
                  { title: "OAuth Oversight", desc: "Control third-party app access." },
                  { title: "Compliance Automation", desc: "Evidence for SOC2, GDPR, and ISO." }
               ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="h-px w-full bg-gray-800 mb-6 group-hover:bg-[#FDFCF8] transition-colors duration-500" />
                     <h3 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                     <p className="text-gray-500 font-light group-hover:translate-x-2 transition-transform duration-300 delay-75">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Why Cydenti */}
      <section className="py-32 bg-white">
         <div className="max-w-[1400px] mx-auto px-8">
             <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className={`${playfair.className} text-4xl md:text-5xl font-medium mb-6`}>Why Cydenti?</h2>
               <p className="text-gray-500 text-lg font-light">
                  A different approach to identity security. Unified, sovereign, and built for speed.
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-12 text-center">
               <div className="p-8 bg-[#FDFCF8] border border-gray-100 rounded-3xl">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                     <Lock className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className={`${playfair.className} text-2xl font-medium mb-4`}>Sovereign Privacy</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                     All AI models run in-house. No customer identity data leaves the platform boundary.
                  </p>
               </div>
               <div className="p-8 bg-[#FDFCF8] border border-gray-100 rounded-3xl">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                     <Fingerprint className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className={`${playfair.className} text-2xl font-medium mb-4`}>Unified Graph</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                     Competitors cover pieces. Cydenti unifies SaaS, Cloud, and Identity into one view.
                  </p>
               </div>
               <div className="p-8 bg-[#FDFCF8] border border-gray-100 rounded-3xl">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                     <Zap className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className={`${playfair.className} text-2xl font-medium mb-4`}>Deploy in Minutes</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                     Agentless. API-first. Connect your stack and see value immediately.
                  </p>
               </div>
             </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-32 bg-[#F2F0E9] border-t border-gray-200">
         <div className="max-w-[1400px] mx-auto px-8 text-center">
            <h2 className={`${playfair.className} text-5xl md:text-7xl font-medium mb-8 leading-tight`}>
               Secure your<br/>
               <i className="text-gray-400">blind spots.</i>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
               Start with a comprehensive, privacy-preserving audit — deployed in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button className="h-16 px-12 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-gray-800 rounded-none text-lg font-medium">
                  Get a Demo
               </Button>
               <Button variant="outline" className="h-16 px-12 border-[#1A1A1A] text-[#1A1A1A] hover:bg-white rounded-none text-lg font-medium">
                  Contact Sales
               </Button>
            </div>
         </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-white text-[#1A1A1A] py-20 border-t border-gray-200">
         <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
               <div className="col-span-1 md:col-span-2">
                  <Link href="/" className={`${playfair.className} text-3xl font-bold tracking-tight mb-8 block`}>
                     Cydenti.
                  </Link>
                  <p className="max-w-xs text-gray-500 font-light leading-relaxed">
                     The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                  <ul className="space-y-4 text-gray-500 font-light">
                     <li className="hover:text-black cursor-pointer">ITDR</li>
                     <li className="hover:text-black cursor-pointer">SSPM</li>
                     <li className="hover:text-black cursor-pointer">Identity Graph</li>
                     <li className="hover:text-black cursor-pointer">Shadow AI</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                  <ul className="space-y-4 text-gray-500 font-light">
                     <li className="hover:text-black cursor-pointer">About Us</li>
                     <li className="hover:text-black cursor-pointer">Careers</li>
                     <li className="hover:text-black cursor-pointer">Blog</li>
                     <li className="hover:text-black cursor-pointer">Contact</li>
                  </ul>
               </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
               <p>© 2024 Cydenti Inc. All rights reserved.</p>
               <div className="flex gap-8 mt-4 md:mt-0">
                  <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
               </div>
            </div>
         </div>
      </footer>
   </main>
  );
}
