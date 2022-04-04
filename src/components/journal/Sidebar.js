import React from "react";
import { ImExit } from "react-icons/im";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

const Sidebar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <div className="flex items-center justify-between px-5 pb-4 my-10 md:px-0">
      <h3 className="text-2xl font-semibold">
        Bienvenid@ <span className="text-primary">Ángel</span>
      </h3>
      <button
        className="hidden text-lg font-semibold underline md:inline underline-offset-2 text-strongGreen"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
      <button
        to={"/"}
        className="block text-xl font-semibold md:hidden text-strongGreen"
      >
        <ImExit />
      </button>
    </div>
  );
};

export default Sidebar;
