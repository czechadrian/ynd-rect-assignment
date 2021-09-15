import {
  fetchUserReposSuccessAction,
  fetchUserReposInitAction,
  fetchUserReposFailureAction
} from '../../actions/userRepos';
import { TFetchingStatus } from '../../helpers';
import { useReposReducer } from '../userRepos';


const userRepos = [
  {
    allow_forking: true,
    archive_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/{archive_format}{/ref}',
    archived: false,
    assignees_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/assignees{/user}',
    blobs_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/git/blobs{/sha}',
    branches_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/branches{/branch}',
    clone_url: 'https://github.com/rfdg/aws-deployment-java.git',
    collaborators_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/collaborators{/collaborator}',
    comments_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/comments{/number}',
    commits_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/commits{/sha}',
    compare_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/compare/{base}',
    contents_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/contents/{+path}',
    contributors_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/contributors',
    created_at: '2018-01-27T18:30:47Z',
    default_branch: 'master',
    deployments_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/deployments',
    description: 'AWS deployment',
    disabled: false,
    downloads_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/downloads',
    events_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/events',
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/forks',
    full_name: 'rfdg/aws-deployment-java',
    git_commits_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/git/commits{/sha}',
    git_refs_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/git/refs{/sha}',
    git_tags_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/git/tags{/sha}',
    git_url: 'git://github.com/rfdg/aws-deployment-java.git',
    has_downloads: true,
    has_issues: true,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: null,
    hooks_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/hooks',
    html_url: 'https://github.com/rfdg/aws-deployment-java',
    id: 119191081,
    issue_comment_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/issues/comments{/number}',
    issue_events_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/issues/events{/number}',
    issues_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/issues{/number}',
    keys_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/keys{/key_id}',
    labels_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/labels{/name}',
    language: null,
    languages_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/languages',
    license: null,
    merges_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/merges',
    milestones_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/milestones{/number}',
    mirror_url: null,
    name: 'aws-deployment-java',
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTkxOTEwODE=',
    notifications_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/notifications{?since,all,participating}',
    open_issues: 0,
    open_issues_count: 0,
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/32078527?v=4',
      events_url: 'https://api.github.com/users/rfdg/events{/privacy}',
      followers_url: 'https://api.github.com/users/rfdg/followers',
      following_url: 'https://api.github.com/users/rfdg/following{/other_user}',
      gists_url: 'https://api.github.com/users/rfdg/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/rfdg',
      id: 32078527,
      login: 'rfdg',
      node_id: 'MDQ6VXNlcjMyMDc4NTI3',
      organizations_url: 'https://api.github.com/users/rfdg/orgs',
      received_events_url: 'https://api.github.com/users/rfdg/received_events',
      repos_url: 'https://api.github.com/users/rfdg/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/rfdg/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rfdg/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/rfdg'
    },
    private: false,
    pulls_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/pulls{/number}',
    pushed_at: '2018-02-18T15:50:34Z',
    releases_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/releases{/id}',
    size: 1,
    ssh_url: 'git@github.com:rfdg/aws-deployment-java.git',
    stargazers_count: 0,
    stargazers_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/stargazers',
    statuses_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/statuses/{sha}',
    subscribers_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/subscribers',
    subscription_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/subscription',
    svn_url: 'https://github.com/rfdg/aws-deployment-java',
    tags_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/tags',
    teams_url: 'https://api.github.com/repos/rfdg/aws-deployment-java/teams',
    trees_url:
        'https://api.github.com/repos/rfdg/aws-deployment-java/git/trees{/sha}',
    updated_at: '2018-02-18T15:49:53Z',
    url: 'https://api.github.com/repos/rfdg/aws-deployment-java',
    watchers: 0,
    watchers_count: 0
  }
];

describe('users reducer', () => {
  const payload = userRepos;
  const previousState = {
    repositories: [],
    fetchingStatus: TFetchingStatus.Defined
  };

  it('should fetch user repos - init', () => {
    const action = fetchUserReposInitAction();
    expect(action).toEqual({
      type: 'user/GET_REPOS_INIT',
      meta: undefined
    });

    const newState = useReposReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Initial);
  });

  it('should fetch user repos - success', () => {
    const action = fetchUserReposSuccessAction(payload);
    expect(action).toEqual({
      type: 'user/GET_REPOS_SUCCESS',
      meta: undefined,
      payload
    });

    const newState = useReposReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Success);
    expect(newState.repositories).toEqual(payload);
  });

  it('should fetch user repos - failure', () => {
    const action = fetchUserReposFailureAction();
    expect(action).toEqual({
      type: 'user/GET_REPOS_FAILURE',
      meta: undefined
    });

    const newState = useReposReducer(previousState, action);

    expect(newState.fetchingStatus).toEqual(TFetchingStatus.Failure);
  });
});
