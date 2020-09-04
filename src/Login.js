import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import privateKey from "./base.js";
import { AuthContext } from "./Auth.js";
import styled from "styled-components";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await privateKey
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Title>Log in</Title>
      <Form onSubmit={handleLogin}>
        <Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Label>
        <Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  justify-content: center;
  text-align: center;
  display: flex;
  border-radius: 5px;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
`;

const Label = styled.label`
  justify-content: center;
  text-align: center;
  display: flex;
  border-radius: 5px;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  margin-top: 25px;
  padding: 25px;
`;

const Button = styled.button`
  justify-content: center;
  width: 75px;
  height: 75px;
  color: lightblue;
  border: solid lightblue;
  border-radius: 5px;
  margin: 1px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
`;

export default withRouter(Login);
