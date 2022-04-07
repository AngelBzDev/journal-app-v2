//2. Este archivo define los typos y la accion que hace cada uno

const types = {
  //Autenticacion
  login: '[Auth] Login',
  logout: '[Auth] Logout',
  //Interfaz
  setError: '[UI] Set Error',
  removeError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',
  //Notas
  notesAddNew: '[Notes] New Note',
  notesActive: '[Notes] Set active Note',
  notesLoad: '[Notes] Load notes',
  notesUpdate: '[Notes] Update note',
  notesFileUrl: '[Notes] Update image url',
  notesDelete: '[Notes] Delete note',
  notesCleaning: '[Notes] Notes Cleaning',
}

export default types