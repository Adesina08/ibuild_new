import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Settings, DollarSign, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import constructionDashboard from "@/assets/construction-dashboard.png";
import ExperienceSign from "@/components/ExperienceSign";

const FeaturesSection = () => {
  const openDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Financial Insights",
      description: "Track costs, budgets, and profitability with live updates that keep you ahead of the curve."
    },
    {
      icon: Settings,
      title: "End-to-End Project Management", 
      description: "Coordinate every phase from sales, estimating and procurement to scheduling and warranty—with one seamless platform."
    },
    {
      icon: DollarSign,
      title: "Seamless QuickBooks Integration",
      description: "Effortlessly sync your financials with your third-party online accounting  system to eliminate manual entry and ensure accounting accuracy."
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
                Your Silent Partner in Construction Success
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              iBUILD is more than software, it’s your integrated command center for managing land, multi-unit, and single-family projects with precision and ease. 
              From real-time financial insights to end-to-end project oversight, we give you the clarity, control, and confidence to compete, survive, and thrive.
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
              <Button variant="ibuild-primary" size="lg" onClick={openDemo}>
                Book a Demo
              </Button>
              <Button variant="ibuild-outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Talk to Us
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Content - Dashboard Image with Experience Badge */}
          <div className="relative mt-20">
            <Card className="overflow-hidden border-border/50 shadow-large">
              <img
                src={constructionDashboard}
                alt="iBUILD Construction Management Dashboard"
                className="w-full h-auto"
              />
            </Card>

            <div className="absolute -top-48 left-1/2 -translate-x-1/2">
              <ExperienceSign className="h-48 w-64" />
            </div>

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
