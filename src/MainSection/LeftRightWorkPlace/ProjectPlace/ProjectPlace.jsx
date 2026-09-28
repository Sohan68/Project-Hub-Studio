import { useState } from "react";
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
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "ALL",
    status: "ALL",
    sort: "default",
    isFavorite: false,
  });
  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };
  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      category: "ALL",
      status: "ALL",
      sort: "default",
      isFavorite: false,
    });
  };
  let filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase()) ||
      project.displayUrl
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
    const matchesCategory =
      filters.category === "ALL" || project.category === filters.category;
    const matchesStatus =
      filters.status === "ALL" || project.status === filters.status;
    const matchesFavorite = !filters.isFavorite || project.isFavorite;

    return matchesSearch && matchesCategory && matchesStatus && matchesFavorite;
  });
  if (filters.sort !== "default") {
    filteredProjects.sort((a, b) => {
      switch (filters.sort) {
        case "name-asc":
          return a.projectName.localeCompare(b.projectName);
        case "name-desc":
          return b.projectName.localeCompare(a.projectName);
        case "budget-asc":
          return a.budget * a.quantity - b.budget * b.quantity;
        case "budget-desc":
          return b.budget * b.quantity - a.budget * a.quantity;
        default:
          return 0;
      }
    });
  }
  return (
    <>
      <section className="lg:col-span-8 w-full space-y-4 sm:space-y-6">
        <ControlSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={resetFilters}
          displayedCount={filteredProjects.length}
          totalCount={projects.length}
        />
        {filteredProjects.length > 0 ? (
          <ProjectCard
            projects={filteredProjects}
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
