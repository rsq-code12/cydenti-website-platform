"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, UserCheck, Shield, AlertTriangle, Scale, Mail } from "lucide-react";
import { Footer } from "@/components/footer";

// Define the structure for documentation sections
interface DocSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120; // Offset for header

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const sections: DocSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FileText className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Cydenti (“Company,” “we,” “us,” or “our”), concerning your access to and use of the Cydenti website and platform as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>
          <p className="text-slate-600 leading-relaxed">
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: <Shield className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <p className="text-slate-600 text-sm">
              The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "user-representations",
      title: "User Representations",
      icon: <UserCheck className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="space-y-3">
            {[
              "All registration information you submit will be true, accurate, current, and complete.",
              "You will maintain the accuracy of such information and promptly update such registration information as necessary.",
              "You have the legal capacity and you agree to comply with these Terms of Use.",
              "You are not a minor in the jurisdiction in which you reside.",
              "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.",
              "You will not use the Site for any illegal or unauthorized purpose.",
              "Your use of the Site will not violate any applicable law or regulation."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <div className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "prohibited-activities",
      title: "Prohibited Activities",
      icon: <AlertTriangle className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <p className="text-slate-600 leading-relaxed">
            As a user of the Site, you agree not to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
             {[
               "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
               "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
               "Circumvent, disable, or otherwise interfere with security-related features of the Site.",
               "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.",
               "Use any information obtained from the Site in order to harass, abuse, or harm another person.",
               "Make improper use of our support services or submit false reports of abuse or misconduct."
             ].map((item, i) => (
               <li key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-slate-600 text-xs">
                 {item}
               </li>
             ))}
          </ul>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <Scale className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            These Terms shall be governed by and defined following the laws of France. Cydenti and yourself irrevocably consent that the courts of Paris, France shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 mb-2">Cydenti</h4>
            <p className="text-slate-600 text-sm mb-4">
              6 RUE D&apos;ARMAILLE, 75017 PARIS
            </p>
            <a href="mailto:support@cydenti.com" className="text-blue-600 hover:text-blue-700 font-medium">support@cydenti.com</a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Background */}
      <div className="absolute top-0 left-0 w-full h-80 bg-slate-50 -z-10 border-b border-slate-100" />
      
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-6">
            <Scale className="w-3 h-3" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className={`transition-colors ${activeSection === section.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                      {section.icon}
                    </span>
                    {section.title}
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-24 pb-24">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  {section.content}
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
