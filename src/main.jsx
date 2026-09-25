import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectHub from "./ProjectHub";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectHub />
  </StrictMode>,
);
