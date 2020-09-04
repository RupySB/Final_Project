import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";

import Homepage from "./Homepage";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Debt from "./Debt";
import Investing from "./Investing";
import Investingtypes from "./Investingtypes";
import Savings from "./Savings";
import Stock from "./Stock";
import TopofPage from "./TopofPage";
import BudgetPlanner from "./BudgetPlanner";
import ExpensePlanner from "./ExpensePlanner";

function App() {
  return (
    <>
      <Main>
        <Globalstyles />
        <Header />
        <AuthProvider>
          <Router>
            <div>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </Router>
          <Router>
            <Switch>
              <Route exact path="/homepage">
                <Homepage />
              </Route>
              <Route exact path="/debt">
                <Debt />
              </Route>
              <Route exact path="/expensePlanner">
                <ExpensePlanner />
              </Route>
              <Route exact path="/savings">
                <Savings />
              </Route>
              <Route exact path="/budgetPlanner">
                <BudgetPlanner />
              </Route>
              <Route exact path="/investing">
                <Investing />
              </Route>
              <Route exact path="/investingtypes">
                <Investingtypes />
              </Route>
              <Route exact path="/stock">
                <Stock />
              </Route>
              <Route exact path="/*">
                <Error404 />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </Main>
      <Error404 />
      <TopofPage />
      <Footer />
    </>
  );
}

const Main = styled.main``;
const Header = styled.header``;
const Error404 = styled.div``;
const Footer = styled.div``;

export default App;
