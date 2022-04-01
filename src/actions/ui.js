import types from "../types/types";

export const setError = (msgError) => ({
  type: types.setError,
  payload: msgError,
});

export const removeError = () => ({
  type: types.removeError,
});
