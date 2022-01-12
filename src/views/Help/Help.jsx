import { Link } from "react-router-dom";
import css from './Help.css';


function Help() {
  return (
    <>
      <section className={css.helpSect}>
        <h1 className={css.helpTitle}>Forgot your username, email or password??</h1>
          <p>Username: Izzie the Dog</p>
          <br/>
          <p>Email: izzie@dog.com</p>
          <br/>
          <p>Password: password</p>
          <br/>
          <Link to='/login' className={css.tryAgain}>Try Again</Link>
      </section>
    </>
  )
}

export default Help;