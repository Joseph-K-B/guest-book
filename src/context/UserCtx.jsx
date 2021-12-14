import { createContext } from "react"

const UserCtx = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
}

const useUser = () => {
    const ctx = useContext(UserCtx);

    if(ctx === undefined) {
        throw Error('useUser custom hook must be called within child components of UserCtx Provider');
    }
    return ctx;
}

export { UserProvider, useUser }