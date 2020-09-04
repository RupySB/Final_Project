import React from "react";
import styled, { keyframes } from "styled-components";

import { IoIosArrowUp } from "react-icons/io";

export default function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Top onClick={scrollTop}>
      <IoIosArrowUp style={{ fontSize: "2em" }} />
    </Top>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

const Top = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 30px;
  z-index: 1000;
  animation: ${fadeIn} 0.2s;
  transition: opacity 0.3s;
  opacity: 0.3;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  background-color: ghostwhite;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  &:active,
  &:visited,
  &:focus {
    outline: none;
  }
`;
