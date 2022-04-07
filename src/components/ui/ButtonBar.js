import React from "react";

const ButtonBar = ({ children, margin, onClick }) => {
  return (
    <button
      className={`font-semibold hover:text-strongGreen ${margin} flex items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBar;
