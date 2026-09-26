import ControlSection from "./ControlSection";
import NotFoundSection from "./NotFoundSection";
import Project from "./Project";

const ProjectPlace = ({ projects, onEditProject, onFavorite, onDelete }) => {
  return (
    <>
      <section className="lg:col-span-8 w-full space-y-4 sm:space-y-6">
        <ControlSection />
        {projects.length > 0 ? (
          <Project
            projects={projects}
            onEditProject={onEditProject}
            onFavorite={onFavorite}
            onDelete={onDelete}
          />
        ) : (
          <NotFoundSection />
        )}
      </section>
    </>
  );
};

export default ProjectPlace;
