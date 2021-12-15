import React from 'react';
import { useNote } from "../../context/NoteCtx";
import Note from "./Note";
import css from '../notes/NoteList.css'

function NoteList() {
    const { notes } = useNote();

  return (
    <section>
      <ul className={css.notes}>
        {notes.map((note) => {
          return (
          <li key={`${note.message}`} role='list-item'>
            <Note note={note} />
          </li>
          )
        })}
      </ul>
    </section>
      
  )
}

export default NoteList;