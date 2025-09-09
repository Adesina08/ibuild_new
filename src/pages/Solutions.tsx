
import AppLayout from "@/components/layout/AppLayout";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection from "@/components/ProjectsSection";

const Section = ({ id, title, children }:{ id:string; title:string; children: React.ReactNode }) => (
  <section id={id} className="py-12 border-t border-border/50">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
      <div className="text-muted-foreground">{children}</div>
    </div>
  </section>
);

export default function Solutions() {
  return (
    <AppLayout>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Solutions</h1>
          <p className="text-muted-foreground mt-2">Single‑Family, Multi‑Family, and Land Development—managed in one platform.</p>
        </div>
      </section>

      <Section id="residential" title="Residential (Single‑Family)">
        <ul className="list-disc pl-6 space-y-1">
          <li>Estimating, purchasing, and scheduling in one system</li>
          <li>Customer selections and approvals</li>
          <li>Financial reports and controls</li>
        </ul>
      </Section>

      <Section id="multi-family" title="Multi‑Family">
        <ul className="list-disc pl-6 space-y-1">
          <li>Job templates for townhomes and condos</li>
          <li>Project Pro‑Forma forecasting</li>
          <li>Change order governance and audit trails</li>
        </ul>
      </Section>

      <Section id="land-development" title="Land Development">
        <ul className="list-disc pl-6 space-y-1">
          <li>Budgeting across land, site works, and utilities</li>
          <li>Lot inventory and release strategies</li>
          <li>Vendor & trade coordination</li>
        </ul>
      </Section>

      <FeaturesSection />
      <ProjectsSection />
    </AppLayout>
  );
}
