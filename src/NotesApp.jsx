import { NoteProvider } from "./context";
import { AddNote, NoteList } from "./components";

export const NotesApp = () => {
    return (
        <NoteProvider>
            <section className="h-screen flex justify-center bg-slate-200">
                <main className="min-w-[360px] h-fit mt-4 mx-4 bg-yellow-200 p-4 border border-black rounded">
                    <h1 className="text-4xl font-bold text-center p-4">NotesApp</h1>
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AddNote/>           
                        <NoteList/>
                    </section>
                </main>
            </section>
        </NoteProvider>
    );
};