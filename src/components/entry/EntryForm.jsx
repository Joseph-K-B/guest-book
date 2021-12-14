import { useUser } from "../../context/UserCtx";
const { useState } = require("react");

const EntryForm = () => {
    // const [name, setName] = useState();
    // const [note, setNote] = useState();
    const { name, setName } = useUser();
    const { note, setNote } = useUser();

    return (
        <form>
            <input type='text' placeholder='name' value={name}></input>
            <input type='text' placeholder='note' value={note}></input>
        </form>
    )
}

export { EntryForm }