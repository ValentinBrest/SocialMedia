import  profileReducer  from "./profile_reducer";
import  dialogReducer  from "./dialog_reducer";

export let store = {
    _state : {
        profilePage: {
            posts: [
                {name: 'Viktor Valdes', time: '15:03', date: '03.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
                {name: 'Smeh Petrovich', time: '11:45', date: '10.10.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
                {name: 'Sonya Bezrukova', time: '00:17', date: '22.02.2021', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'},
                {name: 'Michael Shumacher', time: '22:23', date: '04.01.2022', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ha'}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
    },
    _callSubscriber () {
        console.log(' You are yhe best programmer')    
    },
    getState() {
        return this._state
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    }
}




    
window.store = store;

export default store;