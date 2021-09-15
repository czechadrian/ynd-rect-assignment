import React, { useEffect } from 'react';
import { Empty, notification, Spin } from 'antd';
import _ from 'lodash';
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
import { SpinWrapper } from '../components/styled';

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
    if (_.isEqual(usersFetchingStatus, TFetchingStatus.Failure))
      notification.error({
        message: 'Error',
        description: 'Fetching users data failed.'
      });
    else if (_.isEqual(usersFetchingStatus, TFetchingStatus.Success))
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
      {_.isEqual(usersFetchingStatus, TFetchingStatus.Success) && displayData()}
      {_.isEqual(usersFetchingStatus, TFetchingStatus.Initial) && (
        <SpinWrapper>
          <Spin size="large" />
        </SpinWrapper>
      )}
    </Layout>
  );
};

export default Users;
