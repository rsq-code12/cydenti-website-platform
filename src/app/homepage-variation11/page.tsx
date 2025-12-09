"use client";

import React from "react";
import Link from "next/link";
import { Public_Sans } from "next/font/google";
import { CheckCircle, Shield, Globe, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function HomepageVariation11() {
  return (
    <main className={`min-h-screen bg-white text-slate-900 ${publicSans.className}`}>
      
      {/* Utility Bar */}
      <div className="bg-[#001E3C] text-white py-2 px-6 text-xs font-medium flex justify-center text-center">
         <span>Announcing Cydenti Enterprise 2.0: AI-Native Identity Governance. <Link href="#" className="underline decoration-blue-300 underline-offset-2 hover:text-blue-200 ml-1">Read the press release →</Link></span>
      </div>

      {/* Enterprise Navbar */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-10">
               <div className="font-extrabold text-2xl tracking-tight text-[#001E3C]">Cydenti</div>
               <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600">
                  <Link href="#" className="hover:text-[#0A4CFF]">Platform</Link>
                  <Link href="#" className="hover:text-[#0A4CFF]">Solutions</Link>
                  <Link href="#" className="hover:text-[#0A4CFF]">Customers</Link>
                  <Link href="#" className="hover:text-[#0A4CFF]">Resources</Link>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-[#001E3C] hidden sm:block">Log in</Link>
               <Button className="bg-[#0A4CFF] hover:bg-blue-700 font-semibold px-6">Request Demo</Button>
            </div>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
         <div className="max-w-7xl mx-auto px-6 text-center">
            
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 mb-8 mx-auto">
               <Shield className="w-4 h-4 text-[#0CB7B8]" />
               <span>The Global Standard for Identity Security</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#001E3C] mb-6 tracking-tight max-w-4xl mx-auto leading-[1.1]">
               Trust at the speed of <br/>
               <span className="text-[#0A4CFF]">modern business.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
               Secure your workforce and consumer identities with the world's most reliable and compliant identity platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
               <Button size="lg" className="h-14 px-8 text-base bg-[#001E3C] hover:bg-[#002d5c] text-white font-bold shadow-lg">
                  Start Free Trial
               </Button>
               <Button size="lg" variant="outline" className="h-14 px-8 text-base border-slate-300 text-slate-700 font-bold bg-white hover:bg-slate-50">
                  Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-slate-200 pt-12 max-w-5xl mx-auto">
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by 10,000+ Enterprises</p>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale mix-blend-multiply">
                  {/* Logo Placeholders */}
                  <div className="h-8 bg-slate-300 rounded w-full"></div>
                  <div className="h-8 bg-slate-300 rounded w-full"></div>
                  <div className="h-8 bg-slate-300 rounded w-full"></div>
                  <div className="h-8 bg-slate-300 rounded w-full"></div>
                  <div className="h-8 bg-slate-300 rounded w-full"></div>
               </div>
            </div>

         </div>

         {/* Abstract Global Map Background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] -z-10 opacity-10">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
             {/* Add grid lines representing a globe or network */}
             <div className="absolute inset-0 border border-slate-300 rounded-full scale-150 opacity-20"></div>
             <div className="absolute inset-0 border border-slate-300 rounded-full scale-125 opacity-20"></div>
         </div>
      </div>

      {/* Feature Highlight Section */}
      <div className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Lock, title: "Zero Trust Architecture", desc: "Verify explicitly, use least privilege access, and assume breach methodology." },
                  { icon: Globe, title: "Global Compliance", desc: "Out-of-the-box support for GDPR, CCPA, SOC2, HIPAA, and ISO 27001." },
                  { icon: CheckCircle, title: "99.99% Uptime SLA", desc: "Enterprise-grade reliability with redundant infrastructure across 6 regions." }
               ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-start">
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0A4CFF] mb-6">
                        <feature.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-[#001E3C] mb-3">{feature.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                     <Link href="#" className="mt-4 text-[#0A4CFF] font-semibold hover:underline flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </main>
  );
}
