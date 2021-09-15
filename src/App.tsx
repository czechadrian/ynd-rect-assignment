import React from 'react';
import 'antd/dist/antd.css';

import Users from './app/screens/Users';
import { MainWrapper } from './styled';

const App: React.FC = () => (
  <MainWrapper>
    <Users />
  </MainWrapper>
);

export default App;
