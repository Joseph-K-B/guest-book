import React from 'react';
import { createContext, useContext, useState } from "react";

const UserCtx = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    
    return <UserCtx.Provider value={{ name, setName }}>{children}</UserCtx.Provider>
};

const useUser = () => {
    const ctx = useContext(UserCtx);

    if(ctx === undefined) {
        throw new Error('useUser custom hook must be called within child components of UserCtx Provider');
    };
    return ctx;
};

export { UserProvider, useUser }