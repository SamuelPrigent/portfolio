import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/App.scss";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
// Router
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter
      basename="/"
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
