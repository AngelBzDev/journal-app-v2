import React from "react";

const Button = ({ children, color, textColor }) => {
  return (
    <button
      className={`py-3 px-4 w-full rounded-2xl ${color} text-lg font-semibold ${textColor} my-8`}
    >
      {children}
    </button>
  );
};

export default Button;
