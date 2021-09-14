import { combineReducers } from 'redux';

import { usersReducer as users } from './users';
import { useReposReducer as repositories } from './userRepos';
import { TFetchingStatus } from '../helpers';
import { TGetUserReposResponse, TUsers } from '../../api-wrapper/types';

export interface TRootState {
  users: { users: TUsers; fetchingStatus: TFetchingStatus };
  repositories: {
    repositories: TGetUserReposResponse;
    fetchingStatus: TFetchingStatus;
  };
}

const rootReducer = () =>
  combineReducers<TRootState>({
    users,
    repositories
  });

export default rootReducer;
