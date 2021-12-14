import { useNote } from "../../context/NoteCtx";
import Note from "./Note";

function NoteList() {
    const { notes } = useNote();

    return (
        <ul>
            {notes.map((note) => {
                return (
                    <li>
                        <Note note={note} />
                    </li>
                )
            })}
        </ul>
    )
}

export default NoteList;