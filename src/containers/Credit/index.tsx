import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(92deg, #16222a, #3a6073);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 12rem;
  align-items: center;
  background-color: white;
  border: 0px solid #000000;
  border-radius: 13px;
  box-shadow: 3px 10px 27px -19px rgba(0, 0, 0, 0.78);
  padding: 2rem;
`;

export default () => {
  return (
    <Container>
      <Card>
        <a href="https://www.iconfinder.com/Flatart">icons</a>
      </Card>
    </Container>
  );
};
