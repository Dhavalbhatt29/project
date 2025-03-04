import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // The user can be null, an object, or a role-based identifier

  // Function to login user
  const login = (userData) => {
    setUser(userData); // userData should have role info like { username, role: 'admin' or 'user' }
  };

  // Function to logout user
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
