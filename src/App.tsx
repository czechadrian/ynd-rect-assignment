import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

import Users from './app/screens/Users';

const App: React.FC = () => (
  <MainWrapper>
    <Users />
  </MainWrapper>
);

const MainWrapper = styled.main`
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

export default App;
