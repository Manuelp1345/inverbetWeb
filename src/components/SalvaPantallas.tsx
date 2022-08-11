import React from "react";
import { Box } from "@mui/system";
import "../";

const SalvaPantallas = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url("IMG/SalvaPantallas_B.jpg")`,
          md: `url("IMG/SalvaPantallas_A.jpg")`,
        },
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#001314",
        overflow: "hidden",
        objectFit: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src="IMG/BRAND INVERBET_01.png"
        sx={{
          width: { xs: "50%", md: "20%" },
          marginTop: { xs: "-20rem", sm: "-12rem", md: "-16rem", xl: "-18rem" },
        }}
      />
      <Box
        className="simply-countdown"
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0rem",
          fontSize: "2rem",
          marginTop: "-4rem",
        }}
      />
    </Box>
  );
};

export default SalvaPantallas;
