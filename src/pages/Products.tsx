
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
              <LinkItem href="/solutions#residential">Residential</LinkItem>
              <LinkItem href="/solutions#multi-family">Multi-Family</LinkItem>
              <LinkItem href="/solutions#land-development">Land Development</LinkItem>
            </Section>

            <Section title="Communication Features">
              <LinkItem href="/features#todo">Todo</LinkItem>
              <LinkItem href="/features#itinerary">Itinerary</LinkItem>
              <LinkItem href="/features#discussion">Discussion</LinkItem>
            </Section>

            <Section title="Modules">
              <LinkItem href="/modules#accounting-integration">Accounting Integration</LinkItem>
              <LinkItem href="/modules#construction">Construction</LinkItem>
              <LinkItem href="/modules#design">Design</LinkItem>
              <LinkItem href="/modules#estimation-purchasing">Estimation/Purchasing</LinkItem>
              <LinkItem href="/modules#file-manager">File Manager</LinkItem>
              <LinkItem href="/modules#pricebook">Pricebook</LinkItem>
              <LinkItem href="/modules#project-pro-forma">Project Pro-Forma</LinkItem>
              <LinkItem href="/modules#sales">Sales</LinkItem>
              <LinkItem href="/modules#system-reports">System Reports</LinkItem>
              <LinkItem href="/modules#system-views">System Views</LinkItem>
              <LinkItem href="/modules#warranty">Warranty</LinkItem>
            </Section>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
