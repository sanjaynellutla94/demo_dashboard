import { combineReducers } from "redux";
import { TYPES } from "../../actions/dashboard/actions-dashboard";
import homeReducer from "./home/reducer-dashboard-home";
// import contentReducer from './reducer-dashboard-sidebar/reducer-dashboard-content';

const initialState = {
  sidebarHovered: false,
  showSidebar: true,
  isLoading: false,
  permissions: {},
  menuItems: [],
  errorMsg: "",
};

const dashboardReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPES.METADATA_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.METADATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case TYPES.METADATA_FETCH_FAILURE:
      return {
        ...state,
        isLoading: true,
        errorMsg: action.payload,
      };
    case TYPES.SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload,
      };
    case TYPES.SET_ITEMS:
      return {
        ...state,
        menuItems: action.payload || [],
      };
    case TYPES.TOGGLE_SIDEBAR_HOVER:
      return {
        ...state,
        sidebarHovered: !state.sidebarHovered,
      };
    default:
      return state;
  }
};

export default combineReducers({
  meta: dashboardReducer,
  home: homeReducer,
  // contentReducer,
});
