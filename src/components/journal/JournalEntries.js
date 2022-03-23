import React from "react";
import { AiOutlineFileAdd as Add } from "react-icons/ai";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const notas = [1, 2, 3, 4, 5];

  return (
    <div className="col-start-4 col-end-5 overflow-scroll scroll">
      {/* <button className="flex items-center px-4 py-2 mx-auto rounded bg-primary">
        <p className="mr-4 text-xl font-semibold text-white">Añadir nota </p>
        <p className="text-xl text-white">
          <Add />
        </p>
      </button> */}
      {notas.map((nota, i) => (
        <JournalEntry key={i}/>
      ))}
    </div>
  );
};

export default JournalEntries;
