import { useUser } from "../../context/UserCtx";

const Header = () => {
    const {name} = useUser();
    return (
        <header>
            <p>Welcome <span>{name}</span></p>
        </header>
    )
}

export default Header;