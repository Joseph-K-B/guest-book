import { createContext, useState } from "react"


const authCtx = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const authConfirmed = (
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD
      )
      if(authConfirmed) setUser({ email });
      return authConfirmed;
  };

  const logout = (cb) => {
    setUser(null);
    cb();
  }

  return (
    <authCtx.Provider value={{user, login, logout}}>
      {children}
    </authCtx.Provider>
  );
};

export {authCtx, AuthProvider};