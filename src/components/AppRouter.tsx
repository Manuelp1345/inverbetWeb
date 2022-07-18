import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerApp } from "./ContainerApp";
import DashBoard from "./DashBoard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ContainerApp />} />
        <Route path="/Dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
