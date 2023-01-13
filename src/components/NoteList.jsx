import { useContext } from "react";
import { NoteContext } from "../context";
import { NoteItem } from "./";

export const NoteList = () => {
    const { notes } = useContext(NoteContext);

    return (
        <section className="flex flex-col gap-4">
            {
                notes.map(note => (
                    <NoteItem key={note.id} note={note}/>
                ))
            }
        </section>
    );
};