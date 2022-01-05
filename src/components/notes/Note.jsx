import React from 'react';
import useAuth from '../../hooks/useAuth';

function Note({ note: {message} }) {
    const {user} = useAuth();
    return(
        <><h2>{user.username}</h2><p>{message}</p></>
    )
}

export default Note;