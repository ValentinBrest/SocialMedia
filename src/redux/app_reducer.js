import { authAPI} from "../api/api";
import {stopSubmit} from 'redux-form'
import { getAuthUserData } from "./auth_reducer";
const INITIALIZED_SUCCESS= "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, 
                initialized: true,
            }
    
        default :
            return state    
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
        })

        
    }
}

export default appReducer