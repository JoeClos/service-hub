import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TimelinePage from "../pages/TimelinePage";
import ScenarioPage from "../pages/ScenarioPage";
import LifeMomentPage from "../pages/LifeMomentPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/life-moment/:id" element={<LifeMomentPage />} />
      {/* <Route path="/timeline/:stage" element={<TimelinePage />} /> */}
      <Route path="/explore/:stage" element={<TimelinePage />} />
      <Route path="/scenario/:name" element={<ScenarioPage />} />
    </Routes>
  );
};

export default AppRoutes;
