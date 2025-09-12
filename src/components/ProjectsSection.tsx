import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import projectImg1 from "@/assets/projects/project-1.webp";
import projectImg3 from "@/assets/projects/project-3.webp";
import projectImg4 from "@/assets/projects/project-4.webp";
import projectImg5 from "@/assets/projects/project-5.webp";
import projectImg6 from "@/assets/projects/project-6.webp";
import projectImg8 from "@/assets/projects/project-8.webp";
import projectImg9 from "@/assets/projects/project-9.webp";
import projectImg10 from "@/assets/projects/project-10.webp";
import projectImg11 from "@/assets/projects/project-11.webp";
import projectImg12 from "@/assets/projects/project-12.webp";

function useAutoplay(api?: CarouselApi) {
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 2000);
    return () => clearInterval(interval);
  }, [api]);
}

const ProjectsSection = () => {
  const residentialImages = [projectImg6, projectImg8];
  const multiFamilyImages = [
    projectImg1,
    projectImg3,
    projectImg9,
    projectImg10,
    projectImg11,
    projectImg12,
  ];
  const landDevelopmentImages = [projectImg4, projectImg5];

  const [residentialApi, setResidentialApi] = useState<CarouselApi>();
  const [multiFamilyApi, setMultiFamilyApi] = useState<CarouselApi>();
  const [landDevApi, setLandDevApi] = useState<CarouselApi>();

  useAutoplay(residentialApi);
  useAutoplay(multiFamilyApi);
  useAutoplay(landDevApi);

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-screen-2xl space-y-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold">
            <div className="w-8 h-px bg-ibuild-red"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6"><span className="text-ibuild-red">Our Projects</span></h2>
          </div>
        </div>
        
        <div
          id="residential"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Single-Family Residential Builders
            </h2>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> understands and appreciates that homes are more than just
              structures; they're heartwarming memories are made. At{" "}
              <span className="text-ibuild-red">iBUILD</span>, our cloud software offers innovative solutions to bring
              your vision to life.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Project Flexibility
            </h3>
            <p className="text-muted-foreground mb-6">
              When creating a single-family residential project,{" "}
              <span className="text-ibuild-red">iBUILD</span> provides builders with total flexibility. You can choose
              from foundation options and customizable parking solutions. Plus,
              our unique Basement Development option allows you to personalize
              your project even further.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold mb-2">Foundation Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basement</li>
                  <li>Slab-On-Grade</li>
                  <li>Crawl Space / Pile Columns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Parking Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attached Garage</li>
                  <li>Detached Garage (With or Without Secondary Suite)</li>
                  <li>Carport</li>
                  <li>Parking Pads</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setResidentialApi}
              className="w-full"
            >
              <CarouselContent>
                {residentialImages.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={image}
                      alt="Residential project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div
          id="multi-family"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Multi-Family Residential Buildings
            </h2>
            <p className="text-muted-foreground mb-6">
              From duplexes to wood-framed apartment buildings,{" "}
              <span className="text-ibuild-red">iBUILD</span> excels in multi-unit residential projects. Our
              comprehensive approach covers everything from blocks and units to
              common areas, amenities, and complex reporting. What makes{" "}
              <span className="text-ibuild-red">iBUILD</span> stand out?
            </p>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Project Proforma Forecasting Module
            </h3>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> stands out with a robust project proforma forecasting
              module offering a Project Proforma Forecasting Module. This tool
              not only estimates construction costs and durations but also
              accelerates the progress of securing major project financing
              through foundation offerings.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold mb-2">Foundation Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basement</li>
                  <li>Slab-On-Grade</li>
                  <li>Concrete Pile Columns</li>
                  <li>Heated Underground Parkade</li>
                  <li>Ground Level Parkade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Parking Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attached Garage</li>
                  <li>Detached Garage</li>
                  <li>Carport</li>
                  <li>Grade Level Parking Stalls / Pads</li>
                  <li>
                    Separate Standalone Ground Level Multi-Level Parkade
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setMultiFamilyApi}
              className="w-full"
            >
              <CarouselContent>
                {multiFamilyImages.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={image}
                      alt="Multi-family project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div
          id="land-development"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Land Development
            </h2>
            <p className="text-muted-foreground mb-6">
              Whether it's developing a tract or section of land,{" "}
              <span className="text-ibuild-red">iBUILD</span> empowers developers to break the land into parcels or
              phases. Specify the number of lots in designated zoning areas to
              create vibrant communities.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              <span className="text-ibuild-red">iBUILD</span>'s Comprehensive Residential Land Development Sector
              Components
            </h3>
            <p className="text-muted-foreground mb-6">
              This comprehensive solution tracks land inventory and sales,
              records lot conditions, and tracks development costs.{" "}
              <span className="text-ibuild-red">iBUILD</span> stores and retrieves extensive and in-depth information
              and provides a solid accounting integration.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Land Acquisition Costs: Strategically manage land and land
                acquisition expenses.
              </li>
              <li>
                Architects &amp; Consultants: Collaborate seamlessly with design
                professionals.
              </li>
              <li>
                Engineers: Engage expert engineers for technical
                recommendations.
              </li>
              <li>Permits &amp; Fees: Track all necessary permits and fees.</li>
              <li>
                New Home Warranty &amp; Insurance Fees: Safeguard your project
                with proper coverage.
              </li>
              <li>
                Condominium Plan Corresponding Costs: Address
                condominium-specific expenses.
              </li>
              <li>
                Land Development Inspection Fees: Appropriately manage
                inspections.
              </li>
              <li>
                Management, Legal, Financing Fees: Secure financing and manage
                credit effectively.
              </li>
              <li>
                Municipal, School, and Recreational Servicing Costs: Understand
                required infrastructure requirements.
              </li>
              <li>
                Site Preparation &amp; Temp Office Costs: Prepare the site
                efficiently.
              </li>
              <li>Site Landscaping Costs: Enhance aesthetics.</li>
              <li>
                <span className="text-ibuild-red">iBUILD</span> leaves no stone unturned, safeguarding successful
                project outcomes.
              </li>
            </ul>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setLandDevApi}
              className="w-full"
            >
              <CarouselContent>
                {landDevelopmentImages.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={image}
                      alt="Land development project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
