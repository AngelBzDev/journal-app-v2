import types from "../types/types";

const init = {
  loading: false,
  msgError: null
}

function uiReducer(state = init, action){
  switch(action.type){
    case types.setError:
      return {
        ...state,
        msgError: action.payload
      }
    case types.removeError:
      return {
        ...state,
        msgError: null
      }
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}

export default uiReducer