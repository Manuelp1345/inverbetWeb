import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import SalvaPantallas from "./SalvaPantallas";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SalvaPantallas />} />
        {/* <Route path="*" element={<ContainerApp />} /> */}
        <Route path="/Dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
