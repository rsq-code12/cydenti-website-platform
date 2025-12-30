"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Database, Eye, Shield, Lock, Users, Mail } from "lucide-react";
import { Footer } from "@/components/footer";

interface DocSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120;

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
    if (!element) return;

    const offset = 120;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveSection(id);
  };

  const sections: DocSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FileText className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            This Privacy Policy explains how Cydenti (“Company,” “we,” “us,” or “our”) collects, uses, and shares information when you access our website and services (collectively, the “Services”).
          </p>
          <p className="text-slate-600 leading-relaxed">
            By using the Services, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <Database className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We may collect information that you provide directly to us, information collected automatically when you use the Services, and information from third-party sources where permitted by law.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <ul className="space-y-3">
              {[
                "Contact information (such as name, email address, company name).",
                "Communications you send to us (such as support requests).",
                "Usage data (such as pages visited, approximate location, device/browser information).",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <div className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Information",
      icon: <Eye className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We use information to provide and improve the Services, communicate with you, protect the security and integrity of the Services, and comply with legal obligations.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Provide, operate, and maintain the Services.",
              "Respond to inquiries and support requests.",
              "Analyze usage to improve performance and user experience.",
              "Detect, prevent, and investigate security incidents or abuse.",
            ].map((item, i) => (
              <li key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-slate-600 text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "Sharing of Information",
      icon: <Users className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We may share information with service providers who help us operate the Services, comply with legal requirements, and protect our rights. We do not sell personal information.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <p className="text-slate-600 text-sm">
              We may also share information in connection with a business transfer (such as a merger or acquisition) or when you direct us to do so.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      title: "Data Security",
      icon: <Shield className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We implement reasonable technical and organizational measures designed to protect information. However, no method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </div>
      ),
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: <Lock className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We retain information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 mb-2">Cydenti</h4>
            <p className="text-slate-600 text-sm mb-4">6 RUE D&apos;ARMAILLE, 75017 PARIS</p>
            <a href="mailto:support@cydenti.com" className="text-blue-600 hover:text-blue-700 font-medium">
              support@cydenti.com
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-80 bg-slate-50 -z-10 border-b border-slate-100" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-6">
            <Shield className="w-3 h-3" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
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
                    <span
                      className={`transition-colors ${
                        activeSection === section.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
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

          <main className="flex-1 min-w-0">
            <div className="space-y-24 pb-24">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">{section.icon}</div>
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
