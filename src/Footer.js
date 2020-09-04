import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import privateKey from "./base";

function Footer() {
  return (
    <MainWrapper>
      <MainContent>
        <LinkSection>
          <span>About Us</span>
          <span>Help</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </LinkSection>
        <div style={{ width: "20%" }}>
          <div style={{ margin: "5px 0" }}>
            Your trusted, no nonsense, get out of debt, start saving and
            investing site.
          </div>
          <div>
            <FaFacebookSquare style={{ margin: " 7px" }} />{" "}
            <FaTwitter style={{ margin: " 7px" }} />{" "}
            <FaInstagram style={{ margin: " 7px" }} />
          </div>
        </div>
      </MainContent>
      <Button onClick={() => privateKey.auth().signOut()}>Sign out</Button>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 72px;
  background-color: white;
`;

const MainContent = styled.div`
  display: flex;
  padding: 20px 0;
`;

const LinkSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 25px;
`;
export default Footer;
