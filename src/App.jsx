import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IniciarSesion from "./Modulos/Seguridad/Iniciar Sesion";
import Home from "./Modulos/Ventas/Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<IniciarSesion />} path="/login/" />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
