import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from './Header.css'


const Header = () => {
  const {user} = useAuth();

  return (
    <>
    <header className={css.head}>
      <h1>Guestbook</h1>
      <nav>
        <NavLink to='/home'>
          <p className={css.random}>Country Roads</p>
        </NavLink>
      </nav>
      {user ? (
        <h2 className={css.welcomeMsg}>{user.email}</h2>
      ) : (
        <h2 className={css.welcomeMsg}>Register to proceed</h2>
      )}
    </header>
    </>
  )
}

export default Header;