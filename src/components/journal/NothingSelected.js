import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const NothingSelected = () => {
  return (
    <div className="flex items-center justify-center my-10 h-5/6 md:my-0">
      <p className="text-xl font-bold text-center text-strongGreen">
      <AiOutlineStar style={{margin: '0 auto 15px auto', }} size='30px' /> Seleccione alguna nota
      </p>
    </div>
  );
};

export default NothingSelected;
