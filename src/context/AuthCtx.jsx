import React, { createContext, useState } from "react"

const authCtx = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // This would probably be the sign up function 
  // b/c it includes both username and email
  // 
  const login = (username, email, password) => {
    const authConfirmed = (
      username === process.env.AUTH_USER &&
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD
      )
      if(authConfirmed) 
        setUser({ username, email });
      return authConfirmed;
  };

  const logout = (cb) => {
    setUser(null);
    // cb();
  }

  return (
    <authCtx.Provider value={{user, setUser, login, logout}}>
      {children}
    </authCtx.Provider>
  );
};

export {authCtx, AuthProvider};