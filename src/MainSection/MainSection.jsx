import LeftRightAside from "./LeftRightWorkPlace/LeftRightAside";
import ProjectSummury from "./ProjectSummury/ProjectSummury";

const MainSection = () => {
  return (
    <>
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <ProjectSummury />
        <LeftRightAside />
      </main>
    </>
  );
};

export default MainSection;
