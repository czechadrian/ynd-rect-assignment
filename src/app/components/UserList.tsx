import React from 'react';
import { Collapse, Empty, Spin } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { StarFilled } from '@ant-design/icons';

import { TUsers } from '../../api-wrapper/types';
import { getUserRepos } from '../actions/userRepos';
import {
  getUserReposFetchingStatusSelector,
  getUserRepositoriesSelector
} from '../../selectors';
import { TFetchingStatus } from '../helpers';

const { Panel } = Collapse;

type TUserList = {
  users: TUsers;
};

const UserList: React.FC<TUserList> = (props) => {
  const { users } = props;
  const dispatch = useDispatch();
  const repositories = useSelector(getUserRepositoriesSelector);
  const userReposFetchingStatus = useSelector(
    getUserReposFetchingStatusSelector
  );

  return (
    <CollapseStyled accordion onChange={(user) => dispatch(getUserRepos(user))}>
      {users.map((user) => (
        <PanelStyled header={user.login} key={user.login}>
          <ReposWrapper>
            {userReposFetchingStatus === TFetchingStatus.Success &&
            repositories.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              repositories.map((repo) => (
                <RepoWrapper>
                  <HeaderStyled>
                    <p>{repo.name}</p>
                    <StarsWrapper>
                      <StarsCount>{repo.stargazers_count}</StarsCount>
                      <StarFilled />
                    </StarsWrapper>
                  </HeaderStyled>
                  <p>{repo.description}</p>
                </RepoWrapper>
              ))
            )}
            {userReposFetchingStatus === TFetchingStatus.Initial && (
              <SpinWrapper>
                <Spin size="large" />
              </SpinWrapper>
            )}
          </ReposWrapper>
        </PanelStyled>
      ))}
    </CollapseStyled>
  );
};

const SpinWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StarsCount = styled.span`
  padding-right: 0.25rem;
`;

const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ReposWrapper = styled.div`
  height: 13rem;
  overflow: auto;
`;

const RepoWrapper = styled.div`
  background-color: e8e8e8;
  font-size: 0.75rem;
`;

const HeaderStyled = styled.div`
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PanelStyled = styled(Panel)``;

const CollapseStyled = styled(Collapse)`
  margin-top: 1rem;
  width: 100%;
`;

export default UserList;
