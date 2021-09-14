import { createSelector } from 'reselect';

import { TRootState } from './app/reducers';

const _getUsers = (state: TRootState) => state.users;
const _getRepositories = (state: TRootState) => state.repositories;

export const getUsersSelector = createSelector(
  _getUsers,
  (users) => users.users
);

export const getUsersFetchingStatusSelector = createSelector(
  _getUsers,
  (users) => users.fetchingStatus
);

export const getUserRepositoriesSelector = createSelector(
  _getRepositories,
  (repositories) => repositories
);
