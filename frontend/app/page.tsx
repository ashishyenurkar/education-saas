import { AICapabilities } from "@/components/marketing/ai-capabilities";
import { BuiltForEveryone } from "@/components/marketing/built-for-everyone";
import { CTASection } from "@/components/marketing/cta-section";
import { Features } from "@/components/marketing/features";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Navbar } from "@/components/marketing/navbar";
import { Solutions } from "@/components/marketing/solutions";

export default function Home() {
  return (
    <>
      <Navbar />

      <main >
       <Hero />
        <Features />
        <Solutions />
        <AICapabilities />
        <HowItWorks />
        <BuiltForEveryone/>
        <CTASection />
        <Footer />
      </main>
    </>
  );
}