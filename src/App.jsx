import React from "react";
import "./assets/scss/style.scss";
import AppRouter from "./router/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Context from "./context/Context";

const App = () => {
  return (
    <>
      <Context>
        <AppRouter />
      </Context>
      <SpeedInsights />
    </>
  );
};

export default App;
