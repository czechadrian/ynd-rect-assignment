import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import { getUsers } from './app/actions/users';
import { TButtonSize, TButtonTypes, TFetchingStatus } from './app/helpers';
import {
  getUsersFetchingStatusSelector,
  getUsersSelector
} from './app/screens/selectors';
import UserList from './app/components/UserList';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const usersFetchingStatus = useSelector(getUsersFetchingStatusSelector);
  const [search, setSearch] = React.useState('');

  const searchHandler = (search: string) => {
    setSearch(search);
  };

  const displayShowingResultsLabel = () =>
    usersFetchingStatus === TFetchingStatus.Success &&
    "Showing users for '" + search + "'";

  return (
    <MainWrapper>
      <Layout>
        <InputStyled
          size={TButtonSize.LARGE}
          placeholder="Enter username"
          onChange={(val) => searchHandler(val.target.value)}
        />
        <ButtonStyled
          size={TButtonSize.LARGE}
          type={TButtonTypes.PRIMARY}
          onClick={() => dispatch(getUsers(search))}
        >
          Search
        </ButtonStyled>
        <ShowingResultsStyled>
          {displayShowingResultsLabel()}
        </ShowingResultsStyled>
        {usersFetchingStatus === TFetchingStatus.Success && (
          <UserList users={users} />
        )}
      </Layout>
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

const Layout = styled.div`
  width: 480px;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  @media (max-width: 800px) {
    height: 700px;
  }
  @media (min-width: 801px) {
    height: 95%;
  }
`;

const InputStyled = styled(Input)`
  width: 100%;
  background-color: #e8e8e8;
  margin-bottom: 1rem;
  color: #707070;
  :: placeholder {
    color: #707070;
  }
`;

const ButtonStyled = styled(Button)`
  width: 100%;
`;
const ShowingResultsStyled = styled.span`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.25rem;
`;

export default App;
