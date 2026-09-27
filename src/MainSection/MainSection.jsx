import { useState } from "react";
import CreateProject from "./LeftRightWorkPlace/CreateProject/CreateProject";
import ProjectPlace from "./LeftRightWorkPlace/ProjectPlace/ProjectPlace";
import ProjectSummury from "./ProjectSummury/ProjectSummury";

const MainSection = () => {
  const initialProject = [
    {
      id: 1,
      projectName: "E-Commerce Platform Redesign",
      category: "Web Development",
      status: "Completed",
      isFavorite: true,
      clientName: "Apex Retailers Ltd",
      projectUrl: "https://apexretail.shop",
      displayUrl: "apexretail.shop",
      quantity: 3,
      budget: 12500,
    },
    {
      id: 2,
      projectName: "AI Workflow Automation Bot",
      category: "AI & ML",
      status: "Pending",
      isFavorite: false,
      clientName: "NovaGen AI Labs",
      projectUrl: "https://novagen-flow.io",
      displayUrl: "novagen-flow.io",
      quantity: 1,
      budget: 18000,
    },
    {
      id: 3,
      projectName: "Fintech Mobile Banking App",
      category: "Mobile App",
      status: "Pending",
      isFavorite: true,
      clientName: "Zenith Capital",
      projectUrl: "https://zenithpay.finance",
      displayUrl: "zenithpay.finance",
      quantity: 2,
      budget: 24000,
    },
    {
      id: 4,
      projectName: "Cloud Infrastructure Migration",
      category: "Cloud / DevOps",
      status: "Completed",
      isFavorite: false,
      clientName: "HyperScale Networks",
      projectUrl: "https://hyperscale.cloud",
      displayUrl: "hyperscale.cloud",
      quantity: 1,
      budget: 15000,
    },
  ];
  const [projects, setProjects] = useState(initialProject);
  const [projectToUpdate, setProjectToUpdate] = useState(null);

  const handleAddProject = (newProject, isAdd) => {
    if (isAdd) {
      setProjects([newProject, ...projects]);
    } else {
      setProjects(
        projects.map((projct) => {
          if (projct.id === newProject.id) {
            return newProject;
          }
          return projct;
        }),
      );
    }
    setProjectToUpdate(null);
  };
  const handleEditProject = (prjct) => {
    // console.log(prjct);
    setProjectToUpdate(prjct);
  };
  const handleFavorite = (ProjectId) => {
    const ProjectIndex = projects.findIndex(
      (Project) => Project.id === ProjectId,
    );
    const newProjects = [...projects];
    newProjects[ProjectIndex].isFavorite =
      !newProjects[ProjectIndex].isFavorite;
    setProjects(newProjects);
  };
  const handleDelete = (projectId) => {
    const noDltProject = projects.filter((prjctd) => prjctd.id !== projectId);
    setProjects(noDltProject);
  };
  const handleAddQuantity = (projectId) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        return { ...project, quantity: project.quantity + 1 };
      }
      return project;
    });
    setProjects(updatedProjects);
  };
  const handleSubQuantity = (projectId) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId && project.quantity > 1) {
        return { ...project, quantity: project.quantity - 1 };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <ProjectSummury projects={projects} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <CreateProject
            key={projectToUpdate ? projectToUpdate.id : " "}
            onAddProject={handleAddProject}
            projectToUpdate={projectToUpdate}
            onCancelEdit={() => setProjectToUpdate(null)}
          />

          <ProjectPlace
            projects={projects}
            onEditProject={handleEditProject}
            onFavorite={handleFavorite}
            onDelete={handleDelete}
            onAddQuantity={handleAddQuantity}
            onSubQuantity={handleSubQuantity}
          />
        </div>
      </main>
    </>
  );
};

export default MainSection;
