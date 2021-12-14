import React from 'react';
import { screen, render } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import { UserProvider } from '../../context/UserCtx';
import Home from './Home';

it('renders Home component and allows user to input name & message', () => {
    const { container } = render(
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
    expect(msgInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})