import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import {useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Formulario() {
   
  const [email, setEmail] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {metodoRegisterapi} = useContext(GlobalContext)

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    metodoRegisterapi(email, password)

    if (email === "") {
      alert("El Campo Email no puede estar Vacio !");
      setError(true);
      return;
    }
    if (repPassword === "") {
      alert("El Campo Repetir Email no puede estar Vacio !");
      setError(true);
      return;
    }
    if (password === "") {
      alert("El Campo Password no puede estar Vacio !");
      setError(true);
      return;
    }

    {
      /* validacion largo input*/
    }

    if (password.length < 6) {
      alert("La password Ingresada debe tener por lo menos 6 Caracteres");
      setError(true);
      return;
    }

    if (repPassword.length < 6) {
      alert("La password re Ingresada debe tener por lo menos 6 Caracteres");
      setError(true);
      return;
    }

    if (password != repPassword) {
      alert(
        "La password y la Ingresada nuevamente no concuerdan, favor revisar"
      );
      setError(true);
      return;
    }

    setError(false);
    setRepPassword("");
    setPassword("");
    setEmail("");
    console.log("Se han enviado los Datos en forma Exitosa !!");
    return;
  };

  const handleChange = (evento, elemento, setelemeto) => {
    setelemeto(evento.target.value);
    console.log(elemento);
  };

  return (
    <div className="Formulario_Datos">
      <Form
        className="formato"
        action="submit"
        onSubmit={(evento) => handleSubmit(evento)}
      >
        <Form.Group className="mb-3" controlId="formmail">
          <h3>Ingrese su email</h3>
          <input
            className="text-muted w-2"
            id="Email"
            value={email}
            type="email"
            placeholder="nombre@gmail.com"
            onChange={(evento) => handleChange(evento, email, setEmail)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formpassword">
          <h3>Ingrese su Contraseña</h3>
          <input
            className="text-muted"
            id="Password"
            value={password}
            type="password"
            placeholder="Ingrese Contraseña"
            onChange={(evento) => handleChange(evento, password, setPassword)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formreppassword">
          <h3>Confirme su Contraseña</h3>
          <input
            className="text-muted"
            id="RepPassword"
            value={repPassword}
            type="password"
            placeholder="Ingrese Contraseña"
            onChange={(evento) =>
              handleChange(evento, repPassword, setRepPassword)
            }
          />
        </Form.Group>

        <Button className="btn btn-primary mt-3" type="submit">
          Enviar
        </Button>

        {Error === false ? (
          <p className="text-primary">Se enviado los datos exitosa mente !!</p>
        ) : null}
      </Form>
    </div>
  );
}
