import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {

//                     let state = store.getState().profilePage
        
//                     let addPost = () => {
//                         let currenttime = new Date()
//                         let timePost = `${currenttime.getHours()}:${(currenttime.getMinutes() + 1) < 10 ? '0' + (currenttime.getMinutes() + 1): (currenttime.getMinutes() + 1)}` 
//                         let datePost = `${currenttime.getDate()}.${(currenttime.getMonth() + 1) < 10 ? '0' + (currenttime.getMonth() + 1): (currenttime.getMonth() + 1)}.${currenttime.getFullYear()}`;

//                         store.dispatch(addPostActionCreator(timePost, datePost))
//                         store.dispatch(updateNewPostCreator(''))
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostCreator(text))
//                     }    
                    
//                 return <MyPosts  
//                             updateNewPostText={onPostChange} 
//                             addPost={addPost} 
//                             posts={state.posts}
//                             newPostText={state.newPostText}
//                         />
//                 }
//             }
//         </StoreContext.Consumer>

        
//     );
// };
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostCreator(text))
        },
        addPost: () => {
            let currenttime = new Date()
            let timePost = `${currenttime.getHours()}:${(currenttime.getMinutes() + 1) < 10 ? '0' + (currenttime.getMinutes() + 1): (currenttime.getMinutes() + 1)}` 
            let datePost = `${currenttime.getDate()}.${(currenttime.getMonth() + 1) < 10 ? '0' + (currenttime.getMonth() + 1): (currenttime.getMonth() + 1)}.${currenttime.getFullYear()}`;

            dispatch(addPostActionCreator(timePost, datePost))
            dispatch(updateNewPostCreator(''))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;