import React from "react";
import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TiendaRopaApp } from "./components/TiendaRopaApp";
import { RegistroPage } from "./components/auth/RegistroPage";
import { LoginPage } from "./components/auth/LoginPage";
import { Carrito } from "./components/Carrito/Carrito";
import { PanelAdmin } from "./components/Adminstrador/PanelAdmin";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TiendaRopaApp />
            </>
          }
        />
        <Route path="/admin" element={<PanelAdmin />} />
        <Route path="/usuario/registro" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
