import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { TUsers } from '../../api-wrapper/types';
import { getUserRepos } from '../actions/userRepos';
import { getUserRepositoriesSelector } from '../../selectors';

const { Panel } = Collapse;

type TUserList = {
  users: TUsers;
};

const UserList: React.FC<TUserList> = (props) => {
  const { users } = props;
  const dispatch = useDispatch();
  const repositories = useSelector(getUserRepositoriesSelector);

  return (
    <CollapseStyled accordion onChange={(user) => dispatch(getUserRepos(user))}>
      {users.map((user) => (
        <PanelStyled header={user.login} key={user.login}>
          <div>
            <></>
            <p></p>
          </div>
        </PanelStyled>
      ))}
    </CollapseStyled>
  );
};

const PanelStyled = styled(Panel)``;

const CollapseStyled = styled(Collapse)`
  margin-top: 1rem;
  width: 100%;
`;

export default UserList;
