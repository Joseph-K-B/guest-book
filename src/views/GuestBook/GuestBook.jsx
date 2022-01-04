import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EntryForm } from "../../components/entry/EntryForm";
import NoteList from "../../components/notes/NoteList";
import { NoteProvider } from "../../context/NoteCtx";
import useAuth from '../../hooks/useAuth';

function GuestBook() {
  const navigate = useNavigate();
  const { user } = useAuth();
    return (
      !user ? navigate('/') :
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