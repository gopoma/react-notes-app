import PropTypes from "prop-types";
import { useContext } from "react";
import { NoteContext } from "../context";

export const NoteItem = ({note}) => {
    const { onRemoveNote, onToggleNote } = useContext(NoteContext);

    return (
        <article className="max-w-[360px] p-2 bg-sky-200 border border-black">
            <section className="flex justify-between items-center">
                <input
                    type="checkbox"
                    checked={note.done}
                    className="w-4 h-4 rounded-sm bg-gray-100 border-gray-300"
                    onChange={() => onToggleNote(note.id)}
                />
                <button
                    className="text-white font-bold rounded px-2 py-1 bg-red-600 hover:bg-red-800 transition-colors"
                    onClick={() => onRemoveNote(note.id)}
                >
                    X
                </button>
            </section>
            <p className="text-ellipsis overflow-hidden">{note.content}</p>
        </article>
    );
};

NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired      
    })
};