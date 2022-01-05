import React, { createContext } from 'react';
import { screen, render } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import Note from './Note';
import { authCtx, AuthProvider } from '../../context/AuthCtx';

jest.mock('../../context/AuthCtx'), () => ({
  __esModue: true,
  default: createContext()
})

const user = {
  username: 'Izzie the Dog',
  email: 'izzie@dog.com',
}


it('renders a note and user ctx', async () => {
    const {container} = render(
    <AuthProvider>
      <authCtx.Provider value={{user}}>      
        <NoteProvider>
          <Note note = {{ message: 'words here'}} />
        </NoteProvider>
      </authCtx.Provider>
    </AuthProvider>
  );

    const guestName = screen.getByText(/Izzie the Dog/i);
    expect(guestName).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});