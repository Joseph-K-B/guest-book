import { useState } from "react"
import { EntryForm } from "../../components/entry/EntryForm";
import NoteList from "../../components/notes/NoteList";
import { NoteProvider } from "../../context/NoteCtx";
import { useUser } from "../../context/UserCtx";


const Home = () => {
    // const [loading, setLoading] = useState(true);
    const { name } = useUser();

    // if(!name) return <h1>Loading...</h1>
    return (
        <NoteProvider>
            <EntryForm />
            <NoteList />
        </NoteProvider>
    )
}

export default Home