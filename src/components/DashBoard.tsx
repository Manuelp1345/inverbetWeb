import React, { useCallback, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./MainApp";

const DashBoard = () => {
  //@ts-ignore
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRedirect = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    console.log("DashBoard", user);
    if (!user.id) {
      handleRedirect();
    }
  }, [user, handleRedirect]);

  return (user.id && <div>DashBoard</div>) || <div>Redireccionando </div>;
};

export default DashBoard;
