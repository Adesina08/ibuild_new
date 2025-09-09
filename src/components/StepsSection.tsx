import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
      icon: Search,
    },
    {
      number: "02", 
      title: "Planning & iBUILD",
      description: "Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Development Phase", 
      description: "Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.",
      icon: Code,
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.",
      icon: Rocket,
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold mb-4">
            <div className="w-8 h-px bg-ibuild-red"></div>
            Business Tools
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-ibuild-red">Tools</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-large transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="bg-ibuild-red text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm">
                      Step {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-ibuild-red/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-ibuild-red/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-ibuild-red" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ibuild-red transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;