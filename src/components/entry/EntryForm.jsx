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

    const nameSubmit = (
        <div>   
            <input 
                type='text' 
                placeholder='name' 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
        </div>
    )

    const loggedMsg = name ? `Welcome ${name}` : 'Sign in to proceed';

    return (

        <>
            <h1>{loggedMsg}</h1>
            <form onSubmit={handleSubmit}>
                {/* <nameSubmit /> */}
                { name ? null : nameSubmit}
                <input type='text' placeholder='note' value={guestNote} onChange={(e) => setGuestNote(e.target.value)} /> 
                <button>Submit</button>
                {name && (
                    <button onClick={() => {
                        setName('')
                        setUserName('')
                    }}>
                        Not {name} ???
                    </button>
                )}
            </form>
        </>
    )
}

export { EntryForm }