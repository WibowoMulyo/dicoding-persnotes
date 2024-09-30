import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import { initialData } from "./utils";
import "./styles/style.css";

function App() {
  const [notes, setNotes] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);
  };

  const unarchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Persnotes</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <NoteForm onAddNote={addNote} />

      <h2>Catatan</h2>
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        isArchived={false}
      />

      <h2>Catatan Diarsip</h2>
      <NoteList
        notes={archivedNotes}
        deleteNote={deleteNote}
        archiveNote={unarchiveNote}
        isArchived={true}
      />
    </div>
  );
}

export default App;
