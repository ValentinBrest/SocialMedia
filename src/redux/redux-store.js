import { combineReducers, createStore } from "redux";
import authReducer from "./auth_reducer";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers)

window.store = store

export default store
