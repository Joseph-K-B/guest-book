import { Link } from "react-router-dom";


function Help() {
  return (
    <>
      <section>
        <h1>Forgot your username, email or password??</h1>
        <ul>
          <li>Username: Izzie the Dog</li>
          <li>Email: izzie@dog.com</li>
          <li>Password: password</li>
          <Link to='/login'>Try Again</Link>
        </ul>
      </section>
    </>
  )
}

export default Help;