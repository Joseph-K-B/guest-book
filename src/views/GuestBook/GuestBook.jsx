import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EntryForm } from "../../components/entry/EntryForm";
import NoteList from "../../components/notes/NoteList";
import { NoteProvider } from "../../context/NoteCtx";
import useAuth from '../../hooks/useAuth';

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