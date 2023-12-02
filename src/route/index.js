import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
const Exercise = React.lazy(() => import("../pages/exercise.js"));

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/workout/:id"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Exercise />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;
