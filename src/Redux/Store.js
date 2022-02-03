import {cakeReducer} from "./Cake/CakeReducer";
import {createStore} from "redux";

export const store = createStore(cakeReducer)