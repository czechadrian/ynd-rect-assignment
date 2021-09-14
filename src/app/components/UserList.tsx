import React from 'react';
import { TUsers } from '../../api-wrapper/types';
import { Collapse } from 'antd';
import _ from 'lodash';
import styled from 'styled-components';

const { Panel } = Collapse;

type TUserList = {
  users: TUsers;
};

const UserList = (props: TUserList) => {
  const { users } = props;

  const firstKey = _.get(users, '[0].id');

  return (
    <CollapseStyled
      defaultActiveKey={firstKey}
      onChange={(e) => console.log(e)}
    >
      {users.map((user) => (
        <Panel header={user.login} key={user.id}>
          <p>{user.login}</p>
        </Panel>
      ))}
    </CollapseStyled>
  );
};

const CollapseStyled = styled(Collapse)`
  margin-top: 1rem;
  width: 100%;
`;

export default UserList;
