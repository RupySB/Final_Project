import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Debt() {
  return (
    <>
      <Header />
      <Title>Debt</Title>
      <Wrapper>
        <Beginning>
          This is the first step towards financial freedom! It can seem scary,
          but you need to be committed and it will work out!
        </Beginning>
        <Subtitle>Bad Debt</Subtitle>
        <Content>
          <P>Credit Cards</P>
          <P>Rent to Own</P>
          <P>Payday Loans</P>
          <P>Tax Refund Loans</P>
        </Content>
        <Subtitle>Good Debt</Subtitle>
        <Content>
          <P>Mortgage</P>
          <P>Student Loands</P>
          <P>Debt Consolidation</P>
        </Content>
        <Beginning>Debt PayOff Methods</Beginning>
        <Subtitle>Debt Snowball</Subtitle>
        <Content>
          The technical definition says to do minimum payments on all debt and
          the smaller debts will get paid off first. This helps build
          consistency and lets you last longer if you have a lot of debt. Start
          off by paying your smallest debts first. This will help prevent
          feeling overwhelmed if you have multiples kinds of debt. Eventually,
          you will only have the bigger chunks to pay off. This method is mainly
          recommended for people who cannot afford to do higher payments on
          their debts. This technique will cause you to pay slightly more than
          the Debt Avalanche method since you are only doing minimum payments.{" "}
        </Content>
        <Subtitle>Debt Avalanche</Subtitle>
        <Content>
          The technical definition of the debt avalanche is to do minimum
          payments on all debt. Then use the remaining cash you have left over
          to pay off the debt with the highest interest. This method allows you
          to pay the least amount in interest to debtees.{" "}
        </Content>
      </Wrapper>
      <Button>
        <Link to="/expensePlanner">Expense Planner</Link>
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
  font-size: 20px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow ", sans-serif;
  color: midnightblue;
  padding: 15px;
`;
const Subtitle = styled.h4`
  font-size: 17.5px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow ", sans-serif;
  color: midnightblue;
  padding: 5px;
`;

const Content = styled.div`
  font-size: 15px;
  text-align: center;
  color: midnightblue;
  border: lightblue;
  border-radius: lightblue 1px;
  padding: 5px;
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
`;

export default Debt;
