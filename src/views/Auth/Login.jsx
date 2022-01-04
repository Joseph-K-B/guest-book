import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import css from './Login.css';


function Login() {
  const {formState, handleFormChange} = useForm({ username: '', email: '', password: ''});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || {from : {pathname: '/'}};

  const handleLogin = (e) => {
    e.preventDefault();
    const confirmedAuth = auth.login(formState.username, formState.email, formState.password);

    if(confirmedAuth) {
      navigate('/guestbook');
    } else {
      setError('Invalid credentials, form is case sensitive')
    }
  };

  const handleHelp = () => {
    navigate('/help');
  }

  return (
    <>
      <section className={css.formSection}>
        <h3>Register here</h3>
        <form onSubmit={handleLogin} className={css.logForm}>
          <label htmlFor='username'>Name:</label>
          <input
            id='username'
            name='username'
            type='username'
            value={formState.username}
            onChange={(value) => handleFormChange(value)}
          />
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
          <button type='submit' aria-label='sign in' className={css.submitBtn}>
            Sign in
          </button>
        </form>
        {error &&
        <>
          <h4 className={css.error}>{error}</h4>
          <button onClick={() => handleHelp()}>Need help?</button>
        </>
        }
      </section>
    </>
  );
}

export default Login;