const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
    personData: [
        {id: 1, name: 'Viktor Valdes', img: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg'},
        {id: 2, name: 'Christov Checheninni', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80'},
        {id: 3, name: 'Sofia Solveretty', img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI'},
        {id: 4, name: 'Leonel Messi', img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI'},
        {id: 5, name: 'Jhon Travollta', img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI'},
    ],
    dialog : [{talk:'hello', me: false}, 
        {talk: 'How are you doing?', me: false}, 
        {talk: 'I am okey. And you?', me: true}
    ],
    newTextMessage : ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                talk: state.newTextMessage,
                me: true
            }
            return {
                ...state, 
                dialog: [...state.dialog, newMessage]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state, 
                newTextMessage : action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
 
export const updateNewMesssageCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE, 
        newText: text
    })

export default dialogReducer