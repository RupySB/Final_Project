import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Investing() {
  return (
    <>
      <Header />
      <Title>Basics of Investing</Title>

      <Beginning>What can you Invest in?</Beginning>

      <Grid style={{ margin: "100px 100px" }}>
        <P>Stocks</P>
        <P>Bonds</P>
        <P>Real Estate</P>
        <P>Mutual Funds</P>
        <P>ETFs</P>
        <P>Options</P>
      </Grid>

      <Beginning>Look at our Charts and Stock Screeners</Beginning>
      <Button>
        <Link to="/stock">Stock Charts</Link>
      </Button>
      <Beginning>Live Market Information</Beginning>
      <Button>
        <Link to="/Investingtypes">Nasdaq Quotes</Link>
      </Button>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  padding: 20px;
`;

const Beginning = styled.h3`
  font-size: 30px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow ", sans-serif;
  color: midnightblue;
  padding: 25px;
`;

const P = styled.p`
  font-size: 15px;
  text-align: center;
  justify-content: center;
  color: midnightblue;
  border: lightblue;
  border-radius: lightblue 1px;
  padding: 5px;
`;

const Button = styled.button`
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100px;
  color: lightblue;
  border: solid lightblue;
  border-radius: 5px;
  margin: 1px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(3, auto);
  gap: 2em;
`;
export default Investing;
