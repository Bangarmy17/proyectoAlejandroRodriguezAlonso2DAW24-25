import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TiendaRopaApp } from "./components/TiendaRopaApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TiendaRopaApp />
  </StrictMode>
);
