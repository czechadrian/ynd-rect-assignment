import axios, { AxiosRequestConfig } from 'axios';
import { isEmpty } from 'lodash';
import queryString, { StringifyOptions } from 'query-string';

export const apiGet = async <RES,>(
  queryUrl: string,
  axiosOptions?: AxiosRequestConfig
): Promise<RES> => {
  const { data } = await axios.get<RES>(queryUrl, {
    ...axiosOptions
  });
  return data;
};
export const createUrl = (
  queryUrl: string,
  queryParams = {},
  options?: StringifyOptions
): string => {
  if (isEmpty(queryParams)) {
    return queryUrl;
  }
  return queryUrl + '?' + queryString.stringify(queryParams, options);
};
