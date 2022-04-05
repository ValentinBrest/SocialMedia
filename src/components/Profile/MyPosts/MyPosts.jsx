import React from 'react';
import AddPostFormRedux from '../../UI/Form/PostForm/PostForm';
import cl from './MyPosts.module.css';
import Post from './Post/Post';


const newPostElement = React.createRef();

const MyPosts = (props) => {

    const oldPosts = props.posts.map(item => <Post name={item.name} time={item.time} date={item.date} text={item.text} key={item.time}/>)
    
    let addPost = (value) => {
        props.addPost(value.newTextPost)
    }

    return (
        <div>
            <div className={cl.new__post}>
                <h2 className={cl.new__post_title}>New Post</h2>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>

            <div className={cl.old__post}>
                {oldPosts}
            </div>
            
        </div>
    );
};

export default MyPosts;