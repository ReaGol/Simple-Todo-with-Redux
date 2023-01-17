import { combineReducers } from "redux"
import todoReducer from "./todoReducer.js"


const reducers = combineReducers({
    todo: todoReducer
})

export default reducers