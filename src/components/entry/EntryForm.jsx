import React from 'react';
import { useNote } from "../../context/NoteCtx";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from "react";
import css from './EntryForm.css';

const EntryForm = () => {
    const [guestNote, setGuestNote] = useState('');
    const navigate = useNavigate();
    const { notes, setNotes } = useNote();
    const {user, logout} = useAuth();

    const updateGuest = () => {
        if (!guestNote) return;
        setNotes([...notes, {user, message: guestNote}]);
        setGuestNote('');
    };

    const handleNotUser = () => {
        logout(() => navigate('/'))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGuest();
    };

    const loggedMsg = user ? `Signed in as ${user.username}` : 'Sign here and leave a note';

    return (
        <>
            <section className={css.formSection}>
              <h3 className={css.formHead}>{loggedMsg}</h3>
              <form onSubmit={handleSubmit}>
                  <input 
                      type='text' 
                      placeholder='note'
                      aria-label='note-input' 
                      value={guestNote} 
                      onChange={(e) => setGuestNote(e.target.value)} 
                  /> 
                  <button className={css.submitBtn}>Submit</button>
                  {user && (
                      <button
                          className={css.logOutBtn} 
                          onClick={() => handleNotUser()}>
                          Not {user.username}???
                      </button>
                  )}
              </form>
            </section>
        </>
    );
};

export { EntryForm }