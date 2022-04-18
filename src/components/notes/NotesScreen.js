import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";

import useForm from "../../hooks/useForm";

import Input from "../ui/Input";

const NotesScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispath = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body } = formValues;

  //Tener la referencia de la nota activa
  const idActive = useRef(note.id);

  useEffect(() => {
    if (note.id !== idActive.current) {
      //Cambia los valores del formulario
      reset(note);
      //Cambia de nuevo la referencia de la nota activa
      idActive.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispath(activeNote(formValues.id, {...formValues}))
  }, [formValues, dispath]);

  return (
    <div>
      <div className="flex flex-col p-8">
        <Input name={"title"} onChange={handleInputChange} value={title} place="Titulo" />
        <div>
          <Input
            name={"body"}
            place={`Escribe lo que quieras 😏`}
            type="textarea"
            onChange={handleInputChange}
            value={body}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
