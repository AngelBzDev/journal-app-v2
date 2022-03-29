import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase.config";
import types from "../types/types";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startWithGoogle = () => {
  //Cuando se retorna un callback, significa que es una accion asincrona y el dispatch no los proporciona thunk
  return (dispatch) => {
    signInWithPopup(auth, provider).then(({ user }) =>
      dispatch(login(user.uid, user.displayName))
    );
  };
};
