import React from 'react';
import Login from "./Login"
import { screen, render } from '@testing-library/react';
import { AuthProvider } from '../../context/AuthCtx';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders log in form and does other cool shit too', () => {
  const {container} = render (
    <AuthProvider>
      <Router>
        <Login />
      </Router>
    </AuthProvider>
  );

  expect(3 + 2).toEqual(5);
  expect(container).toMatchSnapshot();
})