import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const hoverLink = keyframes`
  0% {
    color: black;
  }
  100% {
    color: #AD91ED;
  }
`;

const FooterContainerDiv = styled.div`
  width: 90%;
  margin: 40px 5% 0;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 20px;
  }

  p:nth-child(even) {
    color: #6936de;
    display: block;
    margin: 60px 0 10px;
  }

  a {
    margin-top: 30px;
    font-size: 1.6rem;

    &:hover {
      animation: ${hoverLink} 0.35s forwards;
    }
  }

  a:last-child {
    margin-bottom: 80px;
  }
`;

const FooterContainer = () => {
  return (
    <FooterContainerDiv>
      <p>Looking to start a project?</p>
      <p>Get in contact.</p>
      <a href="https://github.com/nwthomas">GitHub</a>
      <a href="https://www.linkedin.com/in/nathan-thomas-644b3339/">LinkedIn</a>
      <a href="https://medium.com/@nwthomas">Medium</a>
      <a href="https://twitter.com/_nwthomas">Twitter</a>
      <a href="https://www.instagram.com/nwthomas/">Instagram</a>
      <Link to="/contact">Email</Link>
    </FooterContainerDiv>
  );
};

export default FooterContainer;
