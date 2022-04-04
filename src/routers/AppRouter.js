import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { login } from "../actions/auth";
import JournalScreen from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase.config";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  //Mantener la sesion iniciada
  useEffect(() => {
    //Observable que esta al pendiente de la autenticacion, cada que la auth cambie se va a ejecutar
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  return (
    <div className="w-11/12 mx-auto max-w-7xl font-montse">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/" element={<JournalScreen />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
