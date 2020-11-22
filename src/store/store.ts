import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducer";

export const history = createBrowserHistory();

export default createStore(
  combineReducers({
    ...rootReducer,
    router: connectRouter(history),
  }),
  compose(applyMiddleware(routerMiddleware(history), thunk))
);
