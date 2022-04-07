import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const state = useSelector(state => state)
  const {notes} = state.notes
  return (
    <>
      {notes.length > 1 ? (
        <div className="col-start-4 col-end-5 overflow-scroll scroll">
        {notes.map((nota, i) => (
          <JournalEntry key={i}/>
        ))}
      </div>
      ) : (
        <div className="col-start-4 col-end-5 text-center">
            <p className="mb-2 text-2xl font-medium">Aun no tienes notas</p>
            <p className="text-2xl font-medium">Agrege alguna 👽</p>
        </div>
      )}
    </>
  );
};

export default JournalEntries;
