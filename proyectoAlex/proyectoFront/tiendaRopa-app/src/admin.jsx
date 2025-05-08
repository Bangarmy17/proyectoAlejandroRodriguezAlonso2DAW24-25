import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PanelAdmin } from "./components/Adminstrador/PanelAdmin";

createRoot(document.getElementById("admin")).render(
  <StrictMode>
    <PanelAdmin />
  </StrictMode>
);
