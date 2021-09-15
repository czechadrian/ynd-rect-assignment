import styled from 'styled-components';

export const MainWrapper = styled.main`
  background-color: grey;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

  @media (min-height: 800px) {
    height: 100vh;
  }
  @media (max-height: 800px) {
    height: 750px;
  }
`;
