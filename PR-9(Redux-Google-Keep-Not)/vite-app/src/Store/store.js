import {thunk} from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../Servise/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
