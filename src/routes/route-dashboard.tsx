import Home from "../views/dashboard/home/Home";

const routes = [
  {
    name: "Home",
    path: "/dashboard/home",
    isPrivate: false,
    isExact: false,
    component: Home,
  },
];

export default routes;
