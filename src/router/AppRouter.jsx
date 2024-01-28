import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import spinner from "../assets/img/spinner.svg";
import { routes } from "./config/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.id}
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
