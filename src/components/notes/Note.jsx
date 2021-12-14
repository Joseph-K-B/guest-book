import React from 'react';

function Note({note: {userName, message} }) {
    return(
        <><h2>{userName}</h2><p>{message}</p></>
    )
}

export default Note;