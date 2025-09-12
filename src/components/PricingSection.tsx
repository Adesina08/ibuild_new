import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Foundation",
      description: "For small contractors and individual builders starting out",
      price: "$300 - $500",
      period: "/month",
      features: [
        "Basic project tracking",
        "Access to standard reports", 
        "Email support",
        "Team collaboration tools",
        "Custom financial dashboards"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Builder Contract",
      description: "For growing firms with custom requirements",
      price: "Negotiable", 
      period: "",
      features: [
        "Advanced project scheduling",
        "Full customization available",
        "Dedicated account manager",
        "Priority 24/7 support",
        "Enterprise integrations",
        "Custom training sessions"
      ],
      popular: true,
      cta: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold mb-4">
            <div className="w-8 h-px bg-ibuild-red"></div>
            Project Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose the Right<span className="text-ibuild-red"> Construction Support Package</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-large transition-all duration-300 ${plan.popular ? 'border-ibuild-red shadow-red-glow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-ibuild-red text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-ibuild-red flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? "ibuild-primary" : "ibuild-outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
