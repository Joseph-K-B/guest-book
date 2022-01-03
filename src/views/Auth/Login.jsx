import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import css from './Login.css';


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const auth = useAuth();
  const {formState, handleFormChange} = useForm({ email: '', password: ''});

  const { from } = location.state || {from : {pathname: '/'}};

  const handleLogin = (e) => {
    e.preventDefault();
    const confirmedAuth = auth.login(formState.email, formState.password);

    if(!confirmedAuth) {
      setError('Invalid credentials, form is case sensitive')
    } else {
      navigate('/guestbook');
    }
  };

  const handleHelp = () => {
    navigate.push('./help');
  }

  return (
    <>
      <h3>
        Please log in to sign the guestbook. 
        {from.pathname} is restricted to authorize users.
      </h3>
      <form onSubmit={handleLogin} className={CSS.logForm}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          value={formState.email}
          onChange={(value) => handleFormChange(value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          name='password'
          type='password'
          value={formState.password}
          onChange={(value) => handleFormChange(value)}
        />
        <button type='submit' aria-label='sign in'>
          Sign in
        </button>
      </form>
      {error &&
      <>
        <h4 className={css.error}>{error}</h4>
        <button onClick={() => handleHelp()}>Need help?</button>
      </>
      }
    </>
  );
}

export default Login;