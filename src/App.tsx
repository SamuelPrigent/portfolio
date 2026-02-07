import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
const CvPage = lazy(() => import("./pages/CvPage"));

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route
        path="/cv"
        element={
          <Suspense fallback={<div className="min-h-screen" />}>
            <CvPage />
          </Suspense>
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
