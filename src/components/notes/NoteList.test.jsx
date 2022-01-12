import React from 'react';
import { render } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import NoteList from './NoteList';

it('renders list of notes left by users', async () => {
    const {container} = render(
        <NoteProvider>
            <NoteList />
        </NoteProvider>
    );


    expect(container).toMatchSnapshot();
})