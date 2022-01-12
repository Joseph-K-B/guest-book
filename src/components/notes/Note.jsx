import React from 'react';
import useAuth from '../../hooks/useAuth';
import css from './NoteList.css';

function Note({ note: {message} }) {
    const {user} = useAuth();
    return(
        <><h4 className={css.noteTitle}>{user.username}</h4><p>{message}</p></>
    )
}

export default Note;