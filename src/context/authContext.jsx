import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateUser = (data) => {
    console.log(JSON.stringify(data))
    setCurrentUser(data);
  };

  const isAuthenticated = () => {
    return currentUser !== null;
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};