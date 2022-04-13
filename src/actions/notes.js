import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import loadNotes from "../helpers/loadNotes";
import types from "../types/types";

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startNewNote = () => {
  return async (dispath, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const { id } = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );

    dispath(activeNote(id, newNote));
  };
};

export const startLoadingNotes = (uid) => {
  return async(dispath) => {
    const notes = await loadNotes(uid)
    dispath(setNotes(notes))
  }

}
