
import AppLayout from "@/components/layout/AppLayout";

const Section = ({ title, children }:{ title:string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const LinkItem = ({ href, children }:{ href:string; children: React.ReactNode }) => (
  <a href={href} className="block text-sm text-muted-foreground hover:text-ibuild-red">{children}</a>
);

export default function ProductsPage() {
  return (
    <AppLayout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground mt-2">Browse everything that’s included in iBUILD.</p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Section title="Solutions">
              <LinkItem href="/projects#single-family">Residential</LinkItem>
              <LinkItem href="/projects#multi-unit">Multi-Family</LinkItem>
              <LinkItem href="/projects#land-acquisition">Land Development</LinkItem>
            </Section>

            <Section title="Communication Features">
              <LinkItem href="/features#todo">Todo</LinkItem>
              <LinkItem href="/features#itinerary">Itinerary</LinkItem>
              <LinkItem href="/features#discussion">Discussion</LinkItem>
            </Section>

            <Section title="Modules">
              <LinkItem href="/tools">Accounting Integration</LinkItem>
              <LinkItem href="/tools">Construction</LinkItem>
              <LinkItem href="/tools">Design</LinkItem>
              <LinkItem href="/tools">Estimation/Purchasing</LinkItem>
              <LinkItem href="/tools">File Manager</LinkItem>
              <LinkItem href="/tools">Pricebook</LinkItem>
              <LinkItem href="/tools">Project Pro-Forma</LinkItem>
              <LinkItem href="/tools">Sales</LinkItem>
              <LinkItem href="/tools">System Reports</LinkItem>
              <LinkItem href="/tools">System Views</LinkItem>
              <LinkItem href="/tools">Warranty</LinkItem>
            </Section>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
