import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import mainLoading from "../assets/img/MainLoading.svg";
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
                    src={mainLoading}
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
