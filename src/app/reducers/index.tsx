import { combineReducers } from 'redux';
import { usersReducer as users } from './users';
import { TFetchingStatus } from '../helpers';

export interface TRootState {
  users: { name: string; fetchingStatus: TFetchingStatus };
}

const rootReducer = () =>
  combineReducers<TRootState>({
    users
  });

export default rootReducer;
