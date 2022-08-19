import React from "react";
import { Link } from "react-router-dom";
import URL from "../../api/URL";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import useForm from "../../Hooks/useForm";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
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
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="criar">Cadastro</Link>
      <Link to="perdeu">Esqueci a Senha</Link>
    </section>
  );
};
