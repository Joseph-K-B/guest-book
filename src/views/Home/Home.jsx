import { useState } from "react"
import { EntryForm } from "../../components/entry/EntryForm";
import { NoteProvider } from "../../context/NoteCtx";


const Home = () => {
    // const [loading, setLoading] = useState(true);

    // if(loading) return <h1>Loading...</h1>
    return (
        <NoteProvider>
            <EntryForm />
        </NoteProvider>
    )
}

export default Home