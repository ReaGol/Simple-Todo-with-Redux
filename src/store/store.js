import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "../state/reducers/index.js";
// import { initialState } from "./reducers/todoReducer.js";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'

export const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)