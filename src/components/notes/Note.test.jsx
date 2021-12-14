import React from 'react';
import { screen, render } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import Note from './Note';

it('renders list of notes left by users', async () => {
    const {container} = render(
        <NoteProvider>
            <Note note = {{
                userName: 'Izzie',
                note: 'i love bones'
            }} />
        </NoteProvider>
    );

    const guestName = screen.getByText(/Izzie/i);
    expect(guestName).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})