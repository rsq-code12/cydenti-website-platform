import { Hero } from "@/components/hero";
import { IdentityFlowchartSection } from "@/components/identity-flowchart-section";
import { AiAutomationSection } from "@/components/ai-automation-section";
import { WhyCydentiSection } from "@/components/why-cydenti-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <IdentityFlowchartSection />
      <AiAutomationSection />
      <WhyCydentiSection />
      <UseCasesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
