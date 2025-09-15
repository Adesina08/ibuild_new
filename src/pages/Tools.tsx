import AppLayout from "@/components/layout/AppLayout";
import { toolSections } from "@/content/tools";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Tools = () => {
  return (
    <AppLayout>
      <section className="py-16 bg-muted/30">
        <div className="container max-w-screen-2xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            iBUILD’s Innovative Construction & Business Digital Management Tools Aren’t Just Features — They’re Your Strategic Business Advantage
          </h1>
          <p className="text-center max-w-4xl mx-auto mb-12">
            iBUILD’s tools are not mere functionalities but are core drivers of our competitive edge. By positioning them as strategic assets, it underscores how deeply digital integrated and automated systems can elevate operational efficiency, stakeholder trust, and decision-making—transforming construction management from reactive to proactive leadership.
          </p>
          {toolSections.map((section) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                {section.title}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.tools.map((tool) => (
                  <Card
                    key={tool.id}
                    className="bg-card/60 backdrop-blur-sm border-border/50"
                  >
                    <CardHeader className="flex flex-row gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-ibuild-red/10">
                        <Building2 className="h-5 w-5 text-ibuild-red" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default Tools;
