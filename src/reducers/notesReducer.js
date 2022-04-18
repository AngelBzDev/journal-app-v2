/* {
  notes: [],
  active: null || {
    id: id de la nota
    title: '',
    body: '',
    image: '',
    date: 475334574845
  }
} */

import types from "../types/types";

const init = {
  notes: [],
  active: null,
};

const notesReducer = (state = init, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    default:
      return state;
  }
};

export default notesReducer;
