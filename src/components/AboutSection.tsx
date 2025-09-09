import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Shield, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold">
                <div className="w-8 h-px bg-ibuild-red"></div>
                About
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Learn More<span className="text-ibuild-red">About Us</span>
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">About iBUILD</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are a team of passionate professionals dedicated to the residential construction industry,
                bringing decades of expertise to help builders simplify operations and achieve lasting success.
              </p>
            </div>

            <Button variant="ibuild-primary" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Values Cards */}
          <div className="space-y-8">
            {/* Mantra */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-ibuild-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Our Mantra</h4>
                    <p className="text-muted-foreground">
                      "We Develop Relationships & Business Solutions – Not Just Software."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-ibuild-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Our Mission</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Deliver cloud-based, cost-effective, fully integrated business and construction management solutions.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Build strong, lasting relationships with our builder clients through continuous feedback and product evolution.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Help builders strengthen connections with customers, suppliers, and investors through comprehensive portal views.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-ibuild-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Our Values</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Foster creativity and innovation for excellence.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Collaborate to continuously improve and grow.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Serve clients with integrity, pride, and professionalism.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ibuild-red rounded-full mt-2 flex-shrink-0"></div>
                        Enjoy the journey — life is too short not to.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;