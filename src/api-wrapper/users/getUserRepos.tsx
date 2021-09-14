import { TGetUserReposResponse } from '../types';
import { apiGet, createUrl } from '../apiCall';

export const getAllUserRepos = async (
  user: string | Array<string>
): Promise<TGetUserReposResponse> => {
  const url = createUrl(`https://api.github.com/users/${user}/repos`);

  return apiGet<TGetUserReposResponse>(url);
};
