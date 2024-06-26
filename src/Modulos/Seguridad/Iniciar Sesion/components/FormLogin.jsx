import React from "react";
import "./FormLogin.scss";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";

const FormSchema = z.object({
  username: z.string().min(8, {
    message: "8 Dígitos",
  }),
  password: z.string().min(8, {
    message: "8 Dígitos",
  }),
});

export default function FormLogin() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="login-sesion">
          <div className="login-sesion_titulo">
            <div className="login-sesion_titulo-uno">
              <h1>INICIAR SESION</h1>
              <h2>¡Bienvenido!</h2>
            </div>
          </div>
          <div className="login-sesion_inputs">
            <Formulario
              form={form}
              nameLabel="Usuario:"
              parametros="username"
            />
            <Formulario
              form={form}
              nameLabel="Contraseña:"
              parametros="password"
              type="password"
            />
            <Link to="http://localhost:5173/login/restablecer-contraseña">
              <Button type="button">¿Olvidaste tu contraseña?</Button>
            </Link>
          </div>
          <div className="login-sesion_buton">
            <Button className="login-sesion_buton-crear" type="submit">
              Enviar
            </Button>
          </div>
          <div className="login-sesion_crear">
            <Link to="http://localhost:5173/login/create-user">
              <Button type="button">¡Registrate!</Button>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
