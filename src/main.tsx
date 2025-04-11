import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer.tsx"; // footer
// style
import "./style/App.scss";
import "./style/index.css";
// Router
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import BackgroundGrid from "./components/BackgroundGrid.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundGrid />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
