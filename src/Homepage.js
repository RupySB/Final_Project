import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import privateKey from "./base";

function Homepage() {
  return (
    <>
      <Header />
      <Main>Begin your Journey to Financial Freedom!</Main>

      <Button>
        <Link to="/debt">Debt</Link>
      </Button>
      <Button>
        <Link to="/savings">Savings</Link>
      </Button>
      <Button>
        <Link to="/investing">Investing</Link>
      </Button>
      <Footer />
    </>
  );
}

const Main = styled.h2`
  text-align: center;
  font-size: 25px;
  color: midnightblue;
  margin: 15px;
`;

const Button = styled.button`
  width: 33%;
  height: 350px;
  color: lightblue;
  border: solid lightblue;
  background-color: aliceblue;
  border-radius: 5px;
  margin: 1px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
`;

export default Homepage;
