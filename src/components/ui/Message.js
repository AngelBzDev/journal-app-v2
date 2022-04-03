import React from "react";

const Message = ({ message, type }) => {
  if (type === "error")
    return (
      <div className="p-3 bg-red-500 rounded-xl text-center text-white font-semibold mt-8">
        <p>{message}</p>
      </div>
    );

    return (
      <div className="p-3 bg-emerald-500 rounded-xl text-center text-white font-semibold mt-8">
        <p>{message}</p>
      </div>
    )
};

export default Message;
