
import { Button } from "@/components/ui/button";
import { Phone, Rocket } from "lucide-react";
import heroImg from "@/assets/hero-photo.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const openDemo = () => {
    // fire event for header to open its modal
    const event = new Event("open-demo-modal");
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden">
      <div className="container max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Construction</span>
                <br />
                <span className="text-foreground">Success,</span>
                <br />
                <span className="text-ibuild-red">Simplified.</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>If you can't trust your financials, who can you trust?</p>
                <p>iBUILD 2.0 streamlines operations, automates workflows, and empowers your team to thrive in today's construction landscape.</p>
                <p>With 24/7 tools, proactive support, and real-time insights, you gain the confidence and control to build faster, smarter, and with total clarity.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="ibuild-outline"
                size="lg"
                className="group w-full sm:w-auto"
                onClick={openDemo}
              >
                <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Schedule a Demo
              </Button>
              <Button
                asChild
                variant="ibuild-primary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <Link to="/plans">
                  <Rocket className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Building with iBUILD Today
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={heroImg}
              alt="Construction planning and tools"
              className="w-full max-w-xl h-auto rounded-xl border border-border/50 shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

export default HeroSection;
