import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Settings, DollarSign, MessageCircle } from "lucide-react";
import constructionDashboard from "@/assets/construction-dashboard.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Financial Insights",
      description: "Monitor project costs and profitability with live updates"
    },
    {
      icon: Settings,
      title: "End-to-End Project Management", 
      description: "Manage every aspect of your construction projects in one place"
    },
    {
      icon: DollarSign,
      title: "Seamless QuickBooks Integration",
      description: "Connect with your existing accounting workflows effortlessly"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold">
                <div className="w-8 h-px bg-ibuild-red"></div>
                Built for Builders
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Streamline Your Construction Business with iBUILD
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              iBUILD is more than software—we're your silent partner in construction success.
              Manage land, multi-unit, and single-family projects with one integrated, cloud-based solution.
              Gain the confidence, clarity, and control you need to compete, survive, and thrive.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ibuild-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-ibuild-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="ibuild-primary" size="lg">
                Book a Demo
              </Button>
              <Button variant="ibuild-outline" size="lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                Talk to Us
              </Button>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-card rounded-2xl p-4 border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-ibuild-red">35+</div>
                <div className="text-xs text-muted-foreground font-medium">yrs</div>
              </div>
              <div className="text-sm font-medium text-foreground">Industry Experience</div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative">
            <Card className="overflow-hidden border-border/50 shadow-large">
              <img
                src={constructionDashboard}
                alt="iBUILD Construction Management Dashboard"
                className="w-full h-auto"
              />
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-ibuild-red rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ibuild-red/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;