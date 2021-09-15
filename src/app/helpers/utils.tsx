import _ from 'lodash';

import { TFetchingStatus } from './index';

export const displayShowingResultsLabel = (
  usersFetchingStatus: TFetchingStatus,
  search: string
) =>
  _.isEqual(usersFetchingStatus, TFetchingStatus.Success) &&
  "Showing users for '" + search + "'";
