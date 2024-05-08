import React from "react";
import "./FormLogin.scss";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Formulario from "./Formulario";
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
            <h1 className="login-sesion_titulo-uno">INICIAR SESION</h1>
            <h2 className="login-sesion_titulo-dos">¡BIENVENIDOS! </h2>
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
            />
            <h2>¿Olvisdas tu contraseña?</h2>
          </div>
          <div className="login-sesion_buton">
            <Button type="submit">Enviar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
