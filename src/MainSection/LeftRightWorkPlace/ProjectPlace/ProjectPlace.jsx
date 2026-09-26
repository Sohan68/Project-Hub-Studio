import ControlSection from "./ControlSection";
import Project from "./Project";

const ProjectPlace = ({ projects }) => {
  return (
    <>
      <section class="lg:col-span-8 w-full space-y-4 sm:space-y-6">
        <ControlSection />
        <Project projects={projects} />
      </section>
    </>
  );
};

export default ProjectPlace;
