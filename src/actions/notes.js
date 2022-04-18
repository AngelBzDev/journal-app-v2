import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase.config";
import { fileUpload } from "../helpers/fileUpload";
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

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note,
  },
});

export const startNewNote = () => {
  return async (dispath, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      url: null,
    };

    const { id } = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );

    dispath(activeNote(id, newNote));
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispath) => {
    const notes = await loadNotes(uid);
    dispath(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispath, getState) => {
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };

    await updateDoc(
      doc(db, `${uid}/journal/notes/`, `${note.id}`),
      noteToFirestore
    );

    dispath(refreshNote(note.id, note));

    Swal.fire("Nice!! 👏🏽", "La nota se guardo con exito", "success");
  };
};

export const startUploadingFile = (file) => {
  return async (dispath, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "!Awanta 👌",
      text: "Se esta subiendo la imagen",
      didOpen: () => Swal.showLoading(),
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispath(startSaveNote(activeNote));

    Swal.close();
  };
};
