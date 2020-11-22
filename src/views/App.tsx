import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteChildrenProps,
  // Link
} from "react-router-dom";
import routes, { DemoRoute } from "../routes/router";

const getRoutes = (routes: Array<DemoRoute>) => {
  return routes.map((route, key) => {
    return (
      // exact
      <Route
        path={route.path}
        key={key}
        render={(props: RouteChildrenProps) => {
          const Content = route.component;
          return <Content {...props}></Content>;
        }}
      ></Route>
    );
  });
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard/home" />
          </Route>
          {getRoutes(routes)}
        </Switch>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
