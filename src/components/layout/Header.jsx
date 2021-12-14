import { useUser } from "../../context/UserCtx";

const Header = () => {
    const {name} = useUser();
    return (
        <header>
            {name ? (
                <p>Welcome {name}</p>
            ) : (
                <p>Register to proceed</p>
            )}
        </header>
    )
}

export default Header;