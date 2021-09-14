import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

import Users from './app/screens/Users';

function App() {
  return (
    <MainWrapper>
      <Users />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  background-color: grey;
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export default App;
