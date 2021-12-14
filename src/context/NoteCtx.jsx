import { createContext, useContext, useState } from "react";

const NoteCtx = createContext();

const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);

    return <NoteCtx.Provider value={{ notes, setNotes }}>{children}</NoteCtx.Provider>
}

const useNote = () => {
    const ctx = useContext(NoteCtx);

    if(ctx === undefined) {
        throw new Error('useNote hook can only be called within child components of NoteCtx Provider');
    }
    return ctx;
}

export { NoteProvider, useNote}