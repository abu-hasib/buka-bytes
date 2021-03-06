import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Home from "./components/Nav";
import Food from "./components/Food";

const Res = () => {
  return <div>Restaurant!</div>;
};

const Good = () => {
  return <div>Food!</div>;
};

const About = () => {
  return <div>About!</div>;
};

const routes = [
  {
    path: "/restaurants",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Food,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

const Navigation = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, key) => {
          return (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

const GotoLink = ({ link, activeOnlyWhenExact, toggleSidebar }) => {
  let match = useRouteMatch({
    path: link.to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li
      className={
        (match ? "bg-gray-700 bg-opacity-25" : "") +
        "font-normal py-2 px-2 my-3 rounded-md w-full"
      }
      onClick={toggleSidebar}
    >
      <Link to={link.to} className="inline-block w-full">
        {<link.icon className="h-6 w-6 inline-block" />} {link.title}
      </Link>
    </li>
  );
};

const DashPages = () => {
  return (
    <Switch>
      <Route path="/dashboard/restaurants">
        <Res></Res>
      </Route>
      <Route path="/dashboard/food">
        <Good></Good>
      </Route>
      <Route path="/dashboard/about" component={About}></Route>
    </Switch>
  );
};

export { Navigation, GotoLink, DashPages };
