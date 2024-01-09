import React from "react";
import "./assets/scss/style.scss";
import AppRouter from "./router/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  return (
    <>
      <AppRouter />
      <SpeedInsights />
    </>
  );
};

export default App;
