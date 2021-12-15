import React from 'react';
import { useState } from "react";
import { useNote } from "../../context/NoteCtx";
import { useUser } from "../../context/UserCtx";
import css from './EntryForm.css';

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
                aria-label='name-input' 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
        </div>
    );

    const loggedMsg = name ? `Signed as ${name}` : 'Sign here and leave a note';

    return (
        <>
            <section className={css.formSection}>
              <h3>{loggedMsg}</h3>
              <form onSubmit={handleSubmit}>
                  { name ? null : nameSubmit}
                  <input 
                      type='text' 
                      placeholder='note'
                      aria-label='note-input' 
                      value={guestNote} 
                      onChange={(e) => setGuestNote(e.target.value)} 
                  /> 
                  <button className={css.submitBtn}>Submit</button>
                  {name && (
                      <button
                          className={css.logOutBtn} 
                          onClick={() => {
                              setName('')
                              setUserName('')
                      }}>
                          Not {name}???
                      </button>
                  )}
              </form>
            </section>
        </>
    );
};

export { EntryForm }