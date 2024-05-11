import React from "react";
import "./FormRestablecer.scss";
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
  mail: z.string().min(8, {
    message: "8 Dígitos",
  }),
});

export default function FormRestablecer() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mail: "",
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
              <h1>Restablecer Contraseña</h1>
              <h2>PIZZALANDIA</h2>
            </div>
          </div>
          <div className="login-sesion_inputs">
            <Formulario
              form={form}
              nameLabel="Correo Electrónico:"
              parametros="mail"
            />
          </div>
          <div className="login-sesion_buton">
            <Button className="login-sesion_buton-crear" type="submit">
              Enviar
            </Button>
          </div>
          <div className="login-sesion_crear">
            <Link to="http://localhost:5173/login">
              <Button type="button">Volver</Button>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
