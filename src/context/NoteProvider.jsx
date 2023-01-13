import { useEffect } from "react";
import { useReducer } from "react";
import { NoteContext, noteReducer, types } from "./"

const init = () => {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
};

export const NoteProvider = ({children}) => {
    const [notes, dispatch] = useReducer(noteReducer, [], init);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = (content) => {
        const note = {
            id: new Date().getTime(),
            content,
            done: false
        };

        const action = {
            type: types.add,
            payload: note
        };
        dispatch(action);
    };

    const onRemoveNote = (id) => {
        const action = {
            type: types.remove,
            payload: id
        };     
        dispatch(action);
    };

    const onToggleNote = (id) => {
        const action = {
            type: types.toggle,
            payload: id
        };
        dispatch(action);
    };

    return (
        <NoteContext.Provider value={{
            notes,
            onAddNote,
            onRemoveNote,
            onToggleNote
        }}>
            {children}
        </NoteContext.Provider>
    );
};