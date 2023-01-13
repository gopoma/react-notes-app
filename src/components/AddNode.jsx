import { useContext } from "react";
import { NoteContext } from "../context";
import { useForm } from "../hooks";

export const AddNote = () => {
    const { onAddNote } = useContext(NoteContext);
    const { content, onInputChange, onFormReset } = useForm({
        content: ""
    });

    const onNoteSubmit = (event) => {
        event.preventDefault();
        
        if(!content.trim()) return;
        onAddNote(content);
        onFormReset();
    };

    return (
        <form 
            className="flex flex-col gap-4"
            onSubmit={onNoteSubmit}
        >
            <input
                type="text"
                name="content"
                placeholder="Content..."
                value={content}
                onChange={onInputChange}
                className="p-2 rounded bg-gray-100 border border-gray-300"
            />
            <button className="p-2 rounded text-white font-bold bg-blue-600 hover:bg-blue-800 transition-colors">Add Note</button>
        </form>
    );
};