import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";
import DisplayNote from "./DisplayNote";

function NotesManager() {

    const [defaultIn, setDefaultIn] = useState(true);
    const [notes, setNotes] = useState([{
        id: "sample-note",
        title: "hello! 👋",
        description: "this is a sample note...",
        color: "#E3DAC9"
    }])
    const [note, setNote] = useState({
        title: "",
        description: "",
        color: "#F8F8FF"
    })

    useEffect(() => {
        if (localStorage.getItem("notes")) {
            setNotes(JSON.parse(localStorage.getItem("notes")))
        }
    }, [])

    function saveToLocalStorage() {
        setNotes(prevNotes => {
            localStorage.setItem("notes", JSON.stringify(prevNotes));
            return prevNotes;
        })
    }

    function resizeTextarea(element) {
        element.rows = 1
        while (element.clientHeight < element.scrollHeight) {
            element.rows += 1
        }
    }

    function updateNote(event) {
        const { name, value } = event.target;
        setNote(preVal => {
            return { ...preVal, [name]: value }
        })
        resizeTextarea(event.target)
    }

    function saveNote() {
        const newNote = { id: uuidv4(), ...note };
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
        discard();
        saveToLocalStorage();
    }

    function discard() {
        setDefaultIn(true)
        setNote({
            title: "",
            description: "",
            color: "#F8F8FF"
        })
    }

    function editNote(id) {
        const [toEdit] = notes.filter(note => note.id === id);

        function defaultIn() {
            return new Promise((resolve, reject) => {
                setDefaultIn(false);
                resolve(true);
            })
        }

        function setEditNote(v) {
            return new Promise((resolve, reject) => {
                setNote({
                    title: toEdit.title,
                    description: toEdit.description,
                    color: toEdit.color
                })
                resolve(true)
            })
        }

        defaultIn()
            .then((v => {
                return setEditNote(v)
            }))
            .then((v) => {
                const el = document.querySelectorAll("textarea")
                el.forEach(t => {
                    resizeTextarea(t);
                })
                console.log(el);
            })

        deleteNote(id);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter(note => note.id !== id)
        })
        saveToLocalStorage();
    }

    return (
        <>
            <Input defaultIn={defaultIn} setDefaultIn={setDefaultIn} note={note} updateNote={updateNote} saveNote={saveNote} discard={discard} />
            {notes.map(note => <DisplayNote key={note.id} id={note.id} title={note.title} description={note.description} color={note.color} editNote={editNote} deleteNote={deleteNote} />)}
        </>
    )
}

export default NotesManager;