import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DemoForm } from "@/components/sections/DemoForm";

export const metadata: Metadata = {
  title: "Katıl",
  description:
    "LorentaOS’un operasyonunuzu 30 dakikada nasıl yürüttüğünü görün — kendi ERP’nizle, slayt değil canlı bir tur.",
};

export default function DemoPage() {
  return (
    <Section spacing="default">
      <Container width="wide">
        <div className="mx-auto w-full max-w-2xl">
          <DemoForm />
        </div>
      </Container>
    </Section>
  );
}