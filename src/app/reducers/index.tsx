import { combineReducers } from 'redux';

import { usersReducer as users } from './users';
import { TFetchingStatus } from '../helpers';
import { TGetUsersResponse } from '../../api-wrapper/types';

export interface TRootState {
  users: { users: TGetUsersResponse | null; fetchingStatus: TFetchingStatus };
}

const rootReducer = () =>
  combineReducers<TRootState>({
    users
  });

export default rootReducer;
