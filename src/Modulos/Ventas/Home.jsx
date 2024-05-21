import React from "react";
import Inicio from "./components/Inicio";
import Productos from "../Seguridad/Iniciar Sesion/components/Productos";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <Inicio />
      <Productos />
    </div>
  );
}
