import React from "react";

const Input = ({ label, name, type, onChange, value }) => {
  return (
    <div className="mb-3">
      <label className="block mb-1 font-semibold text-strongGreen">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="w-full px-0 py-2 text-lg font-semibold border-b-2 resize-none vh-50 focus:outline-none focus:border-primary"
          name={name}
          value={value}
          onChange={onChange}
        >
          hay mi pichula
        </textarea>
      ) : (
        <input
          type={type}
          className="w-full px-0 py-2 text-lg font-semibold border-b-2 focus:outline-none focus:border-primary"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
