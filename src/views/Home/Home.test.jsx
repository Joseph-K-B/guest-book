import React from 'react';
import { screen, render } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import { UserProvider } from '../../context/UserCtx';
import userEvent from '@testing-library/user-event';
import Home from './Home';

it('renders Home component and allows user to input name & message', async () => {
    render(
        <UserProvider>
            <NoteProvider>
                <Home/>
            </NoteProvider>
        </UserProvider>
    );

    const nameInput = screen.getByLabelText('name-input');
    const msgInput = screen.getByLabelText('note-input');
    const submitBtn = screen.getByRole('button');
    
    expect(nameInput).toBeInTheDocument();
    
    userEvent.type(nameInput, 'Izzie');
    userEvent.type(msgInput, 'Loves food');
    userEvent.click(submitBtn);

    const newNote = await screen.findByRole('list-item');

    expect(msgInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(newNote).toBeInTheDocument();
});