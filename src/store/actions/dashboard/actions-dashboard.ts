import { getDashboardMetadataFact } from "../../../api/api";

export const TYPES = {
  METADATA_FETCH: "app/dashboard/METADATA_FETCH",
  METADATA_FETCH_SUCCESS: "app/dashboard/METADATA_FETCH_SUCCESS",
  METADATA_FETCH_FAILURE: "app/dashboard/METADATA_FETCH_FAILURE",
  SET_PERMISSIONS: "app/dashboard/SET_PERMISSIONS",
  SET_ITEMS: "app/dashboard/sidebar/SET_ITEMS",
  TOGGLE_SIDEBAR_HOVER: "app/dashboard/sidebar/TOGGLE_HOVER",
};

export const toggleSidebarAction = () => {
  return (dispatch: Function) => {
    return dispatch({
      type: TYPES.TOGGLE_SIDEBAR_HOVER,
    });
  };
};

export const setMenuItemsAction = (payload: any) => {
  return {
    type: TYPES.SET_ITEMS,
    payload,
  };
};

export const getDashboardMetadataAction = () => {
  return (dispatch: Function) => {
    dispatch({ type: TYPES.METADATA_FETCH });
    getDashboardMetadataFact().then(
      (payload: any) => {
        const { sidebarItems, permissions } = payload;
        dispatch({ type: TYPES.SET_PERMISSIONS, payload: permissions });
        dispatch({ type: TYPES.METADATA_FETCH_SUCCESS });
        dispatch(setMenuItemsAction(sidebarItems));
      },
      () => {
        dispatch({ type: TYPES.METADATA_FETCH_FAILURE });
      }
    );
  };
};
