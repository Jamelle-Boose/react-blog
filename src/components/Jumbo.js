import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import styled from "styled-components";

import bearsImage from "../assets/chicago_bears.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${bearsImage}) no-repeat fixed bottom
    background-size: cover
    color: #efefef
    height: 200px
    position: relative
    z-index: -2
  }

  .overlay {
    background-color: #000
    opacity: 0.6
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: -1
  }
`;

export const Jumbo = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>Chicago Bears</h1>
        <p>Kings of the North</p>
      </Container>
    </Jumbotron>
  </Styles>
);
