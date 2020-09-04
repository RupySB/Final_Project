import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Savings() {
  return (
    <>
      <Header />
      <Title>Savings</Title>
      <Wrapper>
        <Beginning>
          This is the second step towards financial independence. While paying
          off your debt, we need to build good money saving habits so we do not
          fall back into the trap of getting in debt.
        </Beginning>
        <Subtitle>Emergency Savings</Subtitle>
        <Content>
          <L>$500</L>
          <P>
            This amount is to help build good savings habits and it can cover
            small unexpected expenses.
          </P>
        </Content>
        <Content>
          <L>Saving for One Month’s Expenses</L>
          <P>
            This amount is a bigger cushion that you can rely on. It should
            cover all expenses that are listed in our Budget Calculator.{" "}
          </P>
        </Content>
        <Content>
          <L>Saving for 3-6 Month’s Expenses</L>
          <P>
            This amount is the end goal. No matter what life throws at you, you
            have a comfortable net that you can rely on. Imagine, you can live
            comfortably for almost up to half a year before having to worry
            about making any lifestyle adjustments!
          </P>
        </Content>
        <Subtitle>Account Types</Subtitle>
        <Content>
          <Grid style={{ margin: "50px 100px" }}>
            <P>Chequing Account</P>
            <P>Savings Account</P>
            <P>TFSA</P>
            <P>RRSP</P>
            <P>RESP</P>
          </Grid>
        </Content>
        <Subtitle>Budget Calculator</Subtitle>
      </Wrapper>
      <Button>
        <Link to="/budgetPlanner">Budget Planner</Link>
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
const Subtitle = styled.h4`
  font-size: 25px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow ", sans-serif;
  color: midnightblue;
  padding: 20px;
`;

const Content = styled.div`
  font-size: 15px;
  text-align: center;
  color: midnightblue;
  border: lightblue;
  border-radius: lightblue 1px;
  padding: 15px;
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

const L = styled.p`
  font-size: 20px;
  text-align: center;
  justify-content: center;
  color: midnightblue;
  border: lightblue;
  border-radius: lightblue 1px;
  padding: 7px;
`;
const Wrapper = styled.div``;

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
  grid: repeat(6, auto) / repeat(5, auto);
  gap: 20px;
`;

export default Savings;
