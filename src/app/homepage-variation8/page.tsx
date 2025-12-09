"use client";

import React from "react";
import Link from "next/link";
import { Roboto_Flex } from "next/font/google";
import { Search, Bell, Menu, Activity, ShieldAlert, Cpu, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function HomepageVariation8() {
  return (
    <main className={`min-h-screen bg-[#F4F6F8] text-[#1c252e] ${roboto.className}`}>
      
      {/* Top Command Bar */}
      <header className="bg-[#1c252e] text-white h-14 flex items-center justify-between px-6 sticky top-0 z-50 shadow-md">
         <div className="flex items-center gap-6">
            <div className="font-bold text-xl tracking-tight">CYDENTI<span className="text-[#0CB7B8]">.OS</span></div>
            <div className="hidden md:flex items-center bg-[#2d3a46] rounded px-3 py-1.5 w-64 text-sm text-gray-400">
               <Search className="w-4 h-4 mr-2" />
               Search identities...
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-green-400 bg-[#2d3a46] px-2 py-1 rounded">
               <Activity className="w-3 h-3" /> SYSTEM OPTIMAL
            </div>
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <div className="w-8 h-8 bg-[#0CB7B8] rounded-full flex items-center justify-center font-bold text-[#1c252e]">A</div>
         </div>
      </header>

      <div className="flex flex-col lg:flex-row">
         {/* Sidebar Navigation */}
         <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-3.5rem)] sticky top-14">
            <div className="p-4 space-y-1">
               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Main</div>
               <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-[#0A4CFF] rounded-lg font-medium text-sm cursor-pointer">
                  <Database className="w-4 h-4" /> Dashboard
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm cursor-pointer transition-colors">
                  <Network className="w-4 h-4" /> Identity Graph
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm cursor-pointer transition-colors">
                  <ShieldAlert className="w-4 h-4" /> Threats
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm cursor-pointer transition-colors">
                  <Cpu className="w-4 h-4" /> AI Agents
               </div>
            </div>
            
            <div className="mt-auto p-4 border-t border-gray-200">
               <div className="bg-gradient-to-br from-[#1c252e] to-[#2d3a46] rounded-xl p-4 text-white">
                  <h4 className="font-bold text-sm mb-1">Pro Plan</h4>
                  <p className="text-xs text-gray-400 mb-3">Get advanced AI detection capabilities.</p>
                  <Button size="sm" className="w-full bg-[#0CB7B8] hover:bg-[#0aa0a1] text-[#1c252e] font-bold text-xs h-8">Upgrade Now</Button>
               </div>
            </div>
         </aside>

         {/* Main Content Area */}
         <div className="flex-1 p-6 lg:p-10">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
               <div>
                  <h1 className="text-3xl font-bold text-[#1c252e] mb-2">Command Center</h1>
                  <p className="text-gray-500">Real-time overview of your identity infrastructure.</p>
               </div>
               <div className="flex gap-3">
                  <Button variant="outline" className="bg-white">Customize View</Button>
                  <Button className="bg-[#0A4CFF] hover:bg-blue-700">Add Integration</Button>
               </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
               {[
                  { label: "Total Identities", val: "24,592", trend: "+12%", color: "text-[#0A4CFF]" },
                  { label: "Active Threats", val: "0", trend: "Secure", color: "text-green-600" },
                  { label: "Privileged Users", val: "145", trend: "-2%", color: "text-orange-500" },
                  { label: "AI Agents", val: "892", trend: "+45%", color: "text-[#0CB7B8]" },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                     <div className="text-sm font-medium text-gray-500 mb-2">{item.label}</div>
                     <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.val}</div>
                     <div className="text-xs font-medium text-gray-400">{item.trend} vs last month</div>
                  </div>
               ))}
            </div>

            {/* Hero Banner / Promo inside Dashboard */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col lg:flex-row">
               <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
                  <div className="inline-block bg-blue-50 text-[#0A4CFF] text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                     ENTERPRISE GRADE SECURITY
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1c252e] mb-4">
                     Stop identity attacks before they happen.
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 max-w-lg">
                     Cydenti uses behavioral AI to detect compromised credentials and malicious insiders in real-time.
                  </p>
                  <div className="flex gap-4">
                     <Button size="lg" className="bg-[#1c252e] text-white hover:bg-gray-800">
                        Start 14-Day Trial
                     </Button>
                     <Button size="lg" variant="ghost" className="text-[#1c252e]">
                        Read Documentation
                     </Button>
                  </div>
               </div>
               <div className="bg-[#f0f7ff] lg:w-1/3 relative min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
                  {/* Abstract Radial Graph */}
                  <div className="relative w-64 h-64">
                     <div className="absolute inset-0 rounded-full border-[20px] border-white shadow-sm"></div>
                     <div className="absolute inset-4 rounded-full border-[20px] border-blue-100"></div>
                     <div className="absolute inset-8 rounded-full border-[20px] border-blue-200"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                           <div className="text-4xl font-bold text-[#0A4CFF]">100%</div>
                           <div className="text-xs font-bold text-gray-400 uppercase">Visibility</div>
                        </div>
                     </div>
                     {/* Floating Badge */}
                     <div className="absolute top-0 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                        <ShieldAlert className="w-6 h-6 text-green-500" />
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </main>
  );
}
