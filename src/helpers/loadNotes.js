import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const loadNotes = async (uid) => {
  //Consulta a la base de datos
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = [];
  notesSnap.forEach((note) => notes.push({ id: note.id, ...note.data() }));

  return notes;
};

export default loadNotes;
