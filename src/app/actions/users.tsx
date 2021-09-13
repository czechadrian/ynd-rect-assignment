import {ThunkAction} from "redux-thunk";
import {Action, ActionType, createAction} from "typesafe-actions";

import {TRootState} from "../reducers";

export const fetchUsersInitAction = createAction("users/FETCH_INIT")();
export const fetchUsersSuccessAction = createAction("users/FETCH_SUCCESS")<string>();
export const fetchUsersFailureAction = createAction("users/FETCH_FAILURE")();

export type TFetchUsersInitAction = ActionType<typeof fetchUsersInitAction>;
export type TFetchUsersSuccessAction = ActionType<typeof fetchUsersSuccessAction>;
export type TFetchUsersFailureAction = ActionType<typeof fetchUsersFailureAction>;

export type TFetchUsersActions =
    | TFetchUsersInitAction
    | TFetchUsersFailureAction
    | TFetchUsersSuccessAction;

export type TUsersThunkActionType = ThunkAction<void,
    TRootState,
    null,
    TFetchUsersActions>;

export const getUsers: TUsersThunkActionType =
    () => async (dispatch: <T>(action: Action | Promise<Action>) => T) => {
        dispatch(fetchUsersInitAction());
        // return getUsersAPI()
        //     .then((payload) => {
        //         return dispatch(fetchUsersSuccessAction(payload));
        //     })
        //     .catch(() => dispatch(fetchUsersFailureAction()));
    };
