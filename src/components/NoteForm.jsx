import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setBody("");
  };

  const maxTitleLength = 50;
  const remainingChars = maxTitleLength - title.length;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={maxTitleLength}
      />
      <p className="character-count">{remainingChars} karakter tersisa</p>
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;
