import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import spinner from "../assets/img/spinner.svg";
import { routes } from "./config/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <img
                    src={spinner}
                    alt="spinner"
                    className="loading-spinner"
                  />
                }
              >
                {route.element}
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
