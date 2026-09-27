import ControlSection from "./ControlSection";
import NotFoundSection from "./NotFoundSection";
import ProjectCard from "./ProjectCard";

const ProjectPlace = ({
  projects,
  onEditProject,
  onFavorite,
  onDelete,
  onAddQuantity,
  onSubQuantity,
}) => {
  return (
    <>
      <section className="lg:col-span-8 w-full space-y-4 sm:space-y-6">
        <ControlSection />
        {projects.length > 0 ? (
          <ProjectCard
            projects={projects}
            onEditProject={onEditProject}
            onFavorite={onFavorite}
            onDelete={onDelete}
            onAddQuantity={onAddQuantity}
            onSubQuantity={onSubQuantity}
          />
        ) : (
          <NotFoundSection />
        )}
      </section>
    </>
  );
};

export default ProjectPlace;
