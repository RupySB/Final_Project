import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function header() {
  return (
    <Title>
      <Link to="/homepage">Only Finance</Link>
    </Title>
  );
}
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  margin-top: 25px;
  padding: 25px;
`;
