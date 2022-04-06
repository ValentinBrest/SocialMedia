import { authAPI} from "../api/api";

const SET_USER_DATA= "SET_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.payload,
            }
    
        default :
            return state    
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload : {id, email, login, isAuth}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}
export default authReducer