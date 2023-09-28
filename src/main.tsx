import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { APP_ROUTES } from "@/constants/routes";
import { theme } from "@/theme.ts";

const router = createBrowserRouter(APP_ROUTES);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
