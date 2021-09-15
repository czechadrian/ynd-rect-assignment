import {
  fetchUsersSuccessAction,
  fetchUsersInitAction,
  fetchUsersFailureAction
} from '../../actions/users';
import { TFetchingStatus } from '../../helpers';
import { usersReducer } from '../users';


const users = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/16872922245?v=4',
    events_url: 'https://api.github.com/users/test123/events{/privacy}',
    followers_url: 'https://api.github.com/users/test123/followers',
    following_url:
        'https://api.github.com/users/test123/following{/other_user}',
    gists_url: 'https://api.github.com/users/test123/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/test123',
    id: 1687291145,
    login: 'test123',
    node_id: 'MDQ6VXNlcjE2aaaODcyOTQ1',
    organizations_url: 'https://api.github.com/users/test123/orgs',
    received_events_url: 'https://api.github.com/users/test123/received_events',
    repos_url: 'https://api.github.com/users/test123/repos',
    score: 11,
    site_admin: false,
    starred_url: 'https://api.github.com/users/test123/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/test123/subscriptions',
    type: 'User'
  }
];


describe('users reducer', () => {
  const payload = users;
  const previousState = {
    users: [],
    fetchingStatus: TFetchingStatus.Defined
  };

  it('should fetch users - init', () => {
    const action = fetchUsersInitAction();
    expect(action).toEqual({
      type: 'users/GET_USERS_INIT',
      meta: undefined
    });

    const newState = usersReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Initial);
  });

  it('should fetch users - success', () => {
    const action = fetchUsersSuccessAction(payload);
    expect(action).toEqual({
      type: 'users/GET_USERS_SUCCESS',
      meta: undefined,
      payload
    });

    const newState = usersReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Success);
    expect(newState.users).toEqual(payload);
  });

  it('should fetch users - failure', () => {
    const action = fetchUsersFailureAction();
    expect(action).toEqual({
      type: 'users/GET_USERS_FAILURE',
      meta: undefined
    });

    const newState = usersReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Failure);
  });
});