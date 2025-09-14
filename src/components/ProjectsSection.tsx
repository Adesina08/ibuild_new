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
import projectImg4 from "@/assets/projects/project-4.png";
import projectImg5 from "@/assets/projects/project-5.png";
import projectImg6 from "@/assets/projects/project-6.png";
import projectImg7 from "@/assets/projects/project-7.png";
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
    projectImg9,
    projectImg10,
    projectImg11,
    projectImg12,
    projectImg13
  ];
  const multiUnitImages = [
    projectImg4, 
    projectImg5,
    projectImg6,
    projectImg7,
    projectImg8
  ];
  const landImages = [projectImg1, projectImg2, projectImg3];

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
          <h3 className="text-4xl font-bold mb-6 text-foreground">
            Building Vibrant Communities, One Parcel at a Time
          </h3>
            <p className="text-muted-foreground">
            When it comes to Land Acquisition and Land Development, <span className="text-ibuild-red">iBUILD</span> gives developers the tools to transform tracts into thriving communities. 
            Break down land into parcels or phases & design vibrant neighborhoods with ease.

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
              overlooked:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                <strong>Land Acquisition Costs:</strong> Strategically assess and manage land acquisition expenses.
              </li>
              <li>
                <strong>Architects &amp; Consultants:</strong> Collaborate seamlessly with design professionals.
              </li>
              <li>
                <strong>Engineers:</strong> Engage expert engineers for project compliance planning.
              </li>
              <li><strong>Permits &amp; Fees:</strong> Navigate regulatory requirements and associated costs.
              </li>
              <li>
                <strong>New Home Warranties &amp; Insurance Fees:</strong> SSafeguard your project with proper coverage.
              </li>
              <li>
                <strong>Condominium Plan Corporation Costs:</strong> Address
                condominium-specific expenses.
              </li>
              <li>
                <strong>Marketing &amp; Sales Costs:</strong> Promote your project effectively.
              </li>
              <li>
                <strong>Management, Legal, Financing Fees:</strong>Ensure smooth operations and compliance.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Land Development
            </h3>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span>&apos;s Comprehensive Residential Land Development Module:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                <strong>Site Land Development & Servicing Costs:</strong> Optimize infrastructure investments.
              </li>
              <li>
                <strong>Site Preparation & Temp Office Costs:</strong> Prepare the site efficiently.
              </li>
              <li>
                <strong>Site Landscaping Costs:</strong> Enhance aesthetics and functionality.
              </li>
            </ul>
            <h4 className="text-muted-foreground mt-6">
              With <span className="text-ibuild-red">iBUILD</span>, nothing is accidentally missed, every aspect is
              meticulously managed to deliver effective infrastructure.
            </h4>
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
            <p className="text-muted-foreground">
                Driving Success in Multi-Family Residential Projects: From Duplexes, Townhouses to 12 story wood-framed Apartment Buildings, 
              <span className="text-ibuild-red">iBUILD</span> is your trusted partner in delivering complex multi-unit residential developments.
            </p>
            <p className="text-muted-foreground mb-6">
              With robust tools and expert guidance,{' '}
              <span className="text-ibuild-red">iBUILD</span> streamlines your entire process, ensuring efficiency and effectiveness. 
            </p>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> eliminates inefficiencies in managing complex projects saving time and energy, increasing productivity, and reducing costs.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Digital-Driven Project Proforma Forecasting Module:</strong> <span className="text-ibuild-red">iBUILD</span> is the only SaaS construction and business management software provider offering this groundbreaking technology/tool.
            </p>
            <p className="text-muted-foreground mb-6">
              <span className="text-ibuild-red">iBUILD</span> elevates professionalism and secures financing for your small to large projects faster than ever before.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Total Project Flexibility:</strong> Customize every aspect of your project with
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold mb-2"><strong>Foundation Options:</strong></h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basement</li>
                  <li>Slab-On-Grade</li>
                  <li>Crawl Space / Pile Columns</li>
                  <li>Heated Underground Parkade</li>
                  <li>Heated Grade-Level Parkade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2"><strong>Parking Options:</strong></h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attached Garage</li>
                  <li>
                    Detached Garage (With or Without Secondary Suite)
                  </li>
                  <li>Carport</li>
                  <li>Grade Level Parking Stalls / Pads</li>
                  <li>
                    Separate Standalone Multi-Level Concrete Parkade
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              <strong>A Comprehensive Approach for Multi-Unit Success:</strong> {' '}
              <span className="text-ibuild-red">iBUILD</span> covers every detail
              from Blocks and Units to Common Areas, Common Buildings, Landscaping, and more,
              ensuring no multi-family element or component is missed or overlooked.
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

