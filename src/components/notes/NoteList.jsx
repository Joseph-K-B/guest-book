import React from 'react';
import { useNote } from "../../context/NoteCtx";
import Note from "./Note";

function NoteList() {
    const { notes } = useNote();

    return (
        <ul>
            {notes.map((note) => {
                return (
                    <li key={`${note.message}`}>
                        <Note note={note} />
                    </li>
                )
            })}
        </ul>
    )
}

export default NoteList;