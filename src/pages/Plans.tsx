
import AppLayout from "@/components/layout/AppLayout";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export default function Plans() {
  return (
    <AppLayout>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Plans & Pricing</h1>
          <p className="text-muted-foreground mt-2">Choose the Right Construction Support Package</p>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
    </AppLayout>
  );
}
