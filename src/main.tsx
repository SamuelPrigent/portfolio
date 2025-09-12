import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/App.scss";
import "./style/index.css";
// Router
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import BackgroundGrid from "./components/BackgroundGrid.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <BackgroundGrid />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
