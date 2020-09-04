import React, { useCallback } from "react";
import { withRouter } from "react-router";
import privateKey from "./base";
import styled from "styled-components";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await privateKey
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Title>Sign up</Title>
      <Form onSubmit={handleSignUp}>
        <Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Label>
        <Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Label>
        <button type="submit">Sign Up</button>
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

export default withRouter(SignUp);
