import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../actions/notes";
import ButtonBar from "../ui/ButtonBar";
import {
  AiOutlineFileAdd as Add,
  AiOutlineFileImage as Image,
  AiOutlineSave as Save,
} from "react-icons/ai";

const NotesBar = () => {
  const { notes } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(startNewNote());
  };

  return (
    <div className="flex justify-between px-6 py-4 text-sm font-semibold border-b-2 bg-primaryTransparent rounded-t-2xl">
      <ButtonBar onClick={handleAddNote}>
        <p className="hidden md:inline">Añadir Nota</p>
        <Add className="ml-1" size={"1.2rem"} />
      </ButtonBar>
      {notes.active && (
        <div className="flex">
          <p className="mr-6">01/01/2022</p>
          <ButtonBar margin={"mr-6"}>
            <p className="hidden md:inline">Imagen</p>
            <Image className="ml-1" size={"1.2rem"} />
          </ButtonBar>
          <ButtonBar>
            <p className="hidden md:inline">Guardar</p>
            <Save className="ml-1" size={"1.2rem"} />
          </ButtonBar>
        </div>
      )}
    </div>
  );
};

export default NotesBar;
