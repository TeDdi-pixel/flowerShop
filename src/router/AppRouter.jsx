import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import spinner from "../assets/img/spinner.svg";
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const SearchPage = lazy(() => import("../pages/searchPage/SearchPage"));

const AppRouter = () => {
  const routes = [
    { path: "/", element: <HomePage /> },

    {
      path: "Home/Search",
      element: <SearchPage />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              //showing spinner while loading
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
