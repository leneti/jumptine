import { RouteObject } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/home";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
