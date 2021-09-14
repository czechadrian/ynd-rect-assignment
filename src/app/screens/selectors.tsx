import { createSelector } from 'reselect';

import { TRootState } from '../reducers';

const _getUsers = (state: TRootState) => state.users;

export const getUsersSelector = createSelector(
  _getUsers,
  (users) => users.users
);
export const getUsersFetchingStatusSelector = createSelector(
  _getUsers,
  (users) => users.fetchingStatus
);
