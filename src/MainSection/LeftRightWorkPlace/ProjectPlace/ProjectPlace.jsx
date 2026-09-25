import ControlSection from "./ControlSection";
import ProjectCards from "./ProjectCards";

const ProjectPlace = () => {
  return (
    <>
      <section class="lg:col-span-8 w-full space-y-4 sm:space-y-6">
        <ControlSection />
        <ProjectCards />
      </section>
    </>
  );
};

export default ProjectPlace;
