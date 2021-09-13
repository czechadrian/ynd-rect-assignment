import { createReducer } from 'typesafe-actions';
import produce from 'immer';

import {
  fetchUsersInitAction,
  fetchUsersSuccessAction,
  fetchUsersFailureAction,
  TFetchUsersActions
} from '../actions/users';
import { TFetchingStatus } from '../helpers';
import { TGetUsersResponse } from '../../api-wrapper/types';

type TUsers = {
  users: TGetUsersResponse | null;
  fetchingStatus: TFetchingStatus;
};

export const initialState: TUsers = {
  users: null,
  fetchingStatus: TFetchingStatus.Defined
};

export const usersReducer = createReducer<TUsers, TFetchUsersActions>(
  initialState
)
  .handleAction(fetchUsersInitAction, (state) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Initial;
    })
  )
  .handleAction(fetchUsersSuccessAction, (state, action) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Success;
      draftState.users = action.payload;
    })
  )
  .handleAction(fetchUsersFailureAction, (state) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Failure;
    })
  );
