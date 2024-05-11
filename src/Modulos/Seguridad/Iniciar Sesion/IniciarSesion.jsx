import React from "react";
import FormLogin from "./components/FormLogin";
import FondoPrincipal from "./components/FondoPrincipal";

export default function IniciarSesion() {
  return (
    <>
      <FondoPrincipal>
        <FormLogin />
      </FondoPrincipal>
    </>
  );
}
