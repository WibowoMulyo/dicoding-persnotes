import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote, archiveNote, isArchived }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            isArchived={isArchived}
          />
        ))
      ) : (
        <p className="empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
};

export default NoteList;
