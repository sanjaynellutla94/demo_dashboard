import { createBrowserHistory } from "history";

import routerApp from "./route-app";
import routerDashboard from "./route-dashboard";

export const history = createBrowserHistory();

export interface DemoRoute {
  name: string;
  path: string;
  isExact?: boolean;
  isPrivate?: boolean;
  isAuthenticated?: boolean;
  component: Function;
}

export const DASHBOARD_ROUTES = routerDashboard;

export default routerApp;
