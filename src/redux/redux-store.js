import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
})
let store = createStore(reducers)

window.store = store

export default store
