import React, { useRef } from 'react';
import { addPostActionCreator, updateNewPostCreator } from '../../../redux/profile_reducer';
import Button from '../../UI/Button/Button';
import Textarea from '../../UI/Textarea/Textarea';
import cl from './MyPosts.module.css'
import Post from './Post/Post';


const newPostElement = React.createRef();

const MyPosts = (props) => {

    const oldPosts = props.posts.map(item => <Post name={item.name} time={item.time} date={item.date} text={item.text} key={item.time}/>)
    
    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div className={cl.new__post}>
                <h2 className={cl.new__post_title}>New Post</h2>
                <Textarea 
                    onChange={onPostChange}
                    ref={newPostElement} 
                    className={cl.new__post_area} 
                    placeholder='write something...'
                    value={props.newPostText}
                />
                <Button onClick={addPost}>Send</Button>
            </div>

            <div className={cl.old__post}>
                {oldPosts}
            </div>
            
        </div>
    );
};

export default MyPosts;