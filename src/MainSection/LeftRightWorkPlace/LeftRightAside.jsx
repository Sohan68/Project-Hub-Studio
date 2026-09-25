import CreateProject from "./CreateProject/CreateProject";
import ProjectPlace from "./ProjectPlace/ProjectPlace";

const LeftRightAside = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      <CreateProject />
      <ProjectPlace />
    </div>
  );
};

export default LeftRightAside;
