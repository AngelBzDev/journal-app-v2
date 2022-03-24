import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";

//Adjunta los reducers para poder usarlos en el createStore
const reducers = combineReducers({
  //La estructura de este objeto es como se vera el state
  auth: authReducer,
})

//Para crear un store usamos createStore al cual se le pasa SOLO un reducer como parametro
export const store = createStore(
  reducers,
  //Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//Despues lo importamos en el punto mas alto de la aplicacion
