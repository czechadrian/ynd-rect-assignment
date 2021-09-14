import React, { useEffect } from 'react';
import { Empty, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { TButtonSize, TButtonTypes, TFetchingStatus } from '../helpers';
import { getUsers } from '../actions/users';
import {
  getUsersFetchingStatusSelector,
  getUsersSelector
} from '../../selectors';
import UserList from '../components/UserList';
import { displayShowingResultsLabel } from '../helpers/utils';
import {
  ButtonStyled,
  InputStyled,
  Layout,
  ShowingResultsStyled
} from './styled';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const usersFetchingStatus = useSelector(getUsersFetchingStatusSelector);
  const [search, setSearch] = React.useState('');

  const searchHandler = (search: string) => {
    setSearch(search);
  };

  const displayData = () =>
    users.length === 0 ? <Empty /> : <UserList users={users} />;

  useEffect(() => {
    if (usersFetchingStatus === TFetchingStatus.Failure)
      notification.error({
        message: 'Error',
        description: 'Fetching users data failed.'
      });
    else if (usersFetchingStatus === TFetchingStatus.Success)
      notification.success({
        message: 'Success',
        description: 'Fetching users data succeeded.'
      });
  }, [usersFetchingStatus]);

  return (
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
        {displayShowingResultsLabel(usersFetchingStatus, search)}
      </ShowingResultsStyled>
      {usersFetchingStatus === TFetchingStatus.Success && displayData()}
    </Layout>
  );
};

export default Users;
