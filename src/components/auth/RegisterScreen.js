import React from "react";
import svg from "../../assets/undraw_taking_notes_re_bnaf.svg";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="px-5 mx-auto my-10 rounded-2xl md:border-2 md:border-solid md:w-2/6 md:p-8">
      <h2 className="text-3xl font-semibold font-montse">Bienvenid@</h2>
      <h3 className="text-2xl font-semibold text-gray-400 font-montse">
        Registrate para continuar
      </h3>
      <img src={svg} alt="Notas" className="p-10 mx-auto w-80" />
      <form className="">
        <Input name="name" type="text" label="Nombre" />
        <Input name="email" type="email" label="Correo electronico" />
        <Input name="password" type="password" label="Contraseña" />
        <Button color="bg-primary" textColor="text-white">
          Registrarse
        </Button>
      </form>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-400">
          Ya tienes una cuenta,
        </p>
        <Link
          to={"/auth/login"}
          className="font-semibold underline underline-offset-4 text-strongGreen"
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
