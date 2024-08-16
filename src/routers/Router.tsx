import { lazy } from "react";

const routes = [{ path: "/", component: lazy(() => import("@/views/pages/MainPage")) }];

export default routes;
