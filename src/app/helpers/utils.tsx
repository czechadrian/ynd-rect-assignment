import { TFetchingStatus } from './index';

export const displayShowingResultsLabel = (
  usersFetchingStatus: TFetchingStatus,
  search: string
) =>
  usersFetchingStatus === TFetchingStatus.Success &&
  "Showing users for '" + search + "'";
