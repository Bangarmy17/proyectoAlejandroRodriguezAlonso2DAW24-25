import React from "react";
import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TiendaRopaApp } from "./components/TiendaRopaApp";
import { RegistroPage } from "./components/auth/RegistroPage";
import { NavBar } from "./components/nav/Navbar";
import { LoginPage } from "./components/auth/LoginPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <TiendaRopaApp />
            </>
          }
        />
        <Route path="/usuario/registro" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* ...otras rutas */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
