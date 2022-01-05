import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from './Header.css'


const Header = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLog = () => {
    //useHistory.replace('/home') : useHistory.push('/login')
    user ? logout() && navigate('/home', {replace: true}) : navigate('/login')
  }

  const homeLink = 
    <nav>
      <NavLink to='/home' style={{textDecoration: 'none'}}>
        <p className={css.random}>Country Roads</p>
      </NavLink>
      <button
        className={css.btn}
        onClick={handleLog}
      >
        {user ? 'Log Out' : 'Log In'}
      </button>
    </nav>

  return (
    <>
    <header className={css.head}>
      <h1 className={css.title}>Guestbook</h1>
      <section className={css.links}>    
      {user ? (
        <>
          <h2 className={css.welcomeMsg}>{user.email}</h2>
          <span>{homeLink}</span>
        </>
      ) : (
        <>
          <h2 className={css.welcomeMsg}>Register to proceed</h2>
          <span>{homeLink}</span>
        </>
      )}
      </section>
    </header>
    </>
  )
}

export default Header;