import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import mainLoading from "../assets/img/Loading Square.json";
import { routes } from "./config/routes";
import Lottie from "lottie-react";

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
                  <Lottie
                    animationData={mainLoading}
                    loop
                    autoplay
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
