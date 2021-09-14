import { ThunkAction } from 'redux-thunk';
import { Action, ActionType, createAction } from 'typesafe-actions';

import { TRootState } from '../reducers';
import { getAllUserRepos } from '../../api-wrapper/users/getUserRepos';
import { TGetUserReposResponse } from '../../api-wrapper/types';

export const fetchUserReposInitAction = createAction('user/GET_REPOS_INIT')();
export const fetchUserReposSuccessAction = createAction(
  'user/GET_REPOS_SUCCESS'
)<TGetUserReposResponse>();
export const fetchUserReposFailureAction = createAction(
  'user/GET_REPOS_FAILURE'
)();

export type TFetchUserReposInitAction = ActionType<
  typeof fetchUserReposInitAction
>;
export type TFetchUserReposSuccessAction = ActionType<
  typeof fetchUserReposSuccessAction
>;
export type TFetchUserReposFailureAction = ActionType<
  typeof fetchUserReposFailureAction
>;

export type TFetchUserReposActions =
  | TFetchUserReposInitAction
  | TFetchUserReposFailureAction
  | TFetchUserReposSuccessAction;

export type TUserReposThunkActionType = (
  search: string | Array<string>
) => ThunkAction<void, TRootState, null, TFetchUserReposActions>;

export const getUserRepos: TUserReposThunkActionType =
  (search: string | Array<string>) =>
  async (dispatch: <T>(action: Action | Promise<Action>) => T) => {
    dispatch(fetchUserReposInitAction());
    return getAllUserRepos(search)
      .then((payload) => {
        return dispatch(fetchUserReposSuccessAction(payload));
      })
      .catch(() => dispatch(fetchUserReposFailureAction()));
  };
