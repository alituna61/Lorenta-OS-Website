import { Hero } from "@/components/landing/Hero";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { ErpStrip } from "@/components/landing/ErpStrip";
import { ValueProps } from "@/components/landing/ValueProps";
import { Agents } from "@/components/landing/Agents";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Stats } from "@/components/landing/Stats";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { Onboarding } from "@/components/landing/Onboarding";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingTeaser } from "@/components/landing/PricingTeaser";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ErpStrip />
      <TargetAudience />
      <ValueProps />
      <Onboarding />
      <Agents />
      <Stats />
      <ComparisonTable />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
