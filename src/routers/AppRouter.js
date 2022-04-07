import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { login } from "../actions/auth";
import JournalScreen from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase.config";
import AuthRouter from "./AuthRouter";
import LoadingScreen from "../components/ui/LoadingScreen";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import loadNotes from "../helpers/loadNotes";
import { setNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();
  //Revisa si esta autenticado o no
  const [check, setCheck] = useState(true);
  const [isLoggin, setIsLoggin] = useState(false);

  //Mantener la sesion iniciada
  useEffect(() => {
    //Observable que esta al pendiente de la autenticacion, cada que la auth cambie se va a ejecutar
    auth.onAuthStateChanged( async(user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggin(true);

        const notes = await loadNotes(user.uid)
        //Como aqui es la primerea vez que conocemos el uid del usuario, se llama a loadNotes
        dispatch(setNotes(notes));
      } else {
        setIsLoggin(false);
      }
      setTimeout(() => {
        setCheck(false);
      }, 1000);
    });
  }, [dispatch, check, isLoggin]);

  if (check) return <LoadingScreen />;

  return (
    <div className="w-11/12 mx-auto max-w-7xl font-montse">
      <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
          <Route
            path="/auth/*"
            element={
              <PublicRoutes isLoggin={isLoggin}>
                <AuthRouter />
              </PublicRoutes>
            }
          />
          {/* Rutas Privadas */}
          <Route
            path="/"
            element={
              <PrivateRoutes isLoggin={isLoggin}>
                <JournalScreen />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
