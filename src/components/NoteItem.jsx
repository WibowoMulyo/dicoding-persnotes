import React from "react";

const NoteItem = ({ note, deleteNote, archiveNote, isArchived }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <small>{new Date(note.createdAt).toLocaleDateString()}</small>

      <div className="note-actions">
        <button onClick={() => deleteNote(note.id)}>Hapus</button>

        {/* Tombol berubah tergantung status arsip */}
        <button onClick={() => archiveNote(note.id)}>
          {isArchived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
