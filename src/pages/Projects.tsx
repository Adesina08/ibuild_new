import AppLayout from "@/components/layout/AppLayout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Projects() {
  return (
    <AppLayout>
      <ProjectsSection />
      <div className="container max-w-screen-2xl py-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("open-demo-modal"));
          }}
          className="block text-center text-lg sm:text-xl font-semibold text-ibuild-red hover:underline"
        >
          Learn More About Our Solutions - Schedule a Free Demo Today
        </a>
      </div>
    </AppLayout>
  );
}
