
import AppLayout from "@/components/layout/AppLayout";

export default function ModulesPage() {
  const item = (id:string, title:string, text:string) => (
    <div id={id} className="rounded-lg border bg-card/50 p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );

  return (
    <AppLayout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold">Modules</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {item("accounting-integration","Accounting Integration","QuickBooks and other connectors.")}
            {item("construction","Construction","Scheduling, tasks, inspections.")}
            {item("design","Design","Selections, allowances, approvals.")}
            {item("estimation-purchasing","Estimation/Purchasing","Takeoffs, POs, change orders.")}
            {item("file-manager","File Manager","Docs, drawings, and revisions.")}
            {item("pricebook","Pricebook","Central pricing for materials and assemblies.")}
            {item("project-pro-forma","Project Pro-Forma","Forecasting and cash flow.")}
            {item("sales","Sales","CRM to contract.")}
            {item("system-reports","System Reports","Insights that matter.")}
            {item("system-views","System Views","Role-based dashboards.")}
            {item("warranty","Warranty","Post‑close service.")}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
