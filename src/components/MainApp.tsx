import moment from "moment";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { user } from "../types/user";
import AppRouter from "./AppRouter";

export const UserContext = createContext(null);

const MainApp = () => {
  const localStorageUser: user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [user, setUser] = useState({} as user);

  useEffect(() => {
    if (moment().diff(moment(user.last_login), "hour") > 23) {
      setUser({} as user);
      localStorage.removeItem("user");
    } else setUser(localStorageUser);
  }, [localStorageUser, user]);

  return (
    <UserContext.Provider
      //@ts-ignore
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
