import { createReducer } from 'typesafe-actions';
import produce from 'immer';

import { TFetchingStatus } from '../helpers';
import { TGetUserReposResponse } from '../../api-wrapper/types';
import {
  fetchUserReposFailureAction,
  fetchUserReposInitAction,
  fetchUserReposSuccessAction,
  TFetchUserReposActions
} from '../actions/userRepos';

type TPayloadRepositories = {
  repositories: TGetUserReposResponse;
  fetchingStatus: TFetchingStatus;
};

export const initialState: TPayloadRepositories = {
  repositories: [],
  fetchingStatus: TFetchingStatus.Defined
};

export const useReposReducer = createReducer<
  TPayloadRepositories,
  TFetchUserReposActions
>(initialState)
  .handleAction(fetchUserReposInitAction, (state) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Initial;
    })
  )
  .handleAction(fetchUserReposSuccessAction, (state, action) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Success;
      draftState.repositories = action.payload;
    })
  )
  .handleAction(fetchUserReposFailureAction, (state) =>
    produce(state, (draftState) => {
      draftState.fetchingStatus = TFetchingStatus.Failure;
    })
  );
