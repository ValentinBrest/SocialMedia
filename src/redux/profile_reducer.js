import { userAPI } from "../api/api";

const ADD_POST= "ADD-POST";
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
    posts: [
        {name: 'Viktor Valdes', time: '15:03', date: '03.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Smeh Petrovich', time: '11:45', date: '10.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Sonya Bezrukova', time: '00:17', date: '22.02.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
        {name: 'Michael Shumacher', time: '22:23', date: '04.01.2022', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: "Federico Felinni",
                time: action.timePost,
                date: action.datePost,
                text: state.newPostText,        
            }
            return {
                ...state, 
                posts: [...state.posts, newPost], 
                newPostText: ''
            }
        case UPDATE_NEW_POST:  
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE:  
            return {...state, profile: action.profile}

        default :
            return state    
    }
}

export const addPostActionCreator = (timePost, datePost) => ({
    type: ADD_POST,
    timePost: timePost, 
    datePost: datePost
})

export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_POST, 
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, 
    profile
})

export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}

export default profileReducer