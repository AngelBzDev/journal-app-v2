import React from "react";
import { useSelector } from "react-redux";
import NotesScreen from "../notes/NotesScreen";
import JournalEntries from "./JournalEntries";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
  const { notes } = useSelector((state) => state);

  return (
    <>
      <Sidebar />
      <div className="block grid-cols-4 gap-6 md:grid vh-80 scroll">
        <div className="order-first col-start-1 col-end-3 mb-8 border border-primary rounded-2xl">
          {notes.active ? <NotesScreen /> : <NothingSelected />}
        </div>
        <img
          src="https://play-lh.googleusercontent.com/40I0MAr1getFF-dLOzxekLi2_C3MC_u0HL2gmqNbXNWy32n9Bo3XIz2YYlAutfCT8aw"
          alt="Imagen"
          className="w-2/4 mx-auto mb-8 rounded-2xl md:w-full"
        />
        <JournalEntries />
      </div>
    </>
  );
};

export default JournalScreen;
