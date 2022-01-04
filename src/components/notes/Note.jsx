import React from 'react';

function Note({note: {user, message} }) {
    return(
        <><h2>{user.username}</h2><p>{message}</p></>
    )
}

export default Note;