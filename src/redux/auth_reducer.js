const SET_USER_DATA= "SET_USER_DATA";
const UNFOLLOW = 'UNFOLLOW';

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
                ...action.data,
                isAuth: true
            }
    
        default :
            return state    
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data : {id, email, login}})

// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default authReducer