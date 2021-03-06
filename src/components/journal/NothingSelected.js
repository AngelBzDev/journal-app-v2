import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const NothingSelected = () => {
  return (
    <div className="py-40">
      <p className="text-xl font-bold text-strongGreen">
      <AiOutlineStar style={{margin: '0 auto 15px auto', }} size='30px' /> Seleccione alguna nota
      </p>
    </div>
  );
};

export default NothingSelected;
