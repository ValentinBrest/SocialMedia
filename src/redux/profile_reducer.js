import { profileAPI, userAPI } from "../api/api";

const ADD_POST= "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {name: 'Viktor Valdes', time: '15:03', date: '03.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Smeh Petrovich', time: '11:45', date: '10.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Sonya Bezrukova', time: '00:17', date: '22.02.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Michael Shumacher', time: '22:23', date: '04.01.2022', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: "Federico Felinni",
                time: action.timePost,
                date: action.datePost,
                text: action.newTextPost,        
            }
            return {
                ...state, 
                posts: [...state.posts, newPost], 
            }

        case SET_USER_PROFILE:  
            return {...state, profile: action.profile}

        case SET_STATUS:  
            return {...state, status: action.status}

        default :
            return state    
    }
}

export const addPostActionCreator = (timePost, datePost, newTextPost) => ({
    type: ADD_POST,
    timePost, 
    datePost,
    newTextPost
})

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, 
    profile
})

const setStatus = (status) => ({
    type: SET_STATUS, 
    status
})


export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            });
    }
}

export default profileReducer