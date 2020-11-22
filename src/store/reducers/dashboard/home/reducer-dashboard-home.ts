import { TYPES } from "../../../actions/dashboard/home/actions-dashboard-home";

const initialState = {
  home: {
    isLoading: false,
    errorMsg: "",
    data: {},
  },
  lineGraph: {
    type: "MONTHLY",
    isLoading: false,
    errorMsg: "",
    data: [],
  },
};

const homeReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPES.HOMEDATA_FETCH:
      return {
        ...state,
        home: {
          ...state.home,
          isLoading: true,
        },
      };
    case TYPES.HOMEDATA_FETCH_SUCCESS:
      return {
        ...state,
        home: {
          ...state.home,
          isLoading: false,
          data: action.payload,
        },
      };
    case TYPES.HOMEDATA_FETCH_FAILURE:
      return {
        ...state,
        home: {
          ...state.home,
          errorMsg: action.payload,
          isLoading: false,
        },
      };
    case TYPES.LINEGRAPH_FETCH:
      return {
        ...state,
        lineGraph: {
          ...state.lineGraph,
          isLoading: true,
        },
      };
    case TYPES.LINEGRAPH_FETCH_SUCCESS:
      return {
        ...state,
        lineGraph: {
          ...state.lineGraph,
          isLoading: false,
          data: action.payload,
        },
      };
    case TYPES.LINEGRAPH_FETCH_FAILURE:
      return {
        ...state,
        lineGraph: {
          ...state.lineGraph,
          isLoading: false,
          errorMsg: action.payload,
        },
      };
    default:
      return state;
  }
};

export default homeReducer;
