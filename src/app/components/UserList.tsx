import React from 'react';
import {  Empty, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { StarFilled } from '@ant-design/icons';
import _ from 'lodash';

import { TUsers } from '../../api-wrapper/types';
import { getUserRepos } from '../actions/userRepos';
import {
  getUserReposFetchingStatusSelector,
  getUserRepositoriesSelector
} from '../../selectors';
import { TFetchingStatus } from '../helpers';
import {
  CollapseStyled, DividerStyled,
  HeaderStyled, NoDescriptionStyled,
  PanelStyled,
  ReposWrapper,
  RepoWrapper,
  SpinWrapper,
  StarsCount,
  StarsWrapper
} from './styled';

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

  const displayDescription = (description: string) =>
    _.isEmpty(description) ? (
      <NoDescriptionStyled>no description</NoDescriptionStyled>
    ) : (
      <p>{description}</p>
    );

  return (
    <CollapseStyled accordion onChange={(user) => dispatch(getUserRepos(user))}>
      {users.map((user) => (
        <PanelStyled header={user.login} key={user.login}>
          <ReposWrapper>
            {_.isEqual(userReposFetchingStatus, TFetchingStatus.Success) &&
            repositories.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              repositories.map(
                ({ name, stargazers_count, description }, index) => (
                  <RepoWrapper>
                    <HeaderStyled>
                      <p>{name}</p>
                      <StarsWrapper>
                        <StarsCount>{stargazers_count}</StarsCount>
                        <StarFilled />
                      </StarsWrapper>
                    </HeaderStyled>
                    {displayDescription(description)}
                    {_.isEqual(index, repositories.length - 1) && <DividerStyled />}
                  </RepoWrapper>
                )
              )
            )}
            {_.isEqual(userReposFetchingStatus, TFetchingStatus.Initial) && (
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


export default UserList;
