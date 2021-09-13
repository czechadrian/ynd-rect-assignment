import { apiGet, createUrl } from './apiCall';
import { TGetUsersResponse } from './types';

export const getAllUsers = async (
  payload?: string
): Promise<TGetUsersResponse> => {
  const url = createUrl(`https://api.github.com/search/users`, {
    q: payload,
    per_page: 5
  });
  return apiGet<TGetUsersResponse>(url);
};
