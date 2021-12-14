import { useState } from "react";
import { useNote } from "../../context/NoteCtx";
import { useUser } from "../../context/UserCtx";

const EntryForm = () => {
    const [userName, setUserName] = useState('');
    const [guestNote, setGuestNote] = useState('');
    const { name, setName } = useUser();
    const { notes, setNotes } = useNote();

    const updateGuest = () => {
        if (!guestNote) return;
        setName(userName);
        setNotes([...notes, {userName, message: guestNote}]);
        setGuestNote('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGuest();
    };

    const loggedMsg = name ? `Welcome ${name}` : 'Sign in to proceed';

    return (

        <>
            <h1>{loggedMsg}</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type='text' placeholder='note' value={guestNote} onChange={(e) => setGuestNote(e.target.value)} /> 
                <button>Submit</button>
            </form>
        </>
    )
}

export { EntryForm }