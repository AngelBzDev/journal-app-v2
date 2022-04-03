import React from "react";
import svg from "../../assets/undraw_taking_notes_re_bnaf.svg";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import Message from "../ui/Message";
import { startCreateUserWithEmailAndPassword } from "../../actions/auth";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  function handleRegister(e) {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startCreateUserWithEmailAndPassword(email, password, name));
    }
  }

  function isFormValid() {
    if (
      validator.isEmpty(name) ||
      validator.isEmpty(email) ||
      validator.isEmpty(password)
    ) {
      dispatch(setError("Todos los campos son obligatorios"));
      return false;
    }

    if (!validator.isEmail(email)) {
      dispatch(setError("El correo no es valido"));
      return false;
    }

    if (
      !validator.isStrongPassword(password, {
        minSymbols: 0,
        minNumbers: 0,
        minLowercase: 0,
        minUppercase: 0,
      })
    ) {
      dispatch(setError("La contraseña es muy corta"));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div className="px-5 mx-auto my-10 rounded-2xl md:border-2 md:border-solid md:w-2/6 md:p-8">
      <h2 className="text-3xl font-semibold font-montse">Bienvenid@</h2>
      <h3 className="text-2xl font-semibold text-gray-400 font-montse">
        Registrate para continuar
      </h3>
      <img src={svg} alt="Notas" className="p-10 mx-auto w-80" />
      <form onSubmit={handleRegister}>
        <Input
          name="name"
          type="text"
          label="Nombre"
          onChange={handleInputChange}
          value={name}
        />
        <Input
          name="email"
          type="email"
          label="Correo electronico"
          onChange={handleInputChange}
          value={email}
        />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          onChange={handleInputChange}
          value={password}
        />
        {msgError && <Message message={msgError} type="error" />}
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
          onClick={() => dispatch(removeError())}
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
