import React from "react";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-between px-5 pb-4 my-10 md:px-0">
      <h3 className="text-2xl font-semibold">
        Bienvenid@ <span className="text-primary">Ángel</span>
      </h3>
      <Link
        to={"/"}
        className="hidden text-lg font-semibold underline md:inline underline-offset-2 text-strongGreen"
      >
        Cerrar sesión
      </Link>
      <Link
        to={"/"}
        className="block text-xl font-semibold md:hidden text-strongGreen"
      >
        <ImExit />
      </Link>
    </div>
  );
};

export default Sidebar;
