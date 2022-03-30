import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <main className={cl.content}>
            <div className={cl.content__wrap}>
                <img className={cl.content__img} src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="img" />

                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

                <MyPostsContainer />
            </div>
        </main>
    );
};

export default Profile;