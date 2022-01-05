import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAnimation } from "../context/Context";

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  height: 2rem;

  & * {
    font-size: 1.1rem;
    text-decoration: none;
    color: black;
    height: fit-content;
    margin: auto 3rem;
    width: fit-content;
  }
`;

export default function Nav() {
  const animationContext = useAnimation();

  return (
    <NavBar>
      <Link to="/" onClick={animationContext.updateAnimation}>
        Resume
      </Link>
      <Link to="/Project" onClick={animationContext.updateAnimation}>
        Project
      </Link>
    </NavBar>
  );
}
