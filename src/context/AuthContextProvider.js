import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const authContext = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    if (data) {
      setUserData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(userData));
  }, [userData]);

  return (
    <authContext.Provider value={{ userData, setUserData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
