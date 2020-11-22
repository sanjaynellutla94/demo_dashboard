import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducer";
import { history } from "../routes/router";

export default createStore(
  combineReducers({
    ...rootReducer,
    router: connectRouter(history),
  }),
  compose(applyMiddleware(routerMiddleware(history), thunk))
);
