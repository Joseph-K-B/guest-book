import { useUser } from "../../context/UserCtx";
import css from '../../components/layout/Header.css'

const Header = () => {
    const {name} = useUser();
    return (
        <header className={css.head}>
            {name ? (
                <p>Welcome {name}</p>
            ) : (
                <p>Register to proceed</p>
            )}
        </header>
    )
}

export default Header;