import React from "react";
import "./FondoPrincipal.scss";
export default function FondoPrincipal({ children }) {
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-form_contenido">{children}</div>
        <div className="login-form_imagen"></div>
      </div>
    </div>
  );
}
