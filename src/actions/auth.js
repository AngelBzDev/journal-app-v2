import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../firebase/firebase.config";
import types from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const startWithGoogle = () => {
  //Cuando se retorna un callback, significa que es una accion asincrona y el dispatch no los proporciona thunk
  return (dispatch) => {
    signInWithPopup(auth, provider).then(({ user }) =>
      dispatch(login(user.uid, user.displayName))
    );
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));

        dispatch(finishLoading());
      })
      .catch((e) => {
        console.log(e, "No existe el usuario");

        dispatch(finishLoading());
      });
  };
};

export const startCreateUserWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        //Actualizar los datos del perfil
        await updateProfile(user, {
          displayName: name,
        });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => console.log(e));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch(logout());
  };
};
