import styled from "styled-components";

export default styled.div`
  display: flex;

  flex-flow: column nowrap;
  align-items: center;

  min-width: 210px;
  max-width: 1024px;

  background-color: #fbf7f0;
  border-radius: 8px;
  box-shadow: 3px 10px 27px -8px rgba(0, 0, 0, 0.9);
  padding: 40px;
  margin: 0 80px;

  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    margin: 32px 15px;
  }
`;
