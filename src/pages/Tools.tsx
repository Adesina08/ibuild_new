import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { businessTools } from "@/content/tools";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-muted/30">
          <div className="container max-w-screen-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Business Tools</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {businessTools.map((tool) => (
                <Card key={tool.id} className="bg-card/60 backdrop-blur-sm border-border/50">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
