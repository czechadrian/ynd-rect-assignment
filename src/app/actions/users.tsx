import { ThunkAction } from 'redux-thunk';
import { Action, ActionType, createAction } from 'typesafe-actions';

import { TRootState } from '../reducers';
import { getAllUsers } from '../../api-wrapper/users/getUsers';
import { TUsers } from '../../api-wrapper/types';

export const fetchUsersInitAction = createAction('users/GET_USERS_INIT')();
export const fetchUsersSuccessAction = createAction(
  'users/GET_USERS_SUCCESS'
)<TUsers>();
export const fetchUsersFailureAction = createAction(
  'users/GET_USERS_FAILURE'
)();

export type TFetchUsersInitAction = ActionType<typeof fetchUsersInitAction>;
export type TFetchUsersSuccessAction = ActionType<
  typeof fetchUsersSuccessAction
>;
export type TFetchUsersFailureAction = ActionType<
  typeof fetchUsersFailureAction
>;

export type TFetchUsersActions =
  | TFetchUsersInitAction
  | TFetchUsersFailureAction
  | TFetchUsersSuccessAction;

export type TUsersThunkActionType = (
  search: string
) => ThunkAction<void, TRootState, null, TFetchUsersActions>;

export const getUsers: TUsersThunkActionType =
  (search: string) =>
  async (dispatch: <T>(action: Action | Promise<Action>) => T) => {
    dispatch(fetchUsersInitAction());
    return getAllUsers(search)
      .then((payload) => {
        return dispatch(fetchUsersSuccessAction(payload.items));
      })
      .catch(() => dispatch(fetchUsersFailureAction()));
  };
