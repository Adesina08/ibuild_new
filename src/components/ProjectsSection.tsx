import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import projectImg1 from "@/assets/projects/project-1.webp";
import projectImg3 from "@/assets/projects/project-3.webp";
import projectImg4 from "@/assets/projects/project-4.webp";
import projectImg5 from "@/assets/projects/project-5.webp";
import projectImg6 from "@/assets/projects/project-6.webp";
import projectImg7 from "@/assets/projects/project-7.webp";
import projectImg8 from "@/assets/projects/project-8.webp";
import projectImg9 from "@/assets/projects/project-9.webp";
import projectImg10 from "@/assets/projects/project-10.webp";
import projectImg11 from "@/assets/projects/project-11.webp";
import projectImg12 from "@/assets/projects/project-12.webp";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Multi-Family");

  const filters = ["Multi-Family", "Residential", "Communities"];

  const projects = [
    {
      name: "Arbour Lake Project",
      category: "Multi-Family",
      image: projectImg1,
    },
    {
      name: "Crimson Ridge Project", 
      category: "Multi-Family",
      image: projectImg3,
    },
    {
      name: "Martindale Project",
      category: "Communities",
      image: projectImg4,
    },
    {
      name: "Riverstone West Project",
      category: "Communities", 
      image: projectImg5,
    },
    {
      name: "Sol Verda Chestermere",
      category: "Residential",
      image: projectImg6,
    },
    {
      name: "Stanley Project",
      category: "Residential",
      image: projectImg8,
    },
    {
      name: "Zen Abrio Project",
      category: "Multi-Family",
      image: projectImg9,
    },
    {
      name: "Zen Chinook Gate",
      category: "Multi-Family",
      image: projectImg10,
    },
    {
      name: "Zen Livingston",
      category: "Multi-Family",
      image: projectImg11,
    },
    {
      name: "Zen Greystone",
      category: "Multi-Family",
      image: projectImg12,
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.category === activeFilter || 
    (activeFilter === "Communities" && project.category === "Communities")
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold mb-4">
            <div className="w-8 h-px bg-ibuild-red"></div>
            Our Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clients Projects<span className="text-ibuild-red">Recently Completed With iBUILD</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "ibuild-primary" : "ibuild-ghost"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-large transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-ibuild-red/10 text-ibuild-red rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-ibuild-red transition-colors">
                  {project.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;