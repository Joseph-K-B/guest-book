import React from 'react';
import { screen, render, findByAltText, findByText, findByLabelText } from '@testing-library/react';
import { NoteProvider } from '../../context/NoteCtx';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { AuthProvider } from '../../context/AuthCtx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

it('renders Home component', () => {
  const container = render(
    <AuthProvider>
      <Router>
        <Routes>
          <Route component={Home} />
        </Routes>
      </Router>
    </AuthProvider>
  );

  // const img = findByLabelText(/the lovely couple/i)
  // const msg = findByText(
  //   `Thank you for joining us on this day as we join these two in holy matrimony. 
  //   Please register to log in and leave some kind words of encouragment.`)

  // expect(img).toBeInTheDocument();
  // expect(msg).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});