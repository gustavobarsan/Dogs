import React from "react";
import { Link } from "react-router-dom";
import URL from "../../api/URL";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="criar">Cadastro</Link>
      <Link to="perdeu">Esqueci a Senha</Link>
    </section>
  );
};
