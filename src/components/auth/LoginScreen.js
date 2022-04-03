import React from "react";
import Input from "../ui/Input";
import svg from "../../assets/undraw_taking_notes_re_bnaf.svg";
import Button from "../ui/Button";
import RoundedButton from "../ui/RoundedButton";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startWithGoogle } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import validator from "validator";
import Message from "../ui/Message";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const handleLoginWithGoogle = () => {
    dispatch(startWithGoogle());
  };

  function handleLogin(e) {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  }

  function isFormValid() {
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
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
      <h2 className="text-3xl font-semibold">Bienvenid@</h2>
      <h3 className="text-2xl font-semibold text-gray-400">
        Inicia para continuar
      </h3>
      <img src={svg} alt="Notas" className="p-10 mx-auto w-80" />
      <form onSubmit={handleLogin}>
        <Input
          name="email"
          type="email"
          label="Correo electronico"
          value={email}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          value={password}
          onChange={handleInputChange}
        />
        {msgError && <Message message={msgError} type="error" />}
        <Button color="bg-primary" textColor="text-white" disabled={loading}>
          Iniciar
        </Button>
      </form>
      <p className="text-sm font-semibold text-center text-gray-400">
        O inicia con redes solciales
      </p>
      <div className="mx-auto w-fit">
        <RoundedButton onClick={handleLoginWithGoogle}>
          <FcGoogle />
        </RoundedButton>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-400">
          No tienes una cuenta,{" "}
        </p>
        <Link
          to={"/auth/register"}
          className="font-semibold underline underline-offset-4 text-strongGreen"
          onClick={() => dispatch(removeError())}
        >
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
