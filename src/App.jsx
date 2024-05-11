import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IniciarSesion from "./Modulos/Seguridad/Iniciar Sesion";
import CrearUsuario from "./Modulos/Seguridad/CrearUsuario";
import RestablecerContraseña from "./Modulos/Seguridad/RestablecerContraseña";
import CambiarContraseña from "./Modulos/Seguridad/CambiarContraseña";
import Home from "./Modulos/Ventas/Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<IniciarSesion />} path="/login/" />
          <Route element={<CrearUsuario />} path="/login/create-user" />
          <Route
            element={<RestablecerContraseña />}
            path="/login/restablecer-contraseña"
          />
          <Route
            element={<CambiarContraseña />}
            path="/login/cambiar-contraseña"
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
