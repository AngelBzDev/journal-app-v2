import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote, startSaveNote, startUploadingFile } from "../../actions/notes";
import ButtonBar from "../ui/ButtonBar";
import {
  AiOutlineFileAdd as Add,
  AiOutlineFileImage as Image,
  AiOutlineSave as Save,
} from "react-icons/ai";
import moment from "moment";

const NotesBar = () => {
  const { notes } = useSelector((state) => state);
  const dispatch = useDispatch();

  const formatDate = moment(notes.active?.date).format("DD-MM-YYYY");

  const handleAddNote = () => {
    dispatch(startNewNote());
  };

  const handleSaveNote = () => {
    dispatch(startSaveNote(notes.active));
  };

  const inpImage = useRef();
  const handleClickImage = () => inpImage.current.click();
  const handleChangeimage = ({ target }) => {
    const file = target.files[0];
    if (file) dispatch(startUploadingFile(file));
  };

  return (
    <div className="flex justify-between px-6 py-4 text-sm font-semibold border-b-2 bg-primaryTransparent rounded-t-2xl">
      <ButtonBar onClick={handleAddNote}>
        <p className="hidden md:inline">Añadir Nota</p>
        <Add className="ml-1" size={"1.2rem"} />
      </ButtonBar>
      {notes.active && (
        <div className="flex">
          <p className="mr-6">{formatDate}</p>
          <input
            type="file"
            className="hidden"
            ref={inpImage}
            onChange={handleChangeimage}
            id="inpImage"
          />
          <ButtonBar margin={"mr-6"} onClick={handleClickImage}>
            <p className="hidden md:inline">Imagen</p>
            <Image className="ml-1" size={"1.2rem"} />
          </ButtonBar>
          <ButtonBar onClick={handleSaveNote}>
            <p className="hidden md:inline">Guardar</p>
            <Save className="ml-1" size={"1.2rem"} />
          </ButtonBar>
        </div>
      )}
    </div>
  );
};

export default NotesBar;
