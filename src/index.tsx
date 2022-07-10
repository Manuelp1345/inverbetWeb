import React from "react";
import ReactDOM from "react-dom/client";
import { ContainerApp } from "./components/ContainerApp";
import "./index.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "animate.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContainerApp />
  </React.StrictMode>
);
