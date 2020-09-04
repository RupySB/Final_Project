import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import privateKey from "./base";

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Link to="/homepage">HomePage</Link>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  padding: 100px;
`;

export default Home;
