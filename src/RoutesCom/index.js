import { lazy } from "react";
// ** Document title

// ** Default Route
const DefaultRoute = "/";

// ** Merge Routes
const RoutesPaths = [
  {
    path: "/",
    component: lazy(() => import("../Components/Pages/Intro/Home")),
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/playtoearn",
    component: lazy(() => import("../Components/Pages/Intro/PlaytoEarn")),
  },
];

export { DefaultRoute, RoutesPaths };
