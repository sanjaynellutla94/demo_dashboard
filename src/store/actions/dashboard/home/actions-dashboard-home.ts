import { getHomeDataFact, getLinegraphDataFact } from "../../../../api/api";

export const TYPES = {
  HOMEDATA_FETCH: "app/dashboard/home/data",
  HOMEDATA_FETCH_FAILURE: "app/dashboard/home/data/fail",
  HOMEDATA_FETCH_SUCCESS: "app/dashboard/home/data/success",
  LINEGRAPH_FETCH: "app/dashboard/home/data/linegraph",
  LINEGRAPH_FETCH_FAILURE: "app/dashboard/home/data/linegraph/fail",
  LINEGRAPH_FETCH_SUCCESS: "app/dashboard/home/data/linegraph/success",
};

export const setHomeDataAction = () => {
  return (dispatch: Function) => {
    dispatch({ type: TYPES.HOMEDATA_FETCH });
    getHomeDataFact().then(
      (payload: any) => {
        dispatch({ type: TYPES.HOMEDATA_FETCH_SUCCESS, payload });
      },
      () => {
        dispatch({ type: TYPES.HOMEDATA_FETCH_FAILURE });
      }
    );
  };
};

export const setLinegraphDataAction = () => {
  return (dispatch: Function) => {
    dispatch({ type: TYPES.LINEGRAPH_FETCH });
    getLinegraphDataFact().then(
      (payload: any) => {
        dispatch({ type: TYPES.LINEGRAPH_FETCH_SUCCESS, payload });
      },
      () => {
        dispatch({ type: TYPES.LINEGRAPH_FETCH_FAILURE });
      }
    );
  };
};
