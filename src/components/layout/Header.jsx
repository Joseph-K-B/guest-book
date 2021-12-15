import { useUser } from "../../context/UserCtx";
import css from './Header.css'

const Header = () => {
    const {name} = useUser();
    return (
        <header className={css.head}>
            <h1>Guestbook</h1>
            {name ? (
                <h2 className={css.welcomeMsg}>Welcome {name}</h2>
            ) : (
                <h2 className={css.welcomeMsg}>Register to proceed</h2>
            )}
        </header>
    )
}

export default Header;