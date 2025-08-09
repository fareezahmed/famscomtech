import Hero from "@/components/marketing/Hero";
import Steps from "@/components/marketing/Steps";
import PricingTable from "@/components/marketing/PricingTable";
import Section from "@/components/common/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <Steps />
      </Section>
      <Section>
        <PricingTable />
      </Section>
    </>
  );
}