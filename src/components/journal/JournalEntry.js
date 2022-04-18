import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ title, body, id, url, date }) => {
  const formatDate = moment(date).format("DD-MM-YYYY");
  const dispath = useDispatch();

  const handleClickEntry = () => {
    dispath(activeNote(id, { title, body, url, date }));
  };

  return (
    <div
      className="flex items-center p-3 mb-6 transition-all duration-300 border shadow-lg cursor-pointer bg-primaryTransparent rounded-2xl hover:bg-gray-100 hover:border-strongGreen"
      onClick={handleClickEntry}
    >
      {url && (
        <img
          src={url}
          alt="Imagen"
          style={{ width: "60px", height: "60px" }}
          className="rounded-2xl"
        />
      )}
      <div className="w-full ml-4">
        <h4 className="text-lg font-bold text-primary">{title}</h4>
        <p className="block w-full mt-2 font-medium textBody">{body}</p>
        <p className="mt-2 text-sm font-bold text-right text-strongGreen">
          {formatDate}
        </p>
      </div>
    </div>
  );
};

export default JournalEntry;
