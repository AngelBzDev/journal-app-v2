import React from "react";

const Button = ({ children, color, textColor, disabled}) => {
  return (
    <button
      className={`py-3 px-4 w-full rounded-xl ${color} text-lg font-semibold ${textColor} my-8 disabled:opacity-75`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
