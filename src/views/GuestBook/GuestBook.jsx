import React from 'react';
import { EntryForm } from "../../components/entry/EntryForm";
import NoteList from "../../components/notes/NoteList";
import { NoteProvider } from "../../context/NoteCtx";


function GuestBook() {
    return (
      <>
        <NoteProvider>
          <main>
            <EntryForm />
            <NoteList />
          </main>
        </NoteProvider>
      </>
    )
}

export default GuestBook;