import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import projectImg1 from "@/assets/projects/project-1.png";
import projectImg2 from "@/assets/projects/project-2.png";
import projectImg3 from "@/assets/projects/project-3.png";
import projectImg5 from "@/assets/projects/project-5.png";
import projectImg6 from "@/assets/projects/project-6.png";
import projectImg8 from "@/assets/projects/project-8.png";
import projectImg9 from "@/assets/projects/project-9.png";
import projectImg10 from "@/assets/projects/project-10.png";
import projectImg11 from "@/assets/projects/project-11.png";
import projectImg12 from "@/assets/projects/project-12.png";
import projectImg13 from "@/assets/projects/project-13.png";

import { cn } from "@/lib/utils";

function useAutoplay(api?: CarouselApi) {
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 2000);
    return () => clearInterval(interval);
  }, [api]);
}

const ProjectsSection = () => {
  const singleFamilyImages = [
    projectImg8,
    projectImg1,
    projectImg3,
    projectImg9,
    projectImg10,
    projectImg11,
    projectImg12,
  ];
  const multiUnitImages = [projectImg6, projectImg5];
  const landImages = [projectImg12, projectImg11];

  const [singleFamilyApi, setSingleFamilyApi] = useState<CarouselApi>();
  const [multiUnitApi, setMultiUnitApi] = useState<CarouselApi>();
  const [landApi, setLandApi] = useState<CarouselApi>();

  useAutoplay(landApi);
  useAutoplay(multiUnitApi);
  useAutoplay(singleFamilyApi);

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-screen-2xl space-y-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold">
            <div className="w-8 h-px bg-ibuild-red"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-ibuild-red">iBUILD Residential Products</span>
            </h2>
          </div>
          <p className="text-muted-foreground">
            Building Vibrant Communities, One Parcel at a Time
          </p>
        </div>

        <div
          id="land-acquisition"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Land Acquisition &amp; Administration
            </h2>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span>&apos;s Land Acquisition &amp; Administration module provides an
              in-depth product for every critical area to ensure nothing is
              overlooked.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Land Acquisition Costs: Strategically assess and design land
                development plans.
              </li>
              <li>
                Architects &amp; Consultants: Collaborate seamlessly with design
                professionals.
              </li>
              <li>
                Engineers: Engage experienced professionals with comprehensive
                planning.
              </li>
              <li>Permits &amp; Fees: Navigate regulatory procedures with ease.</li>
              <li>
                Warranties &amp; Insurance Fees: Safeguard your project against
                uncertainties.
              </li>
              <li>
                Condominium Plan Corporation Costs: Address
                condominium-specific expenses.
              </li>
              <li>
                Land Development Inspection Fees: Appropriately manage inspection
                costs.
              </li>
              <li>
                Management, Legal, Financing Fees: Ensure detailed financial
                tracking.
              </li>
              <li>
                Municipal, School, and Recreational Servicing Costs: Optimize
                infrastructure investments.
              </li>
              <li>
                Site Preparation &amp; Temp Office Costs: Optimize site preparation
                efficiency.
              </li>
              <li>
                Site Development and Compliance: Record milestones and compliance
                progress to avoid delays.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Land Development
            </h3>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span>&apos;s Comprehensive Residential Land Development Module includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Serving Lots</li>
              <li>
                Municipal &amp; Recreational Servicing Costs: Optimize infrastructure
                investments.
              </li>
              <li>
                Construction &amp; Site Development Costs: Build with precision.
              </li>
              <li>
                Environmental Considerations: Stay compliant and sustainable.
              </li>
              <li>Site Landscaping Costs: Enhance curb appeal.</li>
            </ul>
            <p className="text-muted-foreground mt-6">
              With <span className="text-ibuild-red">iBUILD</span>, nothing is accidentally missed, every aspect is
              meticulously managed to deliver effective infrastructure.
            </p>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setLandApi}
              className="w-full"
            >
              <CarouselContent>
                {landImages.map((image, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt="Land project"
                      className={cn(
                        "w-full h-auto object-contain rounded-lg",
                        idx === 1 && "max-h-96 w-auto"
                      )}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div
          id="multi-unit"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Multi-Unit Residential Buildings (MURBs)
            </h2>
            <p className="text-muted-foreground mb-6">
              Driving success in multi-family residential projects: from duplexes,
              townhouses to wood-framed apartment buildings,{' '}
              <span className="text-ibuild-red">iBUILD</span> streamlines multi-unit
              residential developments.
            </p>
            <p className="text-muted-foreground mb-6">
              With robust tools and expert guidance,{' '}
              <span className="text-ibuild-red">iBUILD</span> covers every phase of
              development, from design and construction to cost projections.
            </p>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> eliminates
              inefficiencies in managing complex projects, saving time and energy,
              increasing productivity, and reducing costs.
            </p>
            <h5 className="text-2xl font-bold mb-4 text-foreground">
              Digital-Driven Project Proforma Forecasting Module
            </h5>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> is the only SaaS
              construction and business management software offering this
              groundbreaking technology for large projects.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Total Project Flexibility
            </h3>
            <p className="text-muted-foreground mb-6">
              Customize every aspect of your project with:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold mb-2">Foundation Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basement</li>
                  <li>Slab-On-Grade</li>
                  <li>Crawl Space / Pile Columns</li>
                  <li>Heated Underground Parkade</li>
                  <li>Grade Level Parkade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Parking Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attached Garage</li>
                  <li>
                    Detached Garage (With or Without Secondary Suite)
                  </li>
                  <li>Carport</li>
                  <li>Level Parking Stalls / Pads</li>
                  <li>
                    Separate Standalone Multi-Level Concrete Parkade
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              A comprehensive approach for multi-unit success:{' '}
              <span className="text-ibuild-red">iBUILD</span> covers every detail
              from units to common areas, common buildings, landscapes, and more.
            </p>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setMultiUnitApi}
              className="w-full"
            >
              <CarouselContent>
                {multiUnitImages.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={image}
                      alt="Multi-unit project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div
          id="single-family"
          className="grid gap-10 md:grid-cols-2 md:items-center scroll-mt-24"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Single-Family Residential Builders
            </h2>
            <p className="text-muted-foreground mb-6">
              At <span className="text-ibuild-red">iBUILD</span>, we understand that
              homes are more than just structures; they are the foundation for
              cherished memories. <span className="text-ibuild-red">iBUILD</span>&apos;s
              cloud software solutions empower builders to bring their client&apos;s
              visions to life, combining innovation with flexibility.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              What Sets <span className="text-ibuild-red">iBUILD</span> Apart?
            </h3>
            <p className="text-muted-foreground mb-6">
              Total Project Flexibility:{' '}
              <span className="text-ibuild-red">iBUILD</span> gives builders complete
              freedom to customize single-family residential projects. Builders can
              choose from these client needs:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold mb-2"><strong>Foundation Options</strong></h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basement</li>
                  <li>Slab-On-Grade</li>
                  <li>Crawl Space / Pile Columns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2"><strong>Parking Solutions</strong></h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attached Garage</li>
                  <li>
                    Detached Garage (With or Without A Secondary Suite)
                  </li>
                  <li>Carport</li>
                  <li>Garden Patio</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 mb-6">
              <strong>Basement Development Option:</strong> Enhance projects further with our
              specialized basement development option capabilities.
            </p>
            <p className="text-muted-foreground">
              <strong>Streamline your workflow, elevate your results:</strong> say goodbye to
              inefficiencies.<br /> With <span className="text-ibuild-red">iBUILD</span>, no
              vision needs to be delayed—track and organize single-family projects
              just a click away.
            </p>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              setApi={setSingleFamilyApi}
              className="w-full"
            >
              <CarouselContent>
                {singleFamilyImages.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={image}
                      alt="Single-family project"
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

