import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth_reducer";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
